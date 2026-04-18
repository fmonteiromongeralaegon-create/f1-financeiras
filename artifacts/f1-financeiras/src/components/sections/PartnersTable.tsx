export function PartnersTable() {
  return (
    <section className="py-20 border-t border-b bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
            Apoiado por instituições de confiança
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos apenas com bancos e financeiras regulamentadas pelo Banco Central do Brasil.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70 grayscale transition-all hover:grayscale-0">
          <img src="/images/partner-porto.png" alt="Porto Bank" className="h-12 md:h-16 object-contain" />
          <img src="/images/partner-bv.png" alt="Banco BV" className="h-12 md:h-16 object-contain" />
          <img src="/images/partner-c6.png" alt="C6 Bank" className="h-12 md:h-16 object-contain" />
          <img src="/images/partner-creditas.png" alt="Creditas" className="h-10 md:h-14 object-contain" />
        </div>
      </div>
    </section>
  );
}
