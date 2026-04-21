import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const WA_MESSAGE =
  "Olá, F1! Estou no site de vocês e quero descobrir minha melhor proposta de empréstimo com garantia de veículo.";

export function CtaSection() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container-f1">
        <div className="rounded-2xl overflow-hidden hero-gradient text-white p-8 sm:p-12 lg:p-16 relative">
          <div className="max-w-2xl relative z-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
              Pronto para descobrir sua <span className="brand-gradient-text">melhor proposta</span>?
            </h2>
            <p className="mt-4 text-white/80 text-base sm:text-lg">
              Simulação gratuita, sem compromisso e sem consulta ao CPF. Responda 3 perguntas e
              nossa equipe retorna no mesmo dia com a melhor oferta disponível para o seu perfil.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="bg-[hsl(293,67%,49%)] hover:bg-[hsl(293,67%,44%)] text-white font-semibold"
                data-testid="button-cta-simular"
              >
                <a href="#simular">
                  Simular gratuitamente <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white"
                data-testid="button-cta-whatsapp"
              >
                <a
                  href={`https://wa.me/5516988602882?text=${encodeURIComponent(WA_MESSAGE)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Falar com consultor no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
