import { logger } from "./logger";

const SUBDOMAIN = process.env.KOMMO_SUBDOMAIN;
const TOKEN = process.env.KOMMO_ACCESS_TOKEN;

function getBaseUrl(): string | null {
  if (!SUBDOMAIN) return null;
  return `https://${SUBDOMAIN}.kommo.com/api/v4`;
}

async function kommoPost(path: string, body: unknown): Promise<unknown> {
  const base = getBaseUrl();
  if (!base) throw new Error("KOMMO_SUBDOMAIN não configurado");
  if (!TOKEN) throw new Error("KOMMO_ACCESS_TOKEN não configurado");

  const res = await fetch(`${base}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify(body),
  });

  const json = await res.json();
  if (!res.ok) {
    throw new Error(`Kommo API error ${res.status}: ${JSON.stringify(json)}`);
  }
  return json;
}

export async function createKommoLead(params: {
  name: string;
  email: string;
  phone: string;
  cpf?: string | null;
  licensePlate?: string | null;
}): Promise<void> {
  if (!SUBDOMAIN || !TOKEN) {
    logger.warn("Kommo não configurado — lead não será enviado ao CRM.");
    return;
  }

  try {
    const contactPayload = [
      {
        name: params.name,
        custom_fields_values: [
          ...(params.email
            ? [{ field_code: "EMAIL", values: [{ value: params.email, enum_code: "WORK" }] }]
            : []),
          ...(params.phone
            ? [{ field_code: "PHONE", values: [{ value: params.phone, enum_code: "MOB" }] }]
            : []),
        ],
      },
    ];

    const contactRes = (await kommoPost("/contacts", contactPayload)) as {
      _embedded?: { contacts?: Array<{ id: number }> };
    };

    const contactId = contactRes._embedded?.contacts?.[0]?.id;

    const leadName = [
      `Lead - ${params.name}`,
      params.licensePlate ? `Placa: ${params.licensePlate}` : null,
      params.cpf ? `CPF: ${params.cpf}` : null,
    ]
      .filter(Boolean)
      .join(" | ");

    const leadPayload = [
      {
        name: leadName,
        ...(contactId ? { _embedded: { contacts: [{ id: contactId }] } } : {}),
      },
    ];

    await kommoPost("/leads", leadPayload);

    logger.info({ name: params.name }, "Lead enviado ao Kommo com sucesso");
  } catch (err) {
    logger.error({ err, name: params.name }, "Falha ao enviar lead ao Kommo");
  }
}
