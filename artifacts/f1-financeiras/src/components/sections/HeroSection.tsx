import { motion } from "framer-motion";
import { ShieldCheck, Landmark, CheckCircle2, Car, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden hero-gradient text-white">
      <div className="container-f1 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur">
              <Car className="h-3.5 w-3.5 text-[hsl(293,67%,75%)]" />
              Empréstimo com veículo em garantia
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mt-4">
              Use seu carro como garantia e pegue dinheiro com as{" "}
              <span className="brand-gradient-text">melhores taxas</span> do mercado.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
              A F1 compara o seu perfil em{" "}
              <strong className="text-white">Porto Bank, Banco BV, C6 Bank e Creditas</strong>{" "}
              simultaneamente e apresenta a melhor proposta de empréstimo com
              garantia do seu veículo. Sem custo inicial e sem compromisso.
            </p>

            <ul className="mt-6 space-y-2.5 text-sm text-white/85">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-[hsl(293,67%,75%)] shrink-0" />
                Taxas a partir de <strong className="text-white">1,44% a.m.</strong>, sujeito à análise de crédito
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-[hsl(293,67%,75%)] shrink-0" />
                Prazos de <strong className="text-white">12 a 60 meses</strong> com liberação em até 120% do valor do veículo
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-[hsl(293,67%,75%)] shrink-0" />
                Aceita carros, SUVs e utilitários com até 19 anos de fabricação
              </li>
            </ul>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="bg-[hsl(293,67%,49%)] hover:bg-[hsl(293,67%,44%)] text-white font-semibold"
              >
                <a href="#simular" data-testid="button-hero-simular">Simular gratuitamente</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/como-funciona">Como funciona</Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/60">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5" />
                Correspondente bancário (Res. 3.954/2011)
              </div>
              <div className="flex items-center gap-1.5">
                <Landmark className="h-3.5 w-3.5" />
                Parceiros regulados pelo Banco Central
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 hidden lg:flex lg:flex-col"
          >
            <div className="relative flex-1 min-h-[420px] rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
              <img
                src="/images/hero-car-keys.webp"
                alt="Chaves de carro — empréstimo com garantia de veículo"
                width={1200}
                height={800}
                fetchPriority="high"
                decoding="async"
                className="object-cover w-full h-full absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(221,72%,10%)]/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-1.5 text-[hsl(268,63%,46%)] text-xs font-semibold mb-2">
                  <Clock className="h-3.5 w-3.5" />
                  APROVAÇÃO EM ATÉ 24H
                </div>
                <p className="font-display font-bold text-[hsl(221,72%,14%)] text-base leading-snug">
                  Seu carro continua com você.
                </p>
                <p className="text-xs text-[hsl(221,15%,50%)] mt-1">
                  Garantia sem transferência de posse · Resposta rápida dos 4 bancos
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
