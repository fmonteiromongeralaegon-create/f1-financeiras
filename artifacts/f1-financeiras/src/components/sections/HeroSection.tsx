import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-16 md:pt-24 pb-20 lg:pt-32 lg:pb-28">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-20 blur-[100px]"></div>
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm font-medium mb-6 text-muted-foreground">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
            Simulação em menos de 3 minutos
          </div>
          
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-foreground">
            Use seu carro como garantia e pegue dinheiro com as <span className="text-primary">melhores taxas</span> do mercado.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            A F1 compara seu perfil em Porto Bank, Banco BV, C6 Bank e Creditas simultaneamente. Sem sair de casa e sem pagar nada adiantado.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base shadow-lg shadow-primary/25" asChild>
              <a href="#simular" data-testid="button-hero-simular">
                Simular gratuitamente
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base border-primary/20 hover:bg-primary/5" asChild>
              <a href="https://wa.me/5516988602882" target="_blank" rel="noopener noreferrer" data-testid="button-hero-whatsapp">
                Falar no WhatsApp
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left border rounded-2xl p-6 bg-card/50 backdrop-blur-sm shadow-sm">
            <div className="flex flex-col gap-1">
              <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Taxas menores
              </span>
              <span className="text-xs text-muted-foreground pl-6">A partir de 1,44% a.m.</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Prazos longos
              </span>
              <span className="text-xs text-muted-foreground pl-6">De 12 a 60 meses para pagar</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Ampla aceitação
              </span>
              <span className="text-xs text-muted-foreground pl-6">Carros e SUVs até 19 anos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
