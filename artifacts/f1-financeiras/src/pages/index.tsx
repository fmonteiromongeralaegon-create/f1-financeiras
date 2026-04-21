import { lazy, Suspense } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ComplianceBar } from "@/components/layout/ComplianceBar";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { HeroSection } from "@/components/sections/HeroSection";
import { EligibilityQuiz } from "@/components/sections/EligibilityQuiz";

const BenefitsSection = lazy(() => import("@/components/sections/BenefitsSection").then(m => ({ default: m.BenefitsSection })));
const HowItWorksSection = lazy(() => import("@/components/sections/HowItWorksSection").then(m => ({ default: m.HowItWorksSection })));
const PartnersTable = lazy(() => import("@/components/sections/PartnersTable").then(m => ({ default: m.PartnersTable })));
const GuaranteesSection = lazy(() => import("@/components/sections/GuaranteesSection").then(m => ({ default: m.GuaranteesSection })));
const TestimonialsSection = lazy(() => import("@/components/sections/TestimonialsSection").then(m => ({ default: m.TestimonialsSection })));
const FaqSection = lazy(() => import("@/components/sections/FaqSection").then(m => ({ default: m.FaqSection })));
const CtaSection = lazy(() => import("@/components/sections/CtaSection").then(m => ({ default: m.CtaSection })));

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <ComplianceBar />
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <EligibilityQuiz />
        <Suspense fallback={null}>
          <BenefitsSection />
          <HowItWorksSection />
          <PartnersTable />
          <GuaranteesSection />
          <TestimonialsSection />
          <FaqSection />
          <CtaSection />
        </Suspense>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
