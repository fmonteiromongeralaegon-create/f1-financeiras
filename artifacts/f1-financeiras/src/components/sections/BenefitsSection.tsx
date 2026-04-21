import { motion } from "framer-motion";
import { Percent, Clock, ShieldCheck, Users, Handshake, ThumbsUp } from "lucide-react";

const BENEFITS = [
  {
    icon: Percent,
    title: "Taxas até 3x menores que o cartão de crédito",
    text: "A garantia do seu veículo reduz o risco da operação — e isso se traduz em juros muito menores do que crédito pessoal, cheque especial ou cartão.",
  },
  {
    icon: Clock,
    title: "Resposta no mesmo dia — sem enrolação",
    text: "Nossa equipe analisa seu perfil em até 4 instituições financeiras simultaneamente. Você recebe a proposta no mesmo dia, sem precisar sair de casa.",
  },
  {
    icon: ShieldCheck,
    title: "Você sabe exatamente o que vai pagar antes de assinar",
    text: "Apresentamos todas as condições — taxa, prazo, parcela e custo total — antes de qualquer compromisso. Sem letras miúdas, sem surpresas.",
  },
  {
    icon: Users,
    title: "Uma pessoa real cuidando do seu caso — não um robô",
    text: "Você tem um consultor dedicado do início ao fim. Uma pessoa que conhece o seu perfil e trabalha para encontrar a melhor solução para você.",
  },
  {
    icon: Handshake,
    title: "4 bancos analisando seu perfil ao mesmo tempo",
    text: "Porto Bank, Banco BV, C6 Bank e Creditas — todos regulados pelo Banco Central — analisam sua proposta simultaneamente. Mais chances de aprovação, melhor oferta.",
  },
  {
    icon: ThumbsUp,
    title: "Sem taxas escondidas, sem cobranças antecipadas",
    text: "A F1 Soluções não cobra nenhum valor antes da liberação do crédito. Nossa remuneração vem das instituições financeiras — não do seu bolso.",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-f1">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-[hsl(268,63%,46%)]/10 px-3 py-1.5 text-xs font-medium text-[hsl(268,63%,40%)]">
            Por que a F1
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[hsl(221,72%,14%)] mt-4">
            Por que a F1 Soluções é a <span className="brand-gradient-text">escolha certa</span>
          </h2>
          <p className="mt-3 text-[hsl(221,15%,40%)]">
            Oferecemos muito mais do que crédito — oferecemos a melhor condição disponível para
            o seu perfil, com transparência e agilidade do início ao fim.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-xl bg-white p-6 shadow-card hover:shadow-card-lg transition-shadow"
              >
                <div className="h-11 w-11 rounded-lg brand-gradient-bg-soft flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-[hsl(268,63%,46%)]" />
                </div>
                <h3 className="font-display font-semibold text-[hsl(221,72%,14%)] text-lg leading-snug">{b.title}</h3>
                <p className="mt-2 text-sm text-[hsl(221,15%,40%)] leading-relaxed">{b.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
