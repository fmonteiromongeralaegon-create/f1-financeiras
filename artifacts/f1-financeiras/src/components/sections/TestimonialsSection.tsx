import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Carlos Eduardo S.",
      role: "Empresário",
      text: "Consegui capital de giro para minha empresa usando minha caminhonete como garantia. A taxa foi muito menor do que o empréstimo pessoal que meu banco ofereceu. Processo rápido e sem burocracia."
    },
    {
      name: "Mariana Costa",
      role: "Servidora Pública",
      text: "Eu estava com dívidas no cartão de crédito pagando juros absurdos. A F1 encontrou uma taxa excelente no Banco BV, quitei tudo e agora pago uma parcela que cabe no meu bolso, sem perder meu carro."
    },
    {
      name: "Roberto Almeida",
      role: "Representante Comercial",
      text: "Excelente atendimento pelo WhatsApp. Fui aprovado na Creditas através deles. O dinheiro caiu na conta em menos de 48 horas e continuo usando meu carro para trabalhar todos os dias."
    }
  ];

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Quem confia, recomenda
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Histórias reais de pessoas que organizaram suas finanças com a ajuda da F1.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50 shadow-sm bg-background">
              <CardContent className="pt-8">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 line-clamp-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
