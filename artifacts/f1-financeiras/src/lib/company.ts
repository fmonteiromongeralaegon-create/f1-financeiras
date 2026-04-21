export const COMPANY = {
  name: 'F1 Soluções Financeiras',
  legalName: 'F1 Soluções Financeiras Ltda.',
  cnpj: '55.225.287/0001-40',
  address: {
    street: 'Rua Pedro Antonio Luiz, 156 — Ap. 12',
    neighborhood: 'Ribeirão Preto',
    city: 'Ribeirão Preto',
    state: 'SP',
    zip: 'CEP 14098-366',
  },
  phone: '(16) 98860-2882',
  whatsapp: '(16) 98860-2882',
  whatsappLink: 'https://wa.me/5516988602882',
  email: 'contato@f1solucoesfinanceiras.com.br',
  hours: 'Seg. a Sex., 9h às 18h',
  tagline: 'Corretora de Seguros e Serviços Financeiros',
}

export interface Partner {
  name: string
  slug: string
  logo: string
  note: string
  strengths: string[]
}

export const PARTNERS: Partner[] = [
  {
    name: 'Porto Bank',
    slug: 'porto',
    logo: '/images/partner-porto.webp',
    note: 'Marca mais confiável do setor de seguros no Brasil — braço financeiro do Grupo Porto.',
    strengths: [
      'Grupo fundado em 1945',
      'Supervisionado pelo Banco Central',
      'Mais de 12 milhões de clientes',
      'Rating nacional de alta solidez',
    ],
  },
  {
    name: 'Banco BV',
    slug: 'bv',
    logo: '/images/partner-bv.webp',
    note: 'Especialista em crédito com garantia de veículos — um dos maiores bancos privados do país.',
    strengths: [
      'Mais de 30 anos no mercado',
      'Controlado pelo Banco do Brasil',
      'Supervisionado pelo Banco Central',
      'Rating AAA pela Fitch Ratings',
    ],
  },
  {
    name: 'C6 Bank',
    slug: 'c6',
    logo: '/images/partner-c6.webp',
    note: 'Banco digital completo com análise ágil e taxas competitivas — sócio do Bank of America.',
    strengths: [
      'Participação do Bank of America',
      'Supervisionado pelo Banco Central',
      'Mais de 30 milhões de clientes',
      'Auditoria independente (Big Four)',
    ],
  },
  {
    name: 'Creditas',
    slug: 'creditas',
    logo: '/images/partner-creditas.webp',
    note: 'Maior fintech de crédito com garantia da América Latina — foco em juros justos e processo digital.',
    strengths: [
      'Fundada em 2012',
      'Supervisionada pelo Banco Central',
      'Investidores globais (Softbank, Kaszek)',
      'Selo RA1000 no Reclame Aqui',
    ],
  },
]

export const COMPLIANCE = {
  minTerm: 12,
  maxTerm: 60,
  minRate: '1,49% ao mês',
  minCET: '45% ao ano',
  example:
    'Exemplo representativo: crédito de R$ 30.000,00 em 48 parcelas de R$ 890,00 · CET 45% ao ano · Total a pagar: R$ 42.700,00, incluindo juros, IOF e demais encargos. Sujeito à análise de crédito do parceiro e à avaliação do veículo.',
  terms:
    'Prazo mínimo: 12 meses · Prazo máximo: 60 meses · Taxa mínima: 1,49% ao mês · CET mínimo: 45% ao ano. As taxas e condições efetivamente aplicadas são definidas pela instituição parceira e sujeitas à análise de crédito. A F1 Soluções Financeiras não cobra nenhum valor antes da liberação do crédito. A não realização do pagamento das parcelas pode impactar negativamente a pontuação de crédito (score) do contratante e resultar na execução da garantia, ou seja, na retomada do veículo pela instituição financeira, conforme previsto em contrato.',
  bacen:
    'A F1 Soluções Financeiras atua como correspondente bancário nos termos da Resolução CMN nº 3.954/2011, intermediando serviços financeiros entre o cliente e as instituições parceiras. Não somos uma instituição financeira.',
}
