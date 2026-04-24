import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export default function PoliticaDePrivacidade() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <SiteHeader />
      <main className="flex-1 py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-display font-bold mb-8">Política de Privacidade</h1>
          
          <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground space-y-6">
            <p>
              A F1 Soluções Financeiras tem um compromisso sério com a proteção dos seus dados pessoais. Esta Política de Privacidade explica como coletamos, usamos, compartilhamos e protegemos as informações fornecidas por você, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018).
            </p>

            <h3 className="text-xl font-display font-bold text-foreground mt-8 mb-4">1. Dados que Coletamos</h3>
            <p>
              Para podermos oferecer nossos serviços de simulação e intermediação de crédito, coletamos os seguintes dados:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Dados de identificação:</strong> Nome completo, CPF, e-mail, telefone/WhatsApp.</li>
              <li><strong>Dados do veículo:</strong> Placa, ano de fabricação, status de quitação.</li>
              <li><strong>Dados de navegação:</strong> Endereço IP, tipo de navegador, páginas acessadas e tempo de permanência (através de cookies essenciais).</li>
            </ul>

            <h3 className="text-xl font-display font-bold text-foreground mt-8 mb-4">2. Como Usamos seus Dados</h3>
            <p>
              Utilizamos suas informações exclusivamente para os seguintes fins:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Realizar simulações de crédito nas instituições financeiras parceiras;</li>
              <li>Entrar em contato para apresentar propostas e dar andamento à sua solicitação;</li>
              <li>Prevenir fraudes e garantir a segurança das operações;</li>
              <li>Melhorar sua experiência de uso em nosso site.</li>
            </ul>

            <h3 className="text-xl font-display font-bold text-foreground mt-8 mb-4">3. Com Quem Compartilhamos</h3>
            <p>
              Como correspondente bancário, para que a análise de crédito seja realizada, precisamos compartilhar seus dados com as instituições financeiras parceiras (Porto Bank, Banco BV e C6 Bank). Estas instituições também possuem suas próprias políticas de privacidade e estão sujeitas à LGPD.
            </p>
            <p>
              Nunca vendemos ou comercializamos seus dados com terceiros não envolvidos na operação de crédito solicitada por você.
            </p>

            <h3 className="text-xl font-display font-bold text-foreground mt-8 mb-4">4. Segurança das Informações</h3>
            <p>
              Adotamos medidas técnicas e administrativas rigorosas para proteger seus dados pessoais de acessos não autorizados, perdas ou alterações. Nosso site utiliza protocolo HTTPS com criptografia ponta a ponta.
            </p>

            <h3 className="text-xl font-display font-bold text-foreground mt-8 mb-4">5. Seus Direitos</h3>
            <p>
              De acordo com a LGPD, você tem o direito de:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Confirmar a existência de tratamento de seus dados;</li>
              <li>Acessar, corrigir ou atualizar seus dados;</li>
              <li>Solicitar a eliminação dos seus dados de nossa base (desde que não haja obrigação legal de retenção por parte das instituições financeiras);</li>
              <li>Revogar o consentimento dado anteriormente.</li>
            </ul>

            <h3 className="text-xl font-display font-bold text-foreground mt-8 mb-4">6. Contato</h3>
            <p>
              Para exercer seus direitos ou tirar dúvidas sobre o tratamento de seus dados pessoais, entre em contato através do e-mail: <strong>contato@f1solucoesfinanceiras.com.br</strong>.
            </p>
            
            <p className="mt-8 text-sm">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
          </div>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
