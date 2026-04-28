import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { EligibilityQuiz } from "@/components/sections/EligibilityQuiz";

export default function ComoFunciona() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="section-alt py-16">
          <div className="container-f1 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[hsl(268,63%,46%)]/10 px-3 py-1.5 text-xs font-medium text-[hsl(268,63%,40%)]">
              Como funciona
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[hsl(221,72%,14%)] mt-4 mb-4">
              Entenda o Processo
            </h1>
            <p className="text-[hsl(221,15%,40%)] text-lg max-w-2xl mx-auto">
              Simples, seguro e totalmente digital. Veja como é fácil conseguir crédito usando seu carro como garantia.
            </p>
          </div>
        </div>
        <HowItWorksSection />
        <EligibilityQuiz />
        <FaqSection fullPage />
      </main>
      <SiteFooter />
    </div>
  );
}
