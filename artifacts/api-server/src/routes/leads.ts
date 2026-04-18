import { Router, type IRouter } from "express";
import { db, leadsTable, contactsTable } from "@workspace/db";
import { SubmitLeadBody, SubmitContactBody, GetLeadsStatsResponse } from "@workspace/api-zod";
import { sql } from "drizzle-orm";

const router: IRouter = Router();

function sanitizeCpf(value: string): string {
  return value.replace(/\D/g, "").slice(0, 11);
}

function isValidCpf(cpf: string): boolean {
  const digits = cpf.replace(/\D/g, "");
  if (digits.length !== 11) return false;
  if (/^(\d)\1+$/.test(digits)) return false;
  let sum = 0;
  for (let i = 0; i < 9; i++) sum += parseInt(digits.charAt(i), 10) * (10 - i);
  let rev = 11 - (sum % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(digits.charAt(9), 10)) return false;
  sum = 0;
  for (let i = 0; i < 10; i++) sum += parseInt(digits.charAt(i), 10) * (11 - i);
  rev = 11 - (sum % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(digits.charAt(10), 10)) return false;
  return true;
}

function isValidPlate(plate: string): boolean {
  const p = plate.toUpperCase();
  return /^[A-Z]{3}[0-9]{4}$/.test(p) || /^[A-Z]{3}[0-9][A-Z][0-9]{2}$/.test(p);
}

router.post("/leads", async (req, res): Promise<void> => {
  const parsed = SubmitLeadBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { name, email, phone, cpf, licensePlate, vehiclePaid, vehicleInOwnerName, hasIncome, consentLgpd, source } = parsed.data;

  if (!consentLgpd) {
    res.status(400).json({ error: "Você precisa aceitar a Política de Privacidade para continuar." });
    return;
  }

  if (cpf) {
    const cpfDigits = sanitizeCpf(cpf);
    if (!isValidCpf(cpfDigits)) {
      res.status(400).json({ error: "CPF inválido." });
      return;
    }
  }

  if (licensePlate) {
    const plate = licensePlate.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
    if (!isValidPlate(plate)) {
      res.status(400).json({ error: "Placa inválida." });
      return;
    }
  }

  const [lead] = await db.insert(leadsTable).values({
    name,
    email,
    phone,
    cpf: cpf ? sanitizeCpf(cpf) : null,
    licensePlate: licensePlate ? licensePlate.replace(/[^A-Za-z0-9]/g, "").toUpperCase().slice(0, 7) : null,
    vehiclePaid: vehiclePaid ?? null,
    vehicleInOwnerName: vehicleInOwnerName ?? null,
    hasIncome: hasIncome ?? null,
    consentLgpd,
    source: source ?? "home",
  }).returning({ id: leadsTable.id });

  req.log.info({ leadId: lead.id }, "Lead submitted");
  res.status(201).json({ id: lead.id, message: "Solicitação recebida com sucesso! Entraremos em contato em breve." });
});

router.get("/leads/stats", async (req, res): Promise<void> => {
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startOfWeek = new Date(startOfDay);
  startOfWeek.setDate(startOfDay.getDate() - startOfDay.getDay());
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  const [totalResult] = await db.execute(sql`SELECT COUNT(*) as count FROM leads`);
  const [todayResult] = await db.execute(sql`SELECT COUNT(*) as count FROM leads WHERE created_at >= ${startOfDay.toISOString()}`);
  const [weekResult] = await db.execute(sql`SELECT COUNT(*) as count FROM leads WHERE created_at >= ${startOfWeek.toISOString()}`);
  const [monthResult] = await db.execute(sql`SELECT COUNT(*) as count FROM leads WHERE created_at >= ${startOfMonth.toISOString()}`);

  const stats = GetLeadsStatsResponse.parse({
    total: Number((totalResult as { count: string }).count),
    today: Number((todayResult as { count: string }).count),
    thisWeek: Number((weekResult as { count: string }).count),
    thisMonth: Number((monthResult as { count: string }).count),
  });

  res.json(stats);
});

router.post("/contact", async (req, res): Promise<void> => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { name, email, phone, subject, message, consentLgpd } = parsed.data;

  if (!consentLgpd) {
    res.status(400).json({ error: "Você precisa aceitar a Política de Privacidade para continuar." });
    return;
  }

  const [contact] = await db.insert(contactsTable).values({
    name,
    email,
    phone: phone ?? null,
    subject,
    message,
    consentLgpd,
  }).returning({ id: contactsTable.id });

  req.log.info({ contactId: contact.id }, "Contact message submitted");
  res.status(201).json({ id: contact.id, message: "Mensagem recebida! Retornaremos em breve." });
});

export default router;
