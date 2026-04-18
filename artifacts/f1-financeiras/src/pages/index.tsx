import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ComplianceBar } from "@/components/layout/ComplianceBar";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { HeroSection } from "@/components/sections/HeroSection";
import { EligibilityQuiz } from "@/components/sections/EligibilityQuiz";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { PartnersTable } from "@/components/sections/PartnersTable";
import { GuaranteesSection } from "@/components/sections/GuaranteesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <ComplianceBar />
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <EligibilityQuiz />
        <BenefitsSection />
        <HowItWorksSection />
        <PartnersTable />
        <GuaranteesSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
