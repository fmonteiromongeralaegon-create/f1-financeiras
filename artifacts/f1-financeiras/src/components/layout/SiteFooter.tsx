import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";
import { COMPANY, PARTNERS, COMPLIANCE } from "@/lib/company";

export function SiteFooter() {
  return (
    <footer className="bg-[hsl(221,72%,10%)] text-white">
      <div className="container-f1 pt-14 pb-2">

        {/* Main grid: Brand | Contato | Institucional | Jurídico */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10">

          {/* Brand column */}
          <div className="lg:col-span-4">
            {/* Logo + name */}
            <Link href="/" className="flex items-center gap-3 mb-5" aria-label="F1 Soluções Financeiras">
              <img
                src="/logos/logo-f1-dark.webp"
                alt="F1 Soluções Financeiras"
                width={56}
                height={56}
                loading="lazy"
                decoding="async"
                className="h-14 w-14 rounded-lg object-contain shrink-0"
              />
              <div>
                <div className="font-display font-bold text-white text-base leading-tight">F1 Soluções Financeiras</div>
                <div className="text-[11px] text-white/55 mt-0.5">{COMPANY.tagline}</div>
              </div>
            </Link>

            {/* Description */}
            <p className="text-sm text-white/65 leading-relaxed mb-5">
              Corretora de seguros e serviços financeiros em Ribeirão Preto/SP.
              Intermediamos empréstimos com garantia de veículo em parceria com bancos e
              financeiras regulamentadas pelo Banco Central do Brasil.
            </p>

            {/* BACEN compliance with shield icon */}
            <div className="flex items-start gap-2 text-xs text-white/45 leading-relaxed">
              <ShieldCheck className="h-4 w-4 mt-0.5 text-white/40 shrink-0" />
              <span>{COMPLIANCE.bacen}</span>
            </div>
          </div>

          {/* Contato column */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-semibold text-sm mb-5 text-white">Contato</h3>
            <ul className="space-y-3.5 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 text-white/70 shrink-0" />
                <span className="leading-relaxed">
                  {COMPANY.address.street}<br />
                  {COMPANY.address.neighborhood} · {COMPANY.address.city}/{COMPANY.address.state}<br />
                  {COMPANY.address.zip}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-white/70 shrink-0" />
                <a href={`tel:${COMPANY.phone.replace(/\D/g, "")}`} className="hover:text-white transition-colors">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-white/70 shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition-colors break-all">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-white/70 shrink-0" />
                <span>{COMPANY.hours}</span>
              </li>
            </ul>
          </div>

          {/* Institucional column */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-semibold text-sm mb-5 text-white">Institucional</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/sobre" className="text-white/65 hover:text-white transition-colors">Sobre a F1</Link></li>
              <li><Link href="/como-funciona" className="text-white/65 hover:text-white transition-colors">Como funciona</Link></li>
              <li><Link href="/parceiros" className="text-white/65 hover:text-white transition-colors">Parceiros</Link></li>
              <li><Link href="/faq" className="text-white/65 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contato" className="text-white/65 hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Jurídico column */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-semibold text-sm mb-5 text-white">Jurídico</h3>
            <ul className="space-y-3 text-sm mb-6">
              <li>
                <Link href="/politica-de-privacidade" className="text-white/65 hover:text-white transition-colors">
                  Política de Privacidade (LGPD)
                </Link>
              </li>
              <li><Link href="/termos-de-uso" className="text-white/65 hover:text-white transition-colors">Termos de Uso</Link></li>
              <li><Link href="/aviso-legal" className="text-white/65 hover:text-white transition-colors">Aviso Legal</Link></li>
            </ul>

            <div>
              <p className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-1">CNPJ</p>
              <p className="text-sm text-white/65">{COMPANY.cnpj}</p>
            </div>
          </div>
        </div>

        {/* Partner logos strip */}
        <div className="border-t border-white/10 pt-8 pb-6">
          <p className="text-[11px] text-white/35 uppercase tracking-widest mb-4">Parceiros homologados</p>
          <div className="flex flex-wrap items-center gap-3">
            {PARTNERS.map((p) => (
              <div
                key={p.slug}
                className="h-9 bg-white/90 hover:bg-white transition-colors rounded px-3 flex items-center justify-center"
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className={`object-contain w-auto max-w-[90px] ${p.slug === "bv" ? "h-8" : "h-5"}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom compliance bar — slightly separated */}
        <div className="border-t border-white/10 py-6 space-y-2">
          <p className="text-xs text-white/55 leading-relaxed">
            <span className="font-semibold text-white/70">Informações importantes:</span>{" "}
            {COMPLIANCE.example}
          </p>
          <p className="text-xs text-white/55 leading-relaxed">
            {COMPLIANCE.terms}
          </p>
          <p className="text-xs text-white/35 pt-2">
            © {new Date().getFullYear()} {COMPANY.legalName}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/35">
            Corretor de Seguros responsável: Flavio dos Santos Monteiro — Registro SUSEP nº 201014067.
          </p>
        </div>
      </div>
    </footer>
  );
}
