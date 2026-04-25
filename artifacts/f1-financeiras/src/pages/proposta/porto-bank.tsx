import { PropostaLayout } from "@/components/proposta/PropostaLayout";
import { PropostaForm } from "@/components/proposta/PropostaForm";

export default function PortoBankPage() {
  return (
    <PropostaLayout bankName="Porto Bank">
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-[hsl(221,72%,14%)]">
          Formulário de Proposta — Porto Bank
        </h1>
        <p className="text-[hsl(221,15%,45%)] text-sm mt-1">
          Preencha todos os campos obrigatórios (<span className="text-red-500">*</span>) para enviar sua proposta.
        </p>
      </div>
      <PropostaForm banco="porto-bank" apiBase={import.meta.env.VITE_API_BASE_URL ?? ""} />
    </PropostaLayout>
  );
}
