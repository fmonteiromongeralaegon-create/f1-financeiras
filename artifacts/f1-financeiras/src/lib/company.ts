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
    note: 'Braço financeiro do Grupo Porto, uma das marcas mais tradicionais e confiáveis do Brasil.',
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
    note: 'Um dos maiores bancos privados do país, referência em crédito com garantia de veículos.',
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
    note: 'Banco digital completo, sócio do Bank of America, com atendimento 100% online e seguro.',
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
    note: 'Maior fintech brasileira especializada em crédito com garantia — modelo de negócio com foco em juros justos.',
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
  maxTAE: '42% ao ano (3,47% a.m.) — referência Banco BV',
  example:
    'Exemplo representativo: empréstimo de R$ 30.000,00 em 48 parcelas de R$ 890,00. Taxa Anual Efetiva (TAE) de 42% a.a. e CET (Custo Efetivo Total) de 45% a.a. Valor total pago: R$ 42.720,00. Sujeito à análise de crédito do parceiro. IOF, tarifas e impostos já incluídos no CET.',
  terms:
    'Prazo de reembolso: 12 até 60 meses. Taxa Anual Efetiva (TAE) máxima: 42% ao ano (3,47% a.m.) — referência Banco BV. As taxas e condições efetivamente aplicadas são definidas pela instituição parceira e sujeitas à análise de crédito. A F1 Soluções Financeiras não cobra taxas antecipadas dos clientes.',
  bacen:
    'A F1 Soluções Financeiras atua como correspondente bancário nos termos da Resolução CMN nº 3.954/2011, intermediando serviços financeiros entre o cliente e as instituições parceiras. Não somos uma instituição financeira.',
}
