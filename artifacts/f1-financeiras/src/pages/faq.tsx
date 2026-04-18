import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { FaqSection } from "@/components/sections/FaqSection";

export default function FaqPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <SiteHeader />
      <main className="flex-1 py-10">
        <FaqSection />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
