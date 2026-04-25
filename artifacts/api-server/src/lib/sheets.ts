// Google Sheets — via Replit Connectors SDK (google-sheet proxy)
// Authentication and token refresh are handled automatically by the SDK.
import { ReplitConnectors } from "@replit/connectors-sdk";
import { logger } from "./logger";

const BANK_SHEET_NAMES: Record<string, string> = {
  "porto-bank": "Porto Bank",
  "banco-bv": "Banco BV",
  "c6-bank": "C6 Bank",
  "creditas": "Creditas",
};

const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_ID;

export async function appendPropostaToSheet(
  banco: string,
  dados: Record<string, unknown>
): Promise<void> {
  if (!SPREADSHEET_ID) {
    logger.warn("GOOGLE_SHEETS_ID não configurado — dados não serão gravados no Sheets.");
    return;
  }

  const sheetName = BANK_SHEET_NAMES[banco] ?? banco;
  const row = [
    new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }),
    ...Object.values(dados).map((v) => (v == null ? "" : String(v))),
  ];

  try {
    const connectors = new ReplitConnectors();
    const range = encodeURIComponent(`${sheetName}!A1`);
    const response = await connectors.proxy(
      "google-sheet",
      `/v4/spreadsheets/${SPREADSHEET_ID}/values/${range}:append?valueInputOption=USER_ENTERED`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ values: [row] }),
      }
    );

    if (!response.ok) {
      const body = await response.text();
      logger.error({ banco, status: response.status, body }, "Falha ao gravar no Google Sheets");
      return;
    }

    logger.info({ banco, sheetName }, "Proposta adicionada ao Google Sheets");
  } catch (err) {
    logger.error({ err, banco }, "Erro ao conectar ao Google Sheets");
  }
}
