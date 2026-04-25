import nodemailer from "nodemailer";
import { logger } from "./logger";

const DEST_EMAIL = "flavios.monteiro@hotmail.com";

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    logger.warn("SMTP não configurado — e-mails não serão enviados. Defina SMTP_HOST, SMTP_USER e SMTP_PASS.");
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

const BANK_LABELS: Record<string, string> = {
  "porto-bank": "Porto Bank",
  "banco-bv": "Banco BV",
  "c6-bank": "C6 Bank",
  "creditas": "Creditas",
};

function formatValue(val: unknown): string {
  if (val === null || val === undefined || val === "") return "—";
  return String(val);
}

function buildHtml(banco: string, nome: string, dados: Record<string, unknown>): string {
  const bankLabel = BANK_LABELS[banco] ?? banco;

  const rows = Object.entries(dados)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;border-bottom:1px solid #eee;color:#555;font-size:13px;">${k}</td>` +
        `<td style="padding:6px 12px;border-bottom:1px solid #eee;font-weight:600;font-size:13px;">${formatValue(v)}</td></tr>`
    )
    .join("");

  return `
    <div style="font-family:sans-serif;max-width:680px;margin:auto;">
      <div style="background:#1a2a5e;padding:24px 32px;">
        <h1 style="color:#fff;margin:0;font-size:20px;">F1 Soluções Financeiras</h1>
        <p style="color:#c084fc;margin:4px 0 0;font-size:14px;">Nova Proposta recebida — ${bankLabel}</p>
      </div>
      <div style="background:#f9fafb;padding:24px 32px;">
        <h2 style="color:#1a2a5e;margin:0 0 16px;">Cliente: ${nome}</h2>
        <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,.08);">
          ${rows}
        </table>
        <p style="color:#888;font-size:11px;margin-top:20px;">Recebido em ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}</p>
      </div>
    </div>`;
}

export async function sendPropostaEmail(
  banco: string,
  nome: string,
  dados: Record<string, unknown>
): Promise<void> {
  const transporter = getTransporter();
  if (!transporter) return;

  const bankLabel = BANK_LABELS[banco] ?? banco;
  const subject = `Nova Proposta - ${bankLabel} - ${nome}`;

  try {
    await transporter.sendMail({
      from: `"F1 Soluções Financeiras" <${process.env.SMTP_USER}>`,
      to: DEST_EMAIL,
      subject,
      html: buildHtml(banco, nome, dados),
    });
    logger.info({ banco, nome }, "E-mail de proposta enviado");
  } catch (err) {
    logger.error({ err, banco, nome }, "Falha ao enviar e-mail de proposta");
  }
}
