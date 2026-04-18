import { Link } from "wouter";

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1 space-y-4">
            <img src="/logos/logo-f1-oficial.png" alt="F1 Soluções Financeiras" className="h-10 object-contain brightness-0 invert" />
            <p className="text-sm">
              Especialistas em crédito com garantia de veículo. Compare as melhores taxas e condições.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Início</Link></li>
              <li><Link href="/sobre" className="hover:text-white transition-colors">Sobre nós</Link></li>
              <li><Link href="/como-funciona" className="hover:text-white transition-colors">Como funciona</Link></li>
              <li><Link href="/parceiros" className="hover:text-white transition-colors">Parceiros</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">Dúvidas Frequentes</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/termos-de-uso" className="hover:text-white transition-colors">Termos de Uso</Link></li>
              <li><Link href="/politica-de-privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link></li>
              <li><Link href="/aviso-legal" className="hover:text-white transition-colors">Aviso Legal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li>Rua Pedro Antonio Luiz, 156 — Ap. 12</li>
              <li>Ribeirão Preto/SP, CEP 14098-366</li>
              <li>(16) 98860-2882</li>
              <li>contato@f1solucoesfinanceiras.com.br</li>
              <li>Seg. a Sex., 9h às 18h</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-xs text-slate-400 space-y-4">
          <p>
            A F1 Soluções Financeiras atua como correspondente bancário nos termos da Resolução CMN nº 3.954/2011, intermediando serviços financeiros entre o cliente e as instituições parceiras. CNPJ: 55.225.287/0001-40. Toda aprovação final é feita pelas instituições financeiras parceiras, regulamentadas e supervisionadas pelo Banco Central do Brasil.
          </p>
          <p>
            Exemplo: empréstimo de R$ 30.000,00 em 48 parcelas de R$ 890,00. TAE de 42% a.a., CET de 45% a.a. Total: R$ 42.720,00. Sujeito à análise de crédito. IOF e tarifas incluídos no CET. Prazo: 12 a 60 meses (mínimo 61 dias de reembolso garantido). TAE máxima: 42% a.a. (3,47% a.m.) — referência Banco BV.
          </p>
          <p className="pt-4 text-center">
            &copy; {new Date().getFullYear()} F1 Soluções Financeiras Ltda. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
