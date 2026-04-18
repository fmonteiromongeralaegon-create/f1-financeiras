import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { COMPANY } from "@/lib/company";

export default function Sobre() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="section-alt py-16">
          <div className="container-f1 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[hsl(268,63%,46%)]/10 px-3 py-1.5 text-xs font-medium text-[hsl(268,63%,40%)]">
              Sobre nós
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[hsl(221,72%,14%)] mt-4 mb-4">
              Sobre a F1 Soluções Financeiras
            </h1>
            <p className="text-[hsl(221,15%,40%)] text-lg max-w-2xl mx-auto">
              Nascemos com um propósito claro: democratizar o acesso ao crédito justo no Brasil.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container-f1 max-w-3xl mx-auto">

            <div className="prose max-w-none">
              <p className="text-lg text-[hsl(221,15%,30%)] leading-relaxed mb-10">
                A F1 Soluções Financeiras nasceu com um propósito claro: democratizar o acesso ao crédito justo
                no Brasil através do modelo de garantia de veículos.
              </p>

              <h2 className="font-display text-2xl font-bold text-[hsl(221,72%,14%)] mb-4">Nossa História</h2>
              <p className="text-[hsl(221,15%,35%)] leading-relaxed mb-8">
                Localizados em {COMPANY.address.city}/{COMPANY.address.state}, somos especialistas em conectar
                pessoas que precisam de crédito com as melhores instituições financeiras do país. Entendemos que
                o sistema bancário tradicional muitas vezes oferece taxas abusivas, e foi por isso que decidimos
                focar exclusivamente na modalidade de crédito com garantia.
              </p>

              <h2 className="font-display text-2xl font-bold text-[hsl(221,72%,14%)] mb-4">Como Atuamos</h2>
              <p className="text-[hsl(221,15%,35%)] leading-relaxed mb-4">
                Atuamos como Correspondente Bancário, uma atividade regulamentada pelo Banco Central do Brasil
                (Resolução CMN nº 3.954/2011). Isso significa que não somos um banco, mas sim uma ponte oficial
                entre você e grandes instituições como Porto Bank, Banco BV, C6 Bank e Creditas.
              </p>
              <p className="text-[hsl(221,15%,35%)] leading-relaxed mb-8">
                Nossa equipe analisa seu perfil simultaneamente nas quatro instituições parceiras, garantindo que
                você tenha acesso à menor taxa disponível no mercado naquele momento.
              </p>

              <h2 className="font-display text-2xl font-bold text-[hsl(221,72%,14%)] mb-4">Nossos Valores</h2>
              <ul className="space-y-4 mb-10">
                {[
                  { title: "Transparência", desc: "Todas as taxas, prazos e condições são apresentadas de forma clara, sem letras miúdas." },
                  { title: "Ética", desc: "Nunca cobramos nenhuma taxa antecipada. Nosso serviço é 100% gratuito para o cliente." },
                  { title: "Agilidade", desc: "Entendemos que quem precisa de crédito tem pressa. Otimizamos nossos processos para entregar resultados rápidos." },
                  { title: "Segurança", desc: "Tratamos seus dados com o mais alto rigor de segurança, respeitando integralmente a LGPD." },
                ].map((v) => (
                  <li key={v.title} className="flex gap-3">
                    <span className="mt-0.5 h-5 w-5 rounded-full brand-gradient-bg-soft flex items-center justify-center shrink-0">
                      <span className="h-2 w-2 rounded-full bg-[hsl(268,63%,46%)]" />
                    </span>
                    <span className="text-[hsl(221,15%,35%)] leading-relaxed">
                      <strong className="text-[hsl(221,72%,14%)]">{v.title}:</strong> {v.desc}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="rounded-xl bg-[hsl(268,63%,46%)]/5 border border-[hsl(268,63%,46%)]/15 p-6">
                <h3 className="font-display font-semibold text-[hsl(221,72%,14%)] mb-2">Informações Legais</h3>
                <dl className="space-y-1 text-sm text-[hsl(221,15%,40%)]">
                  <div><dt className="inline font-medium text-[hsl(221,72%,20%)]">Razão social: </dt><dd className="inline">{COMPANY.legalName}</dd></div>
                  <div><dt className="inline font-medium text-[hsl(221,72%,20%)]">CNPJ: </dt><dd className="inline">{COMPANY.cnpj}</dd></div>
                  <div><dt className="inline font-medium text-[hsl(221,72%,20%)]">Endereço: </dt><dd className="inline">{COMPANY.address.street}, {COMPANY.address.city}/{COMPANY.address.state} — {COMPANY.address.zip}</dd></div>
                  <div><dt className="inline font-medium text-[hsl(221,72%,20%)]">E-mail: </dt><dd className="inline">{COMPANY.email}</dd></div>
                  <div><dt className="inline font-medium text-[hsl(221,72%,20%)]">Horário: </dt><dd className="inline">{COMPANY.hours}</dd></div>
                </dl>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
