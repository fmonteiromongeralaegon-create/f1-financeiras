import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    question: "O que é empréstimo com garantia de veículo?",
    answer:
      "É uma modalidade de crédito em que você usa o seu carro quitado como garantia de pagamento. Por ter essa garantia, as instituições financeiras conseguem oferecer taxas de juros muito menores do que as de um empréstimo pessoal comum.",
  },
  {
    question: "A F1 Soluções Financeiras é um banco?",
    answer:
      "Não. A F1 atua como Correspondente Bancário, conforme as diretrizes da Resolução CMN nº 3.954/2011 do Banco Central. Nós fazemos a intermediação entre você e os grandes bancos para encontrar a melhor taxa para o seu perfil.",
  },
  {
    question: "Posso continuar usando meu carro?",
    answer:
      "Sim, absolutamente. O carro continua na sua garagem e você o utiliza normalmente. Apenas constará a observação de alienação fiduciária no documento do veículo até a quitação do empréstimo.",
  },
  {
    question: "Quais são as taxas cobradas?",
    answer:
      "As taxas partem de 1,44% ao mês, variando de acordo com o ano do veículo e o seu perfil de crédito. A Taxa Anual Efetiva (TAE) máxima é de 42% a.a.",
  },
  {
    question: "Existe cobrança antecipada?",
    answer:
      "Não, nunca. A F1 Soluções Financeiras e os bancos parceiros não cobram nenhuma taxa, seguro ou depósito antecipado para a liberação do crédito. Fuja de golpes que exigem pagamentos adiantados.",
  },
  {
    question: "Quais veículos são aceitos?",
    answer:
      "Aceitamos carros de passeio, SUVs e utilitários leves com até 19 anos de fabricação. O veículo precisa estar quitado e em nome do solicitante do empréstimo.",
  },
  {
    question: "Qual é o prazo de pagamento?",
    answer:
      "Você pode dividir o seu empréstimo em prazos flexíveis, de 12 até 60 meses, conforme a sua necessidade e a aprovação do banco.",
  },
  {
    question: "Meus dados estão seguros?",
    answer:
      "Completamente seguros. Nosso site possui criptografia de ponta a ponta (HTTPS) e tratamos todos os seus dados em estrita conformidade com a Lei Geral de Proteção de Dados (LGPD).",
  },
];

interface FaqSectionProps {
  hideHeader?: boolean;
}

export function FaqSection({ hideHeader = false }: FaqSectionProps) {
  return (
    <section className="py-16 lg:py-20 bg-white" id="faq">
      <div className="container-f1 max-w-3xl mx-auto">
        {!hideHeader && (
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-[hsl(268,63%,46%)]/10 px-3 py-1.5 text-xs font-medium text-[hsl(268,63%,40%)]">
              Perguntas frequentes
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[hsl(221,72%,14%)] mt-4 mb-3">
              Dúvidas Frequentes
            </h2>
            <p className="text-[hsl(221,15%,40%)]">
              Encontre respostas para as principais dúvidas sobre o empréstimo com garantia.
            </p>
          </div>
        )}

        <Accordion type="single" collapsible className="w-full divide-y divide-[hsl(220,20%,91%)]">
          {FAQS.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-none"
            >
              <AccordionTrigger className="text-left font-semibold text-[hsl(221,72%,14%)] hover:no-underline hover:text-[hsl(268,63%,46%)] transition-colors text-base py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[hsl(221,15%,40%)] text-sm leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
