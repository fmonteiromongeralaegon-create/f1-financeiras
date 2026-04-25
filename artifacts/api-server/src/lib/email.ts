// Resend — via Replit Connectors (resend connector)
// API key is fetched automatically from the connector; never hardcoded.
import { Resend } from "resend";
import { logger } from "./logger";

// Destination for proposal notifications.
// While the Resend account domain is unverified, emails can only go to
// the account owner's address. Verify f1solucoesveiculogarantia.com.br
// at resend.com/domains to unlock sending to any recipient.
const DEST_EMAIL = process.env.PROPOSTA_DEST_EMAIL ?? "flavios.monteiro@hotmail.com";

const BANK_LABELS: Record<string, string> = {
  "porto-bank": "Porto Bank",
  "banco-bv": "Banco BV",
  "c6-bank": "C6 Bank",
  creditas: "Creditas",
};

let _connectionSettings: { api_key: string; from_email?: string } | null = null;

async function getResendClient(): Promise<{ client: Resend; fromEmail: string }> {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY
    ? "repl " + process.env.REPL_IDENTITY
    : process.env.WEB_REPL_RENEWAL
    ? "depl " + process.env.WEB_REPL_RENEWAL
    : null;

  if (hostname && xReplitToken) {
    try {
      const res = await fetch(
        `https://${hostname}/api/v2/connection?include_secrets=true&connector_names=resend`,
        {
          headers: {
            Accept: "application/json",
            "X-Replit-Token": xReplitToken,
          },
        }
      );
      const json = await res.json();
      _connectionSettings = json.items?.[0]?.settings ?? null;
    } catch {
      _connectionSettings = null;
    }
  }

  const apiKey = _connectionSettings?.api_key ?? process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("Resend API key não disponível");

  const fromEmail =
    _connectionSettings?.from_email ??
    "F1 Soluções Financeiras <propostas@f1solucoesveiculogarantia.com.br>";

  return { client: new Resend(apiKey), fromEmail };
}

function formatValue(val: unknown): string {
  if (val === null || val === undefined || val === "") return "—";
  if (typeof val === "boolean") return val ? "Sim" : "Não";
  return String(val);
}

function buildHtml(banco: string, nome: string, dados: Record<string, unknown>): string {
  const bankLabel = BANK_LABELS[banco] ?? banco;

  const rows = Object.entries(dados)
    .map(
      ([k, v]) =>
        `<tr>
          <td style="padding:7px 14px;border-bottom:1px solid #eee;color:#555;font-size:13px;white-space:nowrap;">${k}</td>
          <td style="padding:7px 14px;border-bottom:1px solid #eee;font-weight:600;font-size:13px;">${formatValue(v)}</td>
        </tr>`
    )
    .join("");

  return `
    <div style="font-family:sans-serif;max-width:700px;margin:auto;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;">
      <div style="background:#1a2a5e;padding:24px 32px;">
        <h1 style="color:#fff;margin:0;font-size:20px;font-weight:700;">F1 Soluções Financeiras</h1>
        <p style="color:#c084fc;margin:6px 0 0;font-size:14px;">Nova Proposta — ${bankLabel}</p>
      </div>
      <div style="background:#f9fafb;padding:24px 32px;">
        <h2 style="color:#1a2a5e;margin:0 0 16px;font-size:16px;">Cliente: ${nome}</h2>
        <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,.08);">
          ${rows}
        </table>
        <p style="color:#9ca3af;font-size:11px;margin-top:16px;">
          Recebido em ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}
        </p>
      </div>
    </div>`;
}

export async function sendPropostaEmail(
  banco: string,
  nome: string,
  dados: Record<string, unknown>
): Promise<void> {
  const bankLabel = BANK_LABELS[banco] ?? banco;

  try {
    const { client, fromEmail } = await getResendClient();

    // Use connector's from_email if set; otherwise fall back to Resend's shared
    // onboarding domain (always allowed). Switch to the verified custom domain
    // once f1solucoesveiculogarantia.com.br is added in the Resend dashboard.
    const from =
      fromEmail && fromEmail.includes("@") && !fromEmail.includes("gmail.com")
        ? fromEmail
        : "F1 Soluções Financeiras <onboarding@resend.dev>";

    const { error } = await client.emails.send({
      from,
      to: [DEST_EMAIL],
      subject: `Nova Proposta - ${bankLabel} - ${nome}`,
      html: buildHtml(banco, nome, dados),
    });

    if (error) {
      logger.error({ error, banco, nome }, "Resend retornou erro");
    } else {
      logger.info({ banco, nome }, "E-mail de proposta enviado via Resend");
    }
  } catch (err) {
    logger.error({ err, banco, nome }, "Falha ao enviar e-mail via Resend");
  }
}
