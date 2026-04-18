import { ArrowRight, CheckCircle2 } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Simule online",
      description: "Preencha seus dados básicos e do veículo em nosso formulário seguro. É rápido e não afeta seu score de crédito."
    },
    {
      number: "2",
      title: "Análise pelos parceiros",
      description: "Nossa tecnologia compara seu perfil simultaneamente no Porto Bank, BV, C6 e Creditas para encontrar a menor taxa."
    },
    {
      number: "3",
      title: "Receba o valor",
      description: "Após a aprovação e assinatura digital do contrato, o dinheiro cai na sua conta e você continua usando seu carro normalmente."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Como funciona o empréstimo?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Um processo simples, 100% digital e transparente do início ao fim.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-border z-0"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-background border-4 border-primary rounded-full flex items-center justify-center text-3xl font-display font-bold text-primary mb-6 shadow-lg shadow-primary/20">
                {step.number}
              </div>
              <h3 className="text-xl font-bold font-display text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
