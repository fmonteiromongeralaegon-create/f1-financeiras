import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export default function Sobre() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <SiteHeader />
      <main className="flex-1 py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-display font-bold mb-8">Sobre a F1 Soluções Financeiras</h1>
          
          <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground">
            <p className="text-lg lead">
              A F1 Soluções Financeiras nasceu com um propósito claro: democratizar o acesso ao crédito justo no Brasil através do modelo de garantia de veículos.
            </p>
            
            <h2 className="text-2xl font-display font-semibold text-foreground mt-12 mb-4">Nossa História</h2>
            <p>
              Localizados em Ribeirão Preto/SP, somos especialistas em conectar pessoas que precisam de crédito com as melhores instituições financeiras do país. Entendemos que o sistema bancário tradicional muitas vezes oferece taxas abusivas, e foi por isso que decidimos focar exclusivamente na modalidade de crédito com garantia.
            </p>
            
            <h2 className="text-2xl font-display font-semibold text-foreground mt-12 mb-4">Como Atuamos</h2>
            <p>
              Atuamos como Correspondente Bancário, uma atividade regulamentada pelo Banco Central do Brasil (Resolução CMN nº 3.954/2011). Isso significa que não somos um banco, mas sim uma ponte oficial entre você e grandes instituições como Porto Bank, Banco BV, C6 Bank e Creditas.
            </p>
            <p>
              Nossa tecnologia nos permite pegar o seu perfil e simular simultaneamente em todas essas instituições, garantindo que você tenha acesso à menor taxa disponível no mercado naquele momento.
            </p>
            
            <h2 className="text-2xl font-display font-semibold text-foreground mt-12 mb-4">Nossos Valores</h2>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong className="text-foreground">Transparência:</strong> Todas as taxas, prazos e condições são apresentadas de forma clara, sem letras miúdas.</li>
              <li><strong className="text-foreground">Ética:</strong> Nunca cobramos nenhuma taxa antecipada. Nosso serviço é 100% gratuito para o cliente.</li>
              <li><strong className="text-foreground">Agilidade:</strong> Entendemos que quem precisa de crédito tem pressa. Otimizamos nossos processos para entregar resultados rápidos.</li>
              <li><strong className="text-foreground">Segurança:</strong> Tratamos seus dados com o mais alto rigor de segurança, respeitando integralmente a LGPD.</li>
            </ul>
          </div>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
