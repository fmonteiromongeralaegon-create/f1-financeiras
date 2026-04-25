import { Link } from "wouter";

interface PropostaLayoutProps {
  bankName: string;
  children: React.ReactNode;
}

export function PropostaLayout({ bankName, children }: PropostaLayoutProps) {
  return (
    <div className="min-h-screen bg-[hsl(222,25%,97%)] flex flex-col">
      {/* Header */}
      <header className="bg-[hsl(221,72%,14%)] shadow-md">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-3">
          <img
            src="/logos/logo-f1-oficial.webp"
            alt="F1 Soluções Financeiras"
            className="h-9 w-9 rounded-full object-cover"
          />
          <div>
            <div className="font-display font-bold text-white text-sm leading-tight">F1 Soluções Financeiras</div>
            <div className="text-[hsl(293,67%,75%)] text-xs">Proposta — {bankName}</div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 max-w-3xl w-full mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-[hsl(220,20%,88%)] bg-white">
        <div className="max-w-3xl mx-auto px-4 py-5 text-[11px] text-[hsl(221,15%,50%)] leading-relaxed text-center">
          Seus dados estão protegidos conforme nossa{" "}
          <Link href="/politica-de-privacidade" className="underline hover:text-[hsl(268,63%,46%)]">
            Política de Privacidade
          </Link>
          . A F1 Soluções Financeiras Ltda. (CNPJ: 55.225.287/0001-40) atua como Correspondente Bancário.
          Nunca cobramos valores antecipados.
        </div>
      </footer>
    </div>
  );
}
