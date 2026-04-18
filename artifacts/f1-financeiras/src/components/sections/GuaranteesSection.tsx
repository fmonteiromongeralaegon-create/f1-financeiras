import { motion } from "framer-motion";
import { ShieldCheck, Lock, Landmark, BadgeCheck, FileText, HeartHandshake } from "lucide-react";
import { COMPANY } from "@/lib/company";

const GUARANTEES = [
  {
    icon: Landmark,
    title: "Correspondente bancário autorizado",
    text: "Atuamos nos termos da Resolução CMN nº 3.954/2011, intermediando instituições financeiras reguladas pelo Banco Central do Brasil.",
  },
  {
    icon: ShieldCheck,
    title: "Não cobramos nada antecipado",
    text: "Qualquer solicitação de pagamento prévio em nome da F1 é tentativa de golpe. Todas as taxas do empréstimo são embutidas no CET apresentado antes do contrato.",
  },
  {
    icon: Lock,
    title: "Dados protegidos pela LGPD",
    text: "Seus dados trafegam via HTTPS com criptografia e são usados exclusivamente para a análise de crédito. Você pode solicitar a exclusão a qualquer momento.",
  },
  {
    icon: BadgeCheck,
    title: "Empresa com endereço e CNPJ ativos",
    text: `CNPJ ${COMPANY.cnpj}, com sede física em ${COMPANY.address.city}/${COMPANY.address.state}. Você sabe exatamente com quem está falando.`,
  },
  {
    icon: FileText,
    title: "Contrato 100% transparente",
    text: "Você recebe previamente taxa mensal, TAE, CET, número de parcelas e valor total antes de assinar qualquer documento. Nada de letras miúdas.",
  },
  {
    icon: HeartHandshake,
    title: "Consultor humano do início ao fim",
    text: "Um consultor dedicado acompanha cada etapa do processo: da simulação à liberação. Sem call center e sem respostas automáticas.",
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
            Todas as garantias{" "}
            <span className="brand-gradient-text">que você merece</span> antes de contratar
          </h2>
          <p className="mt-3 text-[hsl(221,15%,40%)]">
            Empréstimo com veículo em garantia é um passo importante. Trabalhamos
            para que você tenha total segurança, transparência e suporte em cada etapa.
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
                <h3 className="font-display font-semibold text-[hsl(221,72%,14%)] text-lg">{g.title}</h3>
                <p className="mt-2 text-sm text-[hsl(221,15%,40%)] leading-relaxed">{g.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
