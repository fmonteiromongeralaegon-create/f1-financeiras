import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { PARTNERS } from "@/lib/company";

export function PartnersTable() {
  return (
    <section className="py-16 lg:py-24 section-alt">
      <div className="container-f1">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-[hsl(268,63%,46%)]/10 px-3 py-1.5 text-xs font-medium text-[hsl(268,63%,40%)]">
            Nossos parceiros
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[hsl(221,72%,14%)] mt-4">
            Trabalhamos com as <span className="brand-gradient-text">maiores instituições</span> do mercado
          </h2>
          <p className="mt-3 text-[hsl(221,15%,40%)]">
            Todos os nossos parceiros são regulamentados pelo Banco Central do Brasil — o que
            garante segurança, transparência e as melhores condições disponíveis para você.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {PARTNERS.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="rounded-xl bg-white p-6 shadow-card hover:shadow-card-lg transition-shadow flex flex-col"
            >
              <div className="relative h-12 w-40 mb-4">
                <img
                  src={p.logo}
                  alt={`Logo ${p.name}`}
                  width={160}
                  height={48}
                  loading="lazy"
                  decoding="async"
                  className="object-contain object-left h-full w-full"
                />
              </div>
              <p className="text-sm text-[hsl(221,15%,35%)] leading-relaxed mb-4">{p.note}</p>
              <ul className="mt-auto space-y-2 text-sm text-[hsl(221,15%,25%)]">
                {p.strengths.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-[hsl(268,63%,46%)] shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <p className="text-xs text-[hsl(221,15%,50%)] text-center mt-6 max-w-2xl mx-auto">
          A F1 Soluções Financeiras atua como correspondente bancário (Res. CMN
          3.954/2011), intermediando a relação entre você e as instituições
          parceiras reguladas pelo Banco Central do Brasil.
        </p>
      </div>
    </section>
  );
}
