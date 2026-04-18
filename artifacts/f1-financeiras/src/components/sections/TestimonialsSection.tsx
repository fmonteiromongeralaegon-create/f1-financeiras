import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Marcos T.",
    city: "Ribeirão Preto/SP",
    text: "Eu estava decidido a fechar com um banco que conhecia, mas o consultor da F1 comparou com outros 3 parceiros e a diferença na parcela foi expressiva. Processo transparente do início ao fim.",
    vehicle: "Honda Civic 2017",
  },
  {
    name: "Letícia A.",
    city: "São José do Rio Preto/SP",
    text: "Gostei de não precisar passar CPF logo de cara. Respondi às perguntas no site, agendaram meu atendimento, e em 2 dias o dinheiro estava na conta.",
    vehicle: "Jeep Compass 2019",
  },
  {
    name: "Jorge M.",
    city: "Franca/SP",
    text: "Fui bem recebido, me explicaram como funciona o CET e o IOF, e fechei com a taxa mais baixa entre as propostas. Recomendo pela clareza.",
    vehicle: "Toyota Corolla 2015",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-f1">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-[hsl(268,63%,46%)]/10 px-3 py-1.5 text-xs font-medium text-[hsl(268,63%,40%)]">
            Quem já usou recomenda
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[hsl(221,72%,14%)] mt-4">
            Clientes reais. <span className="brand-gradient-text">Relatos reais.</span>
          </h2>
          <p className="mt-3 text-[hsl(221,15%,40%)]">
            Depoimentos compartilhados com autorização. Nomes e modelos de veículo conforme informado pelos clientes.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl bg-white p-6 shadow-card hover:shadow-card-lg transition-shadow"
            >
              <Quote className="h-6 w-6 text-[hsl(268,63%,46%)]" />
              <div className="flex items-center gap-1 mt-3">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-[hsl(45,95%,55%)] text-[hsl(45,95%,55%)]" />
                ))}
              </div>
              <p className="mt-3 text-sm text-[hsl(221,15%,30%)] leading-relaxed">"{t.text}"</p>
              <div className="mt-4 pt-4 border-t border-[hsl(220,20%,94%)]">
                <div className="font-semibold text-sm text-[hsl(221,72%,14%)]">{t.name}</div>
                <div className="text-xs text-[hsl(221,15%,50%)]">
                  {t.vehicle} · {t.city}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
