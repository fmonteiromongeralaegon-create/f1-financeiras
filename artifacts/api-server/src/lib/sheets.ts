import { google } from "googleapis";
import { logger } from "./logger";

const BANK_SHEET_NAMES: Record<string, string> = {
  "porto-bank": "Porto Bank",
  "banco-bv": "Banco BV",
  "c6-bank": "C6 Bank",
  "creditas": "Creditas",
};

function getAuth() {
  const keyJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  const spreadsheetId = process.env.GOOGLE_SHEETS_ID;

  if (!keyJson || !spreadsheetId) {
    logger.warn(
      "Google Sheets não configurado — defina GOOGLE_SERVICE_ACCOUNT_JSON e GOOGLE_SHEETS_ID."
    );
    return null;
  }

  try {
    const credentials = JSON.parse(keyJson);
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    return { auth, spreadsheetId };
  } catch {
    logger.error("JSON da conta de serviço inválido");
    return null;
  }
}

export async function appendPropostaToSheet(
  banco: string,
  dados: Record<string, unknown>
): Promise<void> {
  const config = getAuth();
  if (!config) return;

  const sheetName = BANK_SHEET_NAMES[banco] ?? banco;
  const sheets = google.sheets({ version: "v4", auth: config.auth });

  const values = [
    [new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }), ...Object.values(dados).map(String)],
  ];

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: config.spreadsheetId,
      range: `${sheetName}!A1`,
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });
    logger.info({ banco }, "Proposta adicionada ao Google Sheets");
  } catch (err) {
    logger.error({ err, banco }, "Falha ao gravar no Google Sheets");
  }
}
