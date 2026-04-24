import { motion } from "framer-motion";

const STEPS = [
  {
    n: "01",
    img: "/images/step-simulation.webp",
    title: "Simule em 1 minuto",
    text: "Preencha seus dados e as informações do veículo. Sem consulta ao CPF nesta etapa — sem impacto no seu score.",
  },
  {
    n: "02",
    img: "/images/step-approval.webp",
    title: "Comparação em 4 bancos",
    text: "Nossa equipe encaminha sua proposta para Porto Bank, BV, C6 Bank e Creditas ao mesmo tempo. Você recebe a melhor condição disponível para o seu perfil — geralmente no mesmo dia.",
  },
  {
    n: "03",
    img: "/images/step-money.webp",
    title: "Assinatura e liberação",
    text: "Contrato 100% digital — você assina de onde estiver, sem filas e sem cartório. Após a assinatura e vistoria do veículo, o dinheiro cai na sua conta em até 24 horas úteis.",
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
            Do formulário ao dinheiro na conta — em <span className="brand-gradient-text">3 passos simples</span>
          </h2>
          <p className="mt-3 text-[hsl(221,15%,40%)]">
            Um processo 100% digital, transparente e projetado para ser o mais rápido possível.
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
              <div className="relative h-52 rounded-lg overflow-hidden mb-4">
                <img
                  src={s.img}
                  alt={`Passo ${s.n}: ${s.title}`}
                  width={800}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="object-cover object-center w-full h-full"
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
