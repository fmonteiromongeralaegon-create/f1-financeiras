import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { FaqSection } from "@/components/sections/FaqSection";
import { EligibilityQuiz } from "@/components/sections/EligibilityQuiz";

export default function FaqPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="section-alt py-16">
          <div className="container-f1 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[hsl(268,63%,46%)]/10 px-3 py-1.5 text-xs font-medium text-[hsl(268,63%,40%)]">
              Perguntas frequentes
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[hsl(221,72%,14%)] mt-4 mb-4">
              Dúvidas Frequentes
            </h1>
            <p className="text-[hsl(221,15%,40%)] text-lg max-w-2xl mx-auto">
              Encontre respostas para as principais dúvidas sobre o empréstimo com garantia de veículo.
            </p>
          </div>
        </div>
        <FaqSection hideHeader />
        <EligibilityQuiz />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
