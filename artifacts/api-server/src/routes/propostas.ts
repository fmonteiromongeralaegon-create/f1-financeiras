import { Router, type IRouter } from "express";
import { db, propostasTable } from "@workspace/db";
import { sendPropostaEmail } from "../lib/email";
import { appendPropostaToSheet } from "../lib/sheets";
import { z } from "zod";

const router: IRouter = Router();

const VALID_BANKS = ["porto-bank", "banco-bv", "c6-bank", "creditas"] as const;

const PropostaBody = z.object({
  banco: z.enum(VALID_BANKS),
  nome: z.string().min(2),
  cpf: z.string().min(11),
  rg: z.string().min(1),
  dataNascimento: z.string().min(1),
  cidadeNascimento: z.string().min(1),
  sexo: z.enum(["Masculino", "Feminino"]),
  nomeMae: z.string().min(2),
  cep: z.string().min(8),
  endereco: z.string().min(1),
  bairro: z.string().min(1),
  cidade: z.string().min(1),
  estado: z.string().min(1),
  numeroComplemento: z.string().optional(),
  telefone: z.string().optional(),
  celular: z.string().min(10),
  email: z.string().email(),
  tipoTrabalho: z.enum(["Assalariado/Registrado", "Autônomo", "Empresário", "Aposentado/Pensionista"]),
  profissao: z.string().optional(),
  tempoTrabalho: z.string().optional(),
  nomeEmpresa: z.string().optional(),
  enderecoEmpresa: z.string().optional(),
  telefoneEmpresa: z.string().optional(),
  cnpjEmpresa: z.string().optional(),
  rendaMensal: z.string().min(1),
  outrasRendas: z.boolean(),
  valorOutrasRendas: z.string().optional(),
  placaVeiculo: z.string().min(1),
  marcaVeiculo: z.string().optional(),
  modeloVeiculo: z.string().optional(),
  anoFabricacao: z.string().optional(),
  anoModelo: z.string().optional(),
  bancoConta: z.string().optional(),
  agencia: z.string().optional(),
  contaCorrente: z.string().optional(),
});

const FIELD_LABELS: Record<string, string> = {
  banco: "Banco",
  nome: "Nome Completo",
  cpf: "CPF",
  rg: "R.G.",
  dataNascimento: "Data de Nascimento",
  cidadeNascimento: "Cidade de Nascimento",
  sexo: "Sexo",
  nomeMae: "Nome da Mãe",
  cep: "CEP",
  endereco: "Endereço",
  bairro: "Bairro",
  cidade: "Cidade",
  estado: "Estado",
  numeroComplemento: "Número/Complemento",
  telefone: "Telefone Residencial",
  celular: "Celular",
  email: "E-mail",
  tipoTrabalho: "Tipo de Trabalho",
  profissao: "Profissão",
  tempoTrabalho: "Tempo na Função/Benefício",
  nomeEmpresa: "Nome da Empresa",
  enderecoEmpresa: "Endereço da Empresa",
  telefoneEmpresa: "Telefone da Empresa",
  cnpjEmpresa: "CNPJ da Empresa",
  rendaMensal: "Renda Mensal",
  outrasRendas: "Outras Fontes de Renda",
  valorOutrasRendas: "Valor de Outras Rendas",
  placaVeiculo: "Placa do Veículo",
  marcaVeiculo: "Marca do Veículo",
  modeloVeiculo: "Modelo do Veículo",
  anoFabricacao: "Ano de Fabricação",
  anoModelo: "Ano do Modelo",
  bancoConta: "Banco (conta)",
  agencia: "Agência",
  contaCorrente: "Conta Corrente",
};

router.post("/propostas", async (req, res): Promise<void> => {
  const parsed = PropostaBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Dados inválidos", details: parsed.error.flatten() });
    return;
  }

  const data = parsed.data;

  const labeledDados: Record<string, unknown> = {};
  for (const [key, val] of Object.entries(data)) {
    const label = FIELD_LABELS[key] ?? key;
    labeledDados[label] = val;
  }

  const [proposta] = await db
    .insert(propostasTable)
    .values({
      banco: data.banco,
      nome: data.nome,
      cpf: data.cpf.replace(/\D/g, ""),
      email: data.email,
      celular: data.celular.replace(/\D/g, ""),
      dados: data,
    })
    .returning({ id: propostasTable.id });

  req.log.info({ propostaId: proposta.id, banco: data.banco }, "Proposta salva");

  await Promise.allSettled([
    sendPropostaEmail(data.banco, data.nome, labeledDados),
    appendPropostaToSheet(data.banco, labeledDados),
  ]);

  res.status(201).json({
    id: proposta.id,
    message: "Proposta enviada com sucesso! Em breve nossa equipe entrará em contato.",
  });
});

export default router;
