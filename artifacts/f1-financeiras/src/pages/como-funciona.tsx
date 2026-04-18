import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FaqSection } from "@/components/sections/FaqSection";

export default function ComoFunciona() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="bg-primary/5 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Entenda o Processo</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simples, seguro e totalmente digital. Veja como é fácil conseguir crédito usando seu carro como garantia.
            </p>
          </div>
        </div>
        <HowItWorksSection />
        <FaqSection />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
