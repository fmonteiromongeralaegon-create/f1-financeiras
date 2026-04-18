import { Shield, Clock, Car, ThumbsUp } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: <ThumbsUp className="h-8 w-8 text-primary" />,
      title: "Sem custo inicial",
      description: "Você não paga nenhuma taxa antecipada para simular ou contratar o empréstimo.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Sem compromisso",
      description: "Faça a simulação gratuitamente e escolha a melhor proposta para o seu bolso.",
    },
    {
      icon: <Car className="h-8 w-8 text-primary" />,
      title: "Continue com seu carro",
      description: "O veículo fica como garantia, mas continua na sua garagem para uso diário.",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Até 120% do valor",
      description: "Consiga um limite de crédito de até 120% do valor do seu veículo na tabela FIPE.",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            Por que escolher o crédito com garantia?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A modalidade mais inteligente para quem precisa de dinheiro rápido com as menores taxas do mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 font-display">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
