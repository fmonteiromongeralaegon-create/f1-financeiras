import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { validateCpf, maskCpf, maskPhone, maskPlate, maskCep, maskDate, maskCnpj, maskCurrency } from "@/lib/masks";

const TIPO_TRABALHO_OPTIONS = [
  "Assalariado/Registrado",
  "Autônomo",
  "Empresário",
  "Aposentado/Pensionista",
] as const;

type TipoTrabalho = (typeof TIPO_TRABALHO_OPTIONS)[number];

const schema = z.object({
  nome: z.string().min(2, "Nome obrigatório"),
  cpf: z.string().refine((v) => validateCpf(v), "CPF inválido"),
  rg: z.string().min(1, "R.G. obrigatório"),
  dataNascimento: z.string().min(10, "Data obrigatória"),
  cidadeNascimento: z.string().min(1, "Cidade obrigatória"),
  sexo: z.enum(["Masculino", "Feminino"], { required_error: "Selecione o sexo" }),
  nomeMae: z.string().min(2, "Nome da mãe obrigatório"),
  cep: z.string().min(9, "CEP obrigatório"),
  endereco: z.string().min(1, "Endereço obrigatório"),
  bairro: z.string().min(1, "Bairro obrigatório"),
  cidade: z.string().min(1, "Cidade obrigatória"),
  estado: z.string().min(1, "Estado obrigatório"),
  numeroComplemento: z.string().optional(),
  telefone: z.string().optional(),
  celular: z.string().min(14, "Celular obrigatório"),
  email: z.string().email("E-mail inválido"),
  tipoTrabalho: z.enum(TIPO_TRABALHO_OPTIONS, { required_error: "Selecione o tipo" }),
  profissao: z.string().optional(),
  tempoTrabalho: z.string().optional(),
  nomeEmpresa: z.string().optional(),
  enderecoEmpresa: z.string().optional(),
  telefoneEmpresa: z.string().optional(),
  cnpjEmpresa: z.string().optional(),
  rendaMensal: z.string().min(1, "Renda obrigatória"),
  outrasRendas: z.enum(["Sim", "Não"], { required_error: "Selecione" }),
  valorOutrasRendas: z.string().optional(),
  placaVeiculo: z.string().min(7, "Placa obrigatória"),
  marcaVeiculo: z.string().optional(),
  modeloVeiculo: z.string().optional(),
  anoFabricacao: z.string().optional(),
  anoModelo: z.string().optional(),
  bancoConta: z.string().optional(),
  agencia: z.string().optional(),
  contaCorrente: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface PropostaFormProps {
  banco: string;
  showBankFields?: boolean;
  apiBase?: string;
}

const inputClass =
  "border-[hsl(220,20%,85%)] focus:border-[hsl(268,63%,46%)] focus:ring-[hsl(268,63%,46%)] text-[hsl(221,72%,14%)] h-10";

function FieldWrapper({ label, error, required, children }: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-[hsl(221,72%,14%)] font-medium text-sm">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </Label>
      {children}
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="col-span-full">
      <h3 className="font-display font-semibold text-[hsl(221,72%,14%)] text-base border-b border-[hsl(220,20%,88%)] pb-2 mt-4">
        {children}
      </h3>
    </div>
  );
}

export function PropostaForm({ banco, showBankFields = false, apiBase = "" }: PropostaFormProps) {
  const [cepLoading, setCepLoading] = useState(false);
  const [plateLoading, setPlateLoading] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const tipoTrabalho = watch("tipoTrabalho") as TipoTrabalho | undefined;
  const outrasRendas = watch("outrasRendas");

  const lookupCep = useCallback(async (cepRaw: string) => {
    const cep = cepRaw.replace(/\D/g, "");
    if (cep.length !== 8) return;
    setCepLoading(true);
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await res.json();
      if (data.erro) return;
      setValue("endereco", data.logradouro ?? "", { shouldValidate: true });
      setValue("bairro", data.bairro ?? "", { shouldValidate: true });
      setValue("cidade", data.localidade ?? "", { shouldValidate: true });
      setValue("estado", data.uf ?? "", { shouldValidate: true });
    } catch {
    } finally {
      setCepLoading(false);
    }
  }, [setValue]);

  const lookupPlate = useCallback(async (plateRaw: string) => {
    const plate = plateRaw.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
    if (plate.length < 7) return;
    setPlateLoading(true);
    try {
      const res = await fetch(`https://brasilapi.com.br/api/fipe/plates/v1/${plate}`);
      if (!res.ok) return;
      const data = await res.json();
      if (data && data.length > 0) {
        const item = data[0];
        setValue("marcaVeiculo", item.brand ?? item.marca ?? "", { shouldValidate: true });
        setValue("modeloVeiculo", item.model ?? item.modelo ?? item.name ?? "", { shouldValidate: true });
        setValue("anoFabricacao", String(item.year ?? item.anoFabricacao ?? item.ano ?? ""), { shouldValidate: true });
        setValue("anoModelo", String(item.modelYear ?? item.anoModelo ?? ""), { shouldValidate: true });
      }
    } catch {
    } finally {
      setPlateLoading(false);
    }
  }, [setValue]);

  const onSubmit = async (data: FormData) => {
    setSubmitState("loading");
    setErrorMsg("");
    try {
      const url = `${apiBase}/api/propostas`;
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          banco,
          ...data,
          outrasRendas: data.outrasRendas === "Sim",
        }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error((err as { error?: string }).error ?? `Erro ${res.status}`);
      }
      setSubmitState("success");
    } catch (e) {
      setErrorMsg(e instanceof Error ? e.message : "Erro ao enviar. Tente novamente.");
      setSubmitState("error");
    }
  };

  if (submitState === "success") {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-[hsl(220,20%,90%)] p-10 text-center">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-5">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h2 className="font-display text-2xl font-bold text-[hsl(221,72%,14%)] mb-3">
          Proposta enviada com sucesso!
        </h2>
        <p className="text-[hsl(221,15%,40%)] max-w-sm mx-auto">
          Em breve nossa equipe entrará em contato pelo celular ou e-mail informados.
        </p>
      </div>
    );
  }

  const showProfissao = tipoTrabalho === "Assalariado/Registrado" || tipoTrabalho === "Autônomo" || tipoTrabalho === "Empresário";
  const showTempoTrabalho = tipoTrabalho === "Assalariado/Registrado" || tipoTrabalho === "Autônomo" || tipoTrabalho === "Empresário";
  const showTempoBeneficio = tipoTrabalho === "Aposentado/Pensionista";
  const showNomeEmpresa = tipoTrabalho === "Assalariado/Registrado" || tipoTrabalho === "Empresário";
  const showEndTelEmpresa = tipoTrabalho === "Assalariado/Registrado";
  const showCnpj = tipoTrabalho === "Empresário";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="bg-white rounded-2xl shadow-sm border border-[hsl(220,20%,90%)] p-6 md:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">

          {/* ── Dados Pessoais ── */}
          <SectionTitle>Dados Pessoais</SectionTitle>

          <div className="sm:col-span-2">
            <FieldWrapper label="Nome Completo" required error={errors.nome?.message}>
              <Input {...register("nome")} placeholder="Seu nome completo" className={inputClass} />
            </FieldWrapper>
          </div>

          <FieldWrapper label="CPF" required error={errors.cpf?.message}>
            <Input
              {...register("cpf")}
              placeholder="000.000.000-00"
              maxLength={14}
              onChange={(e) => setValue("cpf", maskCpf(e.target.value), { shouldValidate: true })}
              className={inputClass}
            />
          </FieldWrapper>

          <FieldWrapper label="R.G." required error={errors.rg?.message}>
            <Input {...register("rg")} placeholder="00.000.000-0" className={inputClass} />
          </FieldWrapper>

          <FieldWrapper label="Data de Nascimento" required error={errors.dataNascimento?.message}>
            <Input
              {...register("dataNascimento")}
              placeholder="DD/MM/AAAA"
              maxLength={10}
              onChange={(e) => setValue("dataNascimento", maskDate(e.target.value), { shouldValidate: true })}
              className={inputClass}
            />
          </FieldWrapper>

          <FieldWrapper label="Cidade onde nasceu" required error={errors.cidadeNascimento?.message}>
            <Input {...register("cidadeNascimento")} placeholder="Ex: Ribeirão Preto" className={inputClass} />
          </FieldWrapper>

          <FieldWrapper label="Sexo" required error={errors.sexo?.message}>
            <Select onValueChange={(v) => setValue("sexo", v as "Masculino" | "Feminino", { shouldValidate: true })}>
              <SelectTrigger className={inputClass}><SelectValue placeholder="Selecione" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Masculino">Masculino</SelectItem>
                <SelectItem value="Feminino">Feminino</SelectItem>
              </SelectContent>
            </Select>
          </FieldWrapper>

          <div className="sm:col-span-2">
            <FieldWrapper label="Nome completo da mãe" required error={errors.nomeMae?.message}>
              <Input {...register("nomeMae")} placeholder="Nome completo da mãe" className={inputClass} />
            </FieldWrapper>
          </div>

          {/* ── Endereço ── */}
          <SectionTitle>Endereço</SectionTitle>

          <FieldWrapper label="CEP" required error={errors.cep?.message}>
            <div className="relative">
              <Input
                {...register("cep")}
                placeholder="00000-000"
                maxLength={9}
                onChange={(e) => {
                  const masked = maskCep(e.target.value);
                  setValue("cep", masked, { shouldValidate: true });
                  if (masked.replace(/\D/g, "").length === 8) lookupCep(masked);
                }}
                className={inputClass}
              />
              {cepLoading && <Loader2 className="absolute right-3 top-2.5 h-4 w-4 animate-spin text-[hsl(268,63%,46%)]" />}
            </div>
          </FieldWrapper>

          <div className="sm:col-span-2">
            <FieldWrapper label="Endereço residencial" required error={errors.endereco?.message}>
              <Input {...register("endereco")} placeholder="Rua, Avenida..." className={inputClass} />
            </FieldWrapper>
          </div>

          <FieldWrapper label="Bairro" required error={errors.bairro?.message}>
            <Input {...register("bairro")} placeholder="Bairro" className={inputClass} />
          </FieldWrapper>

          <FieldWrapper label="Cidade" required error={errors.cidade?.message}>
            <Input {...register("cidade")} placeholder="Cidade" className={inputClass} />
          </FieldWrapper>

          <FieldWrapper label="Estado" required error={errors.estado?.message}>
            <Input {...register("estado")} placeholder="UF" maxLength={2} className={inputClass} />
          </FieldWrapper>

          <FieldWrapper label="Número / Complemento" error={errors.numeroComplemento?.message}>
            <Input {...register("numeroComplemento")} placeholder="Nº, Apto, Bloco..." className={inputClass} />
          </FieldWrapper>

          {/* ── Contato ── */}
          <SectionTitle>Contato</SectionTitle>

          <FieldWrapper label="Telefone residencial com DDD" error={errors.telefone?.message}>
            <Input
              {...register("telefone")}
              placeholder="(00) 0000-0000"
              maxLength={15}
              onChange={(e) => setValue("telefone", maskPhone(e.target.value))}
              className={inputClass}
            />
          </FieldWrapper>

          <FieldWrapper label="Celular com DDD" required error={errors.celular?.message}>
            <Input
              {...register("celular")}
              placeholder="(00) 00000-0000"
              maxLength={15}
              onChange={(e) => setValue("celular", maskPhone(e.target.value), { shouldValidate: true })}
              className={inputClass}
            />
          </FieldWrapper>

          <div className="sm:col-span-2">
            <FieldWrapper label="E-mail" required error={errors.email?.message}>
              <Input {...register("email")} type="email" placeholder="seu@email.com" className={inputClass} />
            </FieldWrapper>
          </div>

          {/* ── Trabalho e Renda ── */}
          <SectionTitle>Trabalho e Renda</SectionTitle>

          <div className="sm:col-span-2">
            <FieldWrapper label="Trabalha atualmente como" required error={errors.tipoTrabalho?.message}>
              <Select
                onValueChange={(v) =>
                  setValue("tipoTrabalho", v as TipoTrabalho, { shouldValidate: true })
                }
              >
                <SelectTrigger className={inputClass}><SelectValue placeholder="Selecione" /></SelectTrigger>
                <SelectContent>
                  {TIPO_TRABALHO_OPTIONS.map((o) => (
                    <SelectItem key={o} value={o}>{o}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FieldWrapper>
          </div>

          {showCnpj && (
            <FieldWrapper label="CNPJ da empresa" error={errors.cnpjEmpresa?.message}>
              <Input
                {...register("cnpjEmpresa")}
                placeholder="00.000.000/0000-00"
                maxLength={18}
                onChange={(e) => setValue("cnpjEmpresa", maskCnpj(e.target.value))}
                className={inputClass}
              />
            </FieldWrapper>
          )}

          {showProfissao && (
            <FieldWrapper label="Profissão" error={errors.profissao?.message}>
              <Input {...register("profissao")} placeholder="Sua profissão" className={inputClass} />
            </FieldWrapper>
          )}

          {showNomeEmpresa && (
            <FieldWrapper label="Nome da empresa" error={errors.nomeEmpresa?.message}>
              <Input {...register("nomeEmpresa")} placeholder="Nome da empresa" className={inputClass} />
            </FieldWrapper>
          )}

          {(showTempoTrabalho) && !showTempoBeneficio && (
            <FieldWrapper label="Há quanto tempo trabalha nessa função" error={errors.tempoTrabalho?.message}>
              <Input {...register("tempoTrabalho")} placeholder="Ex: 2 anos e 3 meses" className={inputClass} />
            </FieldWrapper>
          )}

          {showTempoBeneficio && (
            <FieldWrapper label="Há quanto tempo recebe o benefício" error={errors.tempoTrabalho?.message}>
              <Input {...register("tempoTrabalho")} placeholder="Ex: 5 anos" className={inputClass} />
            </FieldWrapper>
          )}

          {showEndTelEmpresa && (
            <>
              <div className="sm:col-span-2">
                <FieldWrapper label="Endereço da empresa" error={errors.enderecoEmpresa?.message}>
                  <Input {...register("enderecoEmpresa")} placeholder="Endereço completo da empresa" className={inputClass} />
                </FieldWrapper>
              </div>
              <FieldWrapper label="Telefone da empresa" error={errors.telefoneEmpresa?.message}>
                <Input
                  {...register("telefoneEmpresa")}
                  placeholder="(00) 0000-0000"
                  maxLength={15}
                  onChange={(e) => setValue("telefoneEmpresa", maskPhone(e.target.value))}
                  className={inputClass}
                />
              </FieldWrapper>
            </>
          )}

          <FieldWrapper label="Renda mensal" required error={errors.rendaMensal?.message}>
            <Input
              {...register("rendaMensal")}
              placeholder="R$ 0,00"
              onChange={(e) => setValue("rendaMensal", maskCurrency(e.target.value), { shouldValidate: true })}
              className={inputClass}
            />
          </FieldWrapper>

          <FieldWrapper label="Possui outras fontes de renda?" required error={errors.outrasRendas?.message}>
            <Select onValueChange={(v) => setValue("outrasRendas", v as "Sim" | "Não", { shouldValidate: true })}>
              <SelectTrigger className={inputClass}><SelectValue placeholder="Selecione" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Sim">Sim</SelectItem>
                <SelectItem value="Não">Não</SelectItem>
              </SelectContent>
            </Select>
          </FieldWrapper>

          {outrasRendas === "Sim" && (
            <FieldWrapper label="Valor de outras rendas" error={errors.valorOutrasRendas?.message}>
              <Input
                {...register("valorOutrasRendas")}
                placeholder="R$ 0,00"
                onChange={(e) => setValue("valorOutrasRendas", maskCurrency(e.target.value))}
                className={inputClass}
              />
            </FieldWrapper>
          )}

          {/* ── Veículo ── */}
          <SectionTitle>Dados do Veículo</SectionTitle>

          <FieldWrapper label="Placa do veículo" required error={errors.placaVeiculo?.message}>
            <div className="relative">
              <Input
                {...register("placaVeiculo")}
                placeholder="ABC1D23"
                maxLength={7}
                onChange={(e) => {
                  const masked = maskPlate(e.target.value);
                  setValue("placaVeiculo", masked, { shouldValidate: true });
                  if (masked.length === 7) lookupPlate(masked);
                }}
                className={`${inputClass} uppercase`}
              />
              {plateLoading && <Loader2 className="absolute right-3 top-2.5 h-4 w-4 animate-spin text-[hsl(268,63%,46%)]" />}
            </div>
          </FieldWrapper>

          <FieldWrapper label="Marca do veículo" error={errors.marcaVeiculo?.message}>
            <Input {...register("marcaVeiculo")} placeholder="Ex: Hyundai" className={inputClass} />
          </FieldWrapper>

          <div className="sm:col-span-2">
            <FieldWrapper label="Modelo do veículo" error={errors.modeloVeiculo?.message}>
              <Input {...register("modeloVeiculo")} placeholder="Ex: HB20 1.0 Sense" className={inputClass} />
            </FieldWrapper>
          </div>

          <FieldWrapper label="Ano de fabricação" error={errors.anoFabricacao?.message}>
            <Input {...register("anoFabricacao")} placeholder="Ex: 2010" maxLength={4} className={inputClass} />
          </FieldWrapper>

          <FieldWrapper label="Ano do modelo" error={errors.anoModelo?.message}>
            <Input {...register("anoModelo")} placeholder="Ex: 2011" maxLength={4} className={inputClass} />
          </FieldWrapper>

          {/* ── Dados bancários (C6 Bank) ── */}
          {showBankFields && (
            <>
              <SectionTitle>Dados Bancários</SectionTitle>
              <FieldWrapper label="Banco" error={errors.bancoConta?.message}>
                <Input {...register("bancoConta")} placeholder="Nome do banco" className={inputClass} />
              </FieldWrapper>
              <FieldWrapper label="Agência" error={errors.agencia?.message}>
                <Input {...register("agencia")} placeholder="0000" className={inputClass} />
              </FieldWrapper>
              <FieldWrapper label="Conta Corrente" error={errors.contaCorrente?.message}>
                <Input {...register("contaCorrente")} placeholder="00000-0" className={inputClass} />
              </FieldWrapper>
            </>
          )}

        </div>

        {/* Error */}
        {submitState === "error" && (
          <div className="mt-6 flex items-start gap-2 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
            <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Submit */}
        <div className="mt-8">
          <Button
            type="submit"
            size="lg"
            disabled={submitState === "loading"}
            className="w-full h-14 text-base font-semibold bg-[hsl(268,63%,46%)] hover:bg-[hsl(268,63%,40%)] text-white"
          >
            {submitState === "loading" ? (
              <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Enviando proposta...</>
            ) : (
              "Enviar proposta"
            )}
          </Button>
          <p className="text-xs text-[hsl(221,15%,50%)] text-center mt-3 leading-relaxed">
            Ao enviar, você concorda com a{" "}
            <a href="/politica-de-privacidade" className="text-[hsl(268,63%,46%)] hover:underline">
              Política de Privacidade
            </a>{" "}
            e autoriza a F1 a tratar seus dados para análise de crédito, conforme a LGPD.
          </p>
        </div>
      </div>
    </form>
  );
}
