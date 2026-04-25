import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export default function AvisoLegal() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <SiteHeader />
      <main className="flex-1 py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-display font-bold mb-8">Aviso Legal</h1>
          
          <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground space-y-6">
            <h3 className="text-xl font-display font-bold text-foreground mb-4">Correspondente Bancário</h3>
            <p>
              A <strong>F1 Soluções Financeiras Ltda.</strong> (CNPJ: 55.225.287/0001-40), com sede na Rua Pedro Antonio Luiz, 156 — Ap. 12, Ribeirão Preto/SP, CEP 14098-366, não é uma instituição financeira e não realiza operações de crédito diretamente.
            </p>
            <p>
              Atuamos rigorosamente como Correspondente Bancário, nos termos da Resolução nº 3.954/2011 do Conselho Monetário Nacional (CMN) e regulamentações pertinentes do Banco Central do Brasil.
            </p>

            <h3 className="text-xl font-display font-bold text-foreground mt-8 mb-4">Serviço 100% Gratuito e Alerta contra Fraudes</h3>
            <div className="bg-destructive/10 border-l-4 border-destructive p-4 rounded-r-md text-foreground">
              <p className="font-semibold mb-2">ATENÇÃO: NUNCA COBRAMOS VALORES ANTECIPADOS</p>
              <p className="text-sm">
                A F1 Soluções Financeiras e os bancos parceiros <strong>nunca</strong> solicitam depósitos prévios, taxas de avalista, taxas de cartório ou seguros para a liberação de crédito. Caso alguém faça esse tipo de cobrança em nosso nome, trata-se de um golpe. Denuncie imediatamente.
              </p>
            </div>

            <h3 className="text-xl font-display font-bold text-foreground mt-8 mb-4">Condições de Crédito e Custo Efetivo Total (CET)</h3>
            <p>
              Todas as condições exibidas em nosso site, como taxas de juros e valores de parcelas, são obtidas a partir de simulações e variam conforme o perfil de crédito do solicitante, o ano e modelo do veículo oferecido em garantia, e a política de crédito da instituição financeira escolhida.
            </p>
            <p>
              <strong>Exemplo representativo:</strong> Um empréstimo de R$ 30.000,00 para pagar em 48 parcelas de R$ 890,00. Taxa Anual Efetiva (TAE) de 42% a.a., Custo Efetivo Total (CET) de 45% a.a. Valor total a pagar: R$ 42.720,00. IOF e tarifas aplicáveis já estão incluídos no cálculo do CET.
            </p>
            <p>
              <strong>Prazos e Taxas:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Prazo de pagamento: de 12 a 60 meses.</li>
              <li>Período mínimo de reembolso garantido: 61 dias.</li>
              <li>Taxa de juros a partir de 1,49% ao mês.</li>
              <li>Taxa Anual Efetiva (TAE) máxima: 42% a.a. (3,47% a.m.), tendo como referência as condições do Banco BV.</li>
            </ul>

            <h3 className="text-xl font-display font-bold text-foreground mt-8 mb-4">Aprovação Sujeita à Análise</h3>
            <p>
              Toda solicitação de empréstimo está sujeita à análise cadastral e de crédito por parte da instituição financeira parceira responsável pela operação. A F1 Soluções Financeiras não tem o poder de garantir a aprovação de crédito, que é de competência exclusiva do banco.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
