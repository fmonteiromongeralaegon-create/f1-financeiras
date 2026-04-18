import { motion } from "framer-motion";

const STEPS = [
  {
    n: "01",
    img: "/images/step-simulation.jpg",
    title: "Simule em 1 minuto",
    text: "Responda 3 perguntas rápidas de elegibilidade e informe seus dados com segurança: nome, e-mail, WhatsApp, CPF e placa do veículo.",
  },
  {
    n: "02",
    img: "/images/step-approval.jpg",
    title: "Comparação em 4 bancos",
    text: "Nosso consultor analisa seu perfil simultaneamente em Porto Bank, BV, C6 e Creditas e apresenta a melhor proposta.",
  },
  {
    n: "03",
    img: "/images/step-money.jpg",
    title: "Assinatura e liberação",
    text: "Com a proposta escolhida, você assina digitalmente e o valor é depositado na sua conta.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-16 lg:py-24 section-alt">
      <div className="container-f1">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-[hsl(268,63%,46%)]/10 px-3 py-1.5 text-xs font-medium text-[hsl(268,63%,40%)]">
            Processo simples
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[hsl(221,72%,14%)] mt-4">
            Do seu carro à sua conta em <span className="brand-gradient-text">3 passos</span>
          </h2>
          <p className="mt-3 text-[hsl(221,15%,40%)]">
            Um processo claro, digital e acompanhado por um consultor especializado em todas as etapas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative rounded-xl bg-white p-6 shadow-card"
            >
              <div className="relative aspect-square rounded-lg overflow-hidden bg-[hsl(222,25%,96%)] mb-4">
                <img
                  src={s.img}
                  alt={`Passo ${s.n}: ${s.title}`}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="font-mono text-xs font-semibold text-[hsl(268,63%,46%)]">PASSO {s.n}</div>
              <h3 className="font-display font-semibold text-[hsl(221,72%,14%)] text-xl mt-1">{s.title}</h3>
              <p className="mt-2 text-sm text-[hsl(221,15%,40%)] leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
