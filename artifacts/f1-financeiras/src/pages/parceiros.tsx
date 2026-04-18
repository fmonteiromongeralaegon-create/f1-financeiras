import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { PartnersTable } from "@/components/sections/PartnersTable";
import { EligibilityQuiz } from "@/components/sections/EligibilityQuiz";

export default function Parceiros() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="section-alt py-16">
          <div className="container-f1 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[hsl(268,63%,46%)]/10 px-3 py-1.5 text-xs font-medium text-[hsl(268,63%,40%)]">
              Parceiros homologados
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[hsl(221,72%,14%)] mt-4 mb-4">
              Nossos Parceiros
            </h1>
            <p className="text-[hsl(221,15%,40%)] text-lg max-w-2xl mx-auto">
              Trabalhamos exclusivamente com as instituições mais sólidas e respeitadas do mercado
              para garantir a sua segurança.
            </p>
          </div>
        </div>
        <PartnersTable />
        <EligibilityQuiz />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
