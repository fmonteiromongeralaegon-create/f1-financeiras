import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function Parceiros() {
  const partners = [
    {
      name: "Porto Bank",
      logo: "/images/partner-porto.png",
      description: "Grupo fundado em 1945, supervisionado pelo Banco Central, com mais de 12 milhões de clientes. Referência em segurança e credibilidade no mercado brasileiro."
    },
    {
      name: "Banco BV",
      logo: "/images/partner-bv.png",
      description: "Controlado pelo Banco do Brasil, com mais de 30 anos de atuação e Rating AAA pela Fitch. Um dos líderes nacionais em financiamento de veículos."
    },
    {
      name: "C6 Bank",
      logo: "/images/partner-c6.png",
      description: "Instituição moderna com participação do Bank of America, supervisionado pelo Banco Central e atendendo a mais de 30 milhões de clientes."
    },
    {
      name: "Creditas",
      logo: "/images/partner-creditas.png",
      description: "A maior fintech de crédito com garantia do Brasil, com investimentos do Softbank e Selo RA1000 no Reclame Aqui."
    }
  ];

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <SiteHeader />
      <main className="flex-1 py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-display font-bold text-foreground mb-6">Nossos Parceiros</h1>
            <p className="text-xl text-muted-foreground">
              Trabalhamos exclusivamente com as instituições mais sólidas e respeitadas do mercado para garantir a sua segurança.
            </p>
          </div>

          <div className="grid gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="overflow-hidden border-border/50 shadow-sm">
                <CardContent className="p-0 sm:flex items-center">
                  <div className="sm:w-1/3 bg-secondary/30 p-8 flex items-center justify-center h-48 sm:h-auto border-b sm:border-b-0 sm:border-r border-border/50">
                    <img src={partner.logo} alt={partner.name} className="max-h-20 object-contain" />
                  </div>
                  <div className="sm:w-2/3 p-8">
                    <h3 className="text-2xl font-display font-bold mb-3">{partner.name}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {partner.description}
                    </p>
                    <div className="flex items-center text-sm font-medium text-green-600 dark:text-green-500">
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      Parceiro Homologado F1
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 bg-primary/5 rounded-2xl p-8 text-center border border-primary/10">
            <h3 className="text-xl font-bold font-display mb-4">Correspondente Bancário Autorizado</h3>
            <p className="text-muted-foreground mb-0">
              A F1 atua de forma legal e regulamentada. Todas as propostas e aprovações são feitas diretamente pelos sistemas dos bancos parceiros, garantindo total transparência e segurança na sua operação de crédito.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
