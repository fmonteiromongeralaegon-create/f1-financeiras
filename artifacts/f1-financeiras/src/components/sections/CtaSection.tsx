import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function CtaSection() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5"></div>
      <div className="container relative mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
          Pronto para dar o próximo passo?
        </h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Descubra agora mesmo qual o valor disponível para você. Simulação gratuita, rápida e sem compromisso.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="h-14 px-8 text-base" asChild>
            <Link href="/#simular" data-testid="button-cta-simular">
              Fazer simulação gratuita
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-transparent border-primary/20 hover:bg-primary/5" asChild>
            <a href="https://wa.me/5516988602882" target="_blank" rel="noopener noreferrer" data-testid="button-cta-whatsapp">
              Tirar dúvidas no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
