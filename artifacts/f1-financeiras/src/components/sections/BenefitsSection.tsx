import { motion } from "framer-motion";
import { Percent, Clock, ShieldCheck, Users, Handshake, ThumbsUp } from "lucide-react";

const BENEFITS = [
  {
    icon: Percent,
    title: "Melhor taxa garantida",
    text: "4 instituições competem pela sua aprovação. Apresentamos a menor taxa disponível para o seu perfil.",
  },
  {
    icon: Clock,
    title: "Aprovação em até 24h",
    text: "Análise ágil com respostas em poucas horas. Contrato digital quando o perfil for aprovado.",
  },
  {
    icon: ShieldCheck,
    title: "Transparência total",
    text: "Divulgamos TAE, CET e exemplo representativo. Sem letras miúdas e sem cobrança antecipada.",
  },
  {
    icon: Users,
    title: "Consultor dedicado",
    text: "Atendimento humano por um consultor especializado. Acompanhamento da simulação à liberação.",
  },
  {
    icon: Handshake,
    title: "Parceiros regulados",
    text: "Trabalhamos com bancos e financeiras regulamentados pelo Banco Central do Brasil.",
  },
  {
    icon: ThumbsUp,
    title: "Zero surpresa",
    text: "Informamos todos os custos antes da contratação. Você decide seguir somente após conferir tudo.",
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
            Um parceiro entre você e as <span className="brand-gradient-text">melhores ofertas</span>
          </h2>
          <p className="mt-3 text-[hsl(221,15%,40%)]">
            Diferente de um único banco, a F1 trabalha com múltiplas instituições para garantir a proposta
            mais vantajosa disponível para cada cliente.
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
                <h3 className="font-display font-semibold text-[hsl(221,72%,14%)] text-lg">{b.title}</h3>
                <p className="mt-2 text-sm text-[hsl(221,15%,40%)] leading-relaxed">{b.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
