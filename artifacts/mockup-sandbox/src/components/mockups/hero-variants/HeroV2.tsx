export function HeroV2() {
  return (
    <div className="relative overflow-hidden text-white" style={{ background: "hsl(221 72% 14%)", minHeight: "100svh", fontFamily: "Inter, sans-serif" }}>
      {/* BG image — object-[38%_5%] no flip, smoke left→right */}
      <div className="absolute inset-0">
        <img
          src="/__mockup/images/hero-car-keys.webp"
          className="w-full h-full object-cover"
          style={{
            objectPosition: "8% 0%",
            transform: "scale(1.18) translateY(-6%)",
            transformOrigin: "center center",
          }}
          alt=""
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, hsl(221 72% 10%) 0%, hsl(221 72% 10%) 38%, rgba(14,22,54,0.60) 58%, transparent 78%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsl(221 72% 10%) 0%, rgba(14,22,54,0.50) 22%, transparent 45%)" }} />
      </div>

      <div className="relative z-10 px-5 py-14">
        <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium mb-4" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}>
          🚗 Empréstimo com veículo em garantia
        </div>
        <h1 className="text-[1.85rem] leading-tight font-bold mb-4" style={{ maxWidth: "64%" }}>
          Seu carro quitado pode ser{" "}
          <span style={{ background: "linear-gradient(135deg, hsl(268 63% 66%), hsl(293 67% 69%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            a solução
          </span>{" "}
          que você estava procurando.
        </h1>
        <p className="text-sm opacity-80 mb-4 leading-relaxed" style={{ maxWidth: "66%" }}>
          A F1 compara seu perfil em <strong className="text-white">Porto Bank, BV, C6 Bank e Creditas</strong> e apresenta a melhor proposta. Sem custo.
        </p>
        <div className="flex flex-col gap-2 text-sm opacity-85 mb-6" style={{ maxWidth: "66%" }}>
          <div className="flex items-start gap-2">✅ Taxas a partir de <strong>1,49% a.m.</strong></div>
          <div className="flex items-start gap-2">✅ Prazos de <strong>12 a 60 meses</strong></div>
          <div className="flex items-start gap-2">✅ Veículos com <strong>até 19 anos</strong></div>
        </div>
        <button className="w-full py-3 rounded-lg font-semibold text-sm mb-3" style={{ background: "hsl(293 67% 49%)" }}>
          Simular gratuitamente
        </button>
        <button className="w-full py-3 rounded-lg font-semibold text-sm border" style={{ borderColor: "rgba(255,255,255,0.3)", color: "white", background: "transparent" }}>
          Como funciona
        </button>
      </div>

      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 bg-black/60 text-white/70 text-[10px] px-2 py-1 rounded">
        V2 — Smoke esquerda sem flip
      </div>
    </div>
  );
}
