import { Resend } from "resend";
import { logger } from "./logger";

const DEST_EMAIL = "flavios.monteiro@hotmail.com";

const BANK_LABELS: Record<string, string> = {
  "porto-bank": "Porto Bank",
  "banco-bv": "Banco BV",
  "c6-bank": "C6 Bank",
  "creditas": "Creditas",
};

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
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    logger.warn("RESEND_API_KEY não configurado — e-mail não será enviado.");
    return;
  }

  const bankLabel = BANK_LABELS[banco] ?? banco;
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: "F1 Soluções Financeiras <propostas@f1solucoesveiculogarantia.com.br>",
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
