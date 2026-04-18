import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FaqSection() {
  const faqs = [
    {
      question: "O que é empréstimo com garantia de veículo?",
      answer: "É uma modalidade de crédito em que você usa o seu carro quitado como garantia de pagamento. Por ter essa garantia, as instituições financeiras conseguem oferecer taxas de juros muito menores do que as de um empréstimo pessoal comum."
    },
    {
      question: "A F1 Soluções Financeiras é um banco?",
      answer: "Não. A F1 atua como Correspondente Bancário, conforme as diretrizes da Resolução CMN nº 3.954/2011 do Banco Central. Nós fazemos a intermediação entre você e os grandes bancos para encontrar a melhor taxa para o seu perfil."
    },
    {
      question: "Posso continuar usando meu carro?",
      answer: "Sim, absolutamente. O carro continua na sua garagem e você o utiliza normalmente. Apenas constará a observação de alienação fiduciária no documento do veículo até a quitação do empréstimo."
    },
    {
      question: "Quais são as taxas cobradas?",
      answer: "As taxas partem de 1,44% ao mês, variando de acordo com o ano do veículo e o seu perfil de crédito. A Taxa Anual Efetiva (TAE) máxima é de 42% a.a."
    },
    {
      question: "Existe cobrança antecipada?",
      answer: "Não, nunca. A F1 Soluções Financeiras e os bancos parceiros não cobram nenhuma taxa, seguro ou depósito antecipado para a liberação do crédito. Fuja de golpes que exigem pagamentos adiantados."
    },
    {
      question: "Quais veículos são aceitos?",
      answer: "Aceitamos carros de passeio, SUVs e utilitários leves com até 19 anos de fabricação. O veículo precisa estar quitado e em nome do solicitante do empréstimo."
    },
    {
      question: "Qual é o prazo de pagamento?",
      answer: "Você pode dividir o seu empréstimo em prazos flexíveis, de 12 até 60 meses, conforme a sua necessidade e a aprovação do banco."
    },
    {
      question: "Meus dados estão seguros?",
      answer: "Completamente seguros. Nosso site possui criptografia de ponta a ponta (HTTPS) e tratamos todos os seus dados em estrita conformidade com a Lei Geral de Proteção de Dados (LGPD)."
    }
  ];

  return (
    <section className="py-20 bg-background" id="faq">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-muted-foreground">
            Encontre respostas para as principais dúvidas sobre o empréstimo com garantia.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b-border/50">
              <AccordionTrigger className="text-left font-semibold hover:no-underline hover:text-primary transition-colors text-base md:text-lg py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
