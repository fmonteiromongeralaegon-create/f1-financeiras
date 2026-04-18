import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export default function TermosDeUso() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <SiteHeader />
      <main className="flex-1 py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-display font-bold mb-8">Termos de Uso</h1>
          
          <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground space-y-6">
            <p>
              Estes Termos de Uso regulam o acesso e a utilização do site e dos serviços oferecidos pela F1 Soluções Financeiras Ltda., inscrita no CNPJ sob o nº 55.225.287/0001-40.
            </p>
            
            <h3 className="text-xl font-display font-bold text-foreground mt-8 mb-4">1. Nossos Serviços</h3>
            <p>
              A F1 Soluções Financeiras atua exclusivamente como Correspondente Bancário, nos termos da Resolução nº 3.954/2011 do Conselho Monetário Nacional (CMN). Não somos uma instituição financeira, não realizamos operações de crédito diretamente e não cobramos quaisquer valores antecipados dos clientes.
            </p>
            <p>
              Nosso serviço consiste na intermediação de produtos financeiros entre os usuários e as instituições financeiras parceiras (Porto Bank, Banco BV, C6 Bank e Creditas).
            </p>

            <h3 className="text-xl font-display font-bold text-foreground mt-8 mb-4">2. Simulações e Propostas</h3>
            <p>
              As simulações realizadas em nosso site possuem caráter meramente informativo. Os valores de parcelas, taxas de juros, Custo Efetivo Total (CET) e prazos apresentados podem variar no momento da contratação, dependendo da política de crédito da instituição financeira parceira e da análise do perfil do cliente.
            </p>
            <p>
              A aprovação do crédito está sujeita a análise cadastral e aprovação pela instituição financeira escolhida.
            </p>

            <h3 className="text-xl font-display font-bold text-foreground mt-8 mb-4">3. Responsabilidades do Usuário</h3>
            <p>
              Ao utilizar nossos serviços, o usuário se compromete a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fornecer informações verdadeiras, exatas e atualizadas;</li>
              <li>Ser maior de 18 anos e possuir capacidade civil plena;</li>
              <li>Não utilizar o site para fins ilegais ou não autorizados;</li>
              <li>Estar ciente de que o fornecimento de dados falsos pode configurar crime.</li>
            </ul>

            <h3 className="text-xl font-display font-bold text-foreground mt-8 mb-4">4. Propriedade Intelectual</h3>
            <p>
              Todo o conteúdo deste site (textos, imagens, logotipos, layout) é de propriedade exclusiva da F1 Soluções Financeiras ou de seus parceiros, sendo protegido pelas leis de direitos autorais e de propriedade intelectual. É proibida a reprodução, cópia ou distribuição sem autorização prévia.
            </p>

            <h3 className="text-xl font-display font-bold text-foreground mt-8 mb-4">5. Limitação de Responsabilidade</h3>
            <p>
              A F1 Soluções Financeiras não se responsabiliza pelas decisões de aprovação ou reprovação de crédito tomadas pelas instituições financeiras parceiras, nem pelas condições finais estabelecidas nos contratos de empréstimo.
            </p>

            <h3 className="text-xl font-display font-bold text-foreground mt-8 mb-4">6. Atualizações dos Termos</h3>
            <p>
              Reservamo-nos o direito de alterar estes Termos de Uso a qualquer momento. Recomendamos a leitura periódica desta página. O uso continuado do site após as alterações implica na aceitação dos novos termos.
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
