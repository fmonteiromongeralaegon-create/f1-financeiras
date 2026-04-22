import { motion } from "framer-motion";
import { ShieldCheck, Landmark, CheckCircle2, Car, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden hero-gradient text-white">

      <div className="container-f1 pt-10 pb-12 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">

          {/* ── Main content ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            {/* ── MOBILE: two-column row — text left, portrait image right ── */}
            <div className="flex items-start gap-3 lg:block">

              {/* Text column */}
              <div className="flex-1 min-w-0">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur">
                  <Car className="h-3.5 w-3.5 text-[hsl(293,67%,75%)]" />
                  Empréstimo com veículo em garantia
                </span>
                <h1 className="font-display text-[1.85rem] leading-[1.15] sm:text-4xl lg:text-5xl font-bold mt-3">
                  Seu carro quitado pode ser{" "}
                  <span className="brand-gradient-text">a solução</span>{" "}
                  que você estava procurando.
                </h1>
              </div>

              {/* Portrait image — MOBILE ONLY */}
              <div className="lg:hidden shrink-0 w-[36%] max-w-[148px] pt-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50"
                     style={{ aspectRatio: "3/4" }}>
                  <img
                    src="/images/hero-car-keys.webp"
                    alt="Mulher sorrindo com chaves do carro"
                    width={1200}
                    height={800}
                    fetchPriority="high"
                    decoding="async"
                    className="object-cover object-[42%_0%] w-full h-full"
                  />
                  {/* Left-blend: merges image edge into the dark background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[hsl(221,72%,10%)]/70 via-transparent to-transparent" />
                </div>
              </div>
            </div>

            {/* ── Rest of content (full width on mobile) ── */}
            <p className="mt-4 text-[0.9rem] sm:text-lg text-white/80 leading-relaxed sm:max-w-xl">
              A F1 compara seu perfil em{" "}
              <strong className="text-white">Porto Bank, Banco BV, C6 Bank e Creditas</strong>{" "}
              e apresenta a melhor proposta. Sem custo e sem compromisso.
            </p>

            <div className="mt-4 flex flex-col gap-2.5 text-sm text-white/85">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-[hsl(293,67%,75%)] shrink-0" />
                <span>Taxas a partir de <strong className="text-white">1,49% a.m.</strong>, sujeito à análise de crédito</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-[hsl(293,67%,75%)] shrink-0" />
                <span>Prazos de <strong className="text-white">12 a 60 meses</strong>, com liberação em até 120% do valor do veículo</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-[hsl(293,67%,75%)] shrink-0" />
                <span>Carros, SUVs e utilitários com <strong className="text-white">até 19 anos</strong> de fabricação</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
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

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/55">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
                Correspondente bancário (Res. 3.954/2011)
              </div>
              <div className="flex items-center gap-1.5">
                <Landmark className="h-3.5 w-3.5 shrink-0" />
                Parceiros regulados pelo Banco Central
              </div>
            </div>

            <div className="lg:hidden mt-4 flex items-center gap-2 rounded-lg bg-white/8 border border-white/10 px-4 py-2.5 text-xs text-white/80">
              <Clock className="h-3.5 w-3.5 text-[hsl(293,67%,75%)] shrink-0" />
              <span>Aprovação em até <strong className="text-white">24h úteis</strong> · Seu carro continua com você</span>
            </div>
          </motion.div>

          {/* ── Desktop-only: image panel ── */}
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
                  APROVAÇÃO EM ATÉ 24H ÚTEIS
                </div>
                <p className="font-display font-bold text-[hsl(221,72%,14%)] text-base leading-snug">
                  Seu carro continua com você.
                </p>
                <p className="text-xs text-[hsl(221,15%,50%)] mt-1">
                  Sem custo para simular · Resposta rápida dos 4 bancos
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
