import { motion } from "framer-motion";
import { ShieldCheck, Lock, Landmark, BadgeCheck, FileText, HeartHandshake } from "lucide-react";
import { COMPANY } from "@/lib/company";

const GUARANTEES = [
  {
    icon: Landmark,
    title: "Operação 100% regulamentada pelo Banco Central",
    text: "Atuamos como correspondente bancário autorizado (Res. CMN 3.954/2011). Nossa operação é fiscalizada e regulamentada pelo Banco Central do Brasil.",
  },
  {
    icon: ShieldCheck,
    title: "Nenhum custo antes da liberação do crédito",
    text: "Não cobramos nenhuma taxa, análise ou adiantamento antes do crédito ser liberado. Qualquer cobrança antecipada é golpe — denuncie.",
  },
  {
    icon: Lock,
    title: "Seus dados usados exclusivamente para encontrar sua melhor oferta",
    text: "Tratamos suas informações com total sigilo e em conformidade com a LGPD (Lei Geral de Proteção de Dados).",
  },
  {
    icon: BadgeCheck,
    title: "Empresa com CNPJ ativo e endereço cadastrado",
    text: `Somos um negócio real, com responsabilidade legal e histórico comprovado. CNPJ: ${COMPANY.cnpj} — ${COMPANY.address.city}/${COMPANY.address.state}.`,
  },
  {
    icon: FileText,
    title: "Contrato 100% transparente — você lê antes de assinar",
    text: "Apresentamos todas as condições antes da assinatura. Você tem todo o tempo necessário para analisar sem pressão.",
  },
  {
    icon: HeartHandshake,
    title: "Consultor humano do início ao fim",
    text: "Sempre uma pessoa real para tirar suas dúvidas — via WhatsApp, e-mail ou telefone. Sem chatbots, sem respostas automáticas.",
  },
];

export function GuaranteesSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-f1">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-[hsl(268,63%,46%)]/10 px-3 py-1.5 text-xs font-medium text-[hsl(268,63%,40%)]">
            Por que confiar na F1
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[hsl(221,72%,14%)] mt-4">
            Tudo que você precisa saber{" "}
            <span className="brand-gradient-text">antes de contratar</span>
          </h2>
          <p className="mt-3 text-[hsl(221,15%,40%)]">
            Transparência total desde o primeiro contato. Saiba exatamente com quem você está
            tratando e o que pode esperar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {GUARANTEES.map((g, i) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-xl bg-white p-6 shadow-card hover:shadow-card-lg transition-shadow"
              >
                <div className="h-11 w-11 rounded-lg brand-gradient-bg-soft flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-[hsl(268,63%,46%)]" />
                </div>
                <h3 className="font-display font-semibold text-[hsl(221,72%,14%)] text-lg leading-snug">{g.title}</h3>
                <p className="mt-2 text-sm text-[hsl(221,15%,40%)] leading-relaxed">{g.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
