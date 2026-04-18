import { CheckCircle2, ShieldCheck, Lock } from "lucide-react";

export function GuaranteesSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary-foreground/10 p-4 rounded-full mb-6">
              <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold font-display mb-3">Zero Cobrança Antecipada</h3>
            <p className="text-primary-foreground/80">
              Nunca pedimos nenhum tipo de depósito, taxa ou seguro antecipado. Desconfie de quem cobra antes do depósito do empréstimo.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-primary-foreground/10 p-4 rounded-full mb-6">
              <ShieldCheck className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold font-display mb-3">Instituições Regulamentadas</h3>
            <p className="text-primary-foreground/80">
              Todas as nossas operações são supervisionadas por bancos parceiros autorizados e regulamentados pelo Banco Central do Brasil.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-primary-foreground/10 p-4 rounded-full mb-6">
              <Lock className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold font-display mb-3">Proteção de Dados</h3>
            <p className="text-primary-foreground/80">
              Operamos 100% em conformidade com a Lei Geral de Proteção de Dados (LGPD). Suas informações estão criptografadas e seguras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
