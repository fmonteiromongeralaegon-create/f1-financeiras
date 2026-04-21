import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const ALL_FAQS = [
  {
    question: "Preciso deixar o carro com vocês?",
    answer:
      "Não. Seu veículo permanece com você durante todo o contrato. Ele serve apenas como garantia — você continua dirigindo normalmente.",
  },
  {
    question: "A F1 Soluções é um banco?",
    answer:
      "Não. Somos um correspondente bancário autorizado pelo Banco Central (Res. nº 3.954/2011). Nossa função é conectar você às melhores instituições financeiras e encontrar a melhor oferta para o seu perfil — sem custo adicional para você.",
  },
  {
    question: "Quais são as taxas e prazos?",
    answer:
      "Prazo mínimo de 12 meses e máximo de 60 meses. Taxa mínima de 1,49% ao mês, com CET a partir de 45% ao ano. Exemplo representativo: crédito de R$ 30.000 em 48 parcelas de R$ 890,00 · CET 45% ao ano · Total pago: R$ 42.720,00. Valores sujeitos à análise de crédito e avaliação do veículo.",
  },
  {
    question: "E se meu crédito não for aprovado?",
    answer:
      "Nossa equipe entra em contato e apresenta alternativas disponíveis — como outras modalidades de crédito ou a possibilidade de tentar com outro parceiro financeiro. Não há nenhum custo pela análise.",
  },
  {
    question: "O que acontece se eu não pagar as parcelas?",
    answer:
      "A inadimplência pode impactar negativamente sua pontuação de crédito (score) e resultar na execução da garantia, ou seja, na retomada do veículo pela instituição financeira, conforme previsto em contrato. Por isso, simule um valor de parcela compatível com sua renda mensal.",
  },
  {
    question: "A simulação consulta meu CPF?",
    answer:
      "Não. A simulação inicial não realiza consulta ao CPF. Você conhece a proposta antes de qualquer compromisso ou impacto no seu score de crédito.",
  },
];

const HOME_FAQS = ALL_FAQS;

interface FaqSectionProps {
  /** When true, renders all questions in a single full-width accordion (for the /faq page) */
  fullPage?: boolean;
}

export function FaqSection({ fullPage = false }: FaqSectionProps) {
  const faqs = fullPage ? ALL_FAQS : HOME_FAQS;

  if (fullPage) {
    return (
      <section className="py-16 lg:py-20 bg-white" id="faq">
        <div className="container-f1 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full divide-y divide-[hsl(220,20%,91%)]">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-none">
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

  return (
    <section className="py-16 lg:py-24 section-alt" id="faq">
      <div className="container-f1">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16 items-start">

          {/* Left column */}
          <div className="lg:sticky lg:top-24">
            <span className="inline-flex items-center gap-2 rounded-full bg-[hsl(268,63%,46%)]/10 px-3 py-1.5 text-xs font-medium text-[hsl(268,63%,40%)]">
              Perguntas frequentes
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[hsl(221,72%,14%)] mt-4 leading-tight">
              Perguntas frequentes —{" "}
              <span className="brand-gradient-text">tudo que você precisa saber</span>
            </h2>
            <p className="mt-4 text-[hsl(221,15%,40%)] text-sm leading-relaxed">
              Nada de letra miúda. Se a resposta que você precisa não estiver aqui, fale com um
              consultor agora mesmo.
            </p>
            <Link
              href="/faq"
              className="mt-6 inline-flex items-center gap-2 bg-[hsl(268,63%,46%)] hover:bg-[hsl(268,63%,40%)] text-white font-semibold text-sm py-3 px-5 rounded-lg transition-colors"
            >
              Ver todas as perguntas
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right column — accordion in white card */}
          <div className="rounded-xl bg-white shadow-card overflow-hidden">
            <Accordion type="single" collapsible className="divide-y divide-[hsl(220,20%,91%)]">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-none px-6">
                  <AccordionTrigger className="text-left font-medium text-[hsl(221,72%,14%)] hover:no-underline hover:text-[hsl(268,63%,46%)] transition-colors text-sm py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[hsl(221,15%,40%)] text-sm leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  );
}
