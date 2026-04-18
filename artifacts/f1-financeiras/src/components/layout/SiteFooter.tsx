import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";
import { COMPANY, COMPLIANCE } from "@/lib/company";

export function SiteFooter() {
  return (
    <footer className="bg-[hsl(221,72%,10%)] text-white mt-16">
      <div className="container-f1 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-12 w-12 bg-white/5 rounded-md p-1">
                <img
                  src="/logos/logo-f1-oficial.png"
                  alt="F1 Soluções Financeiras"
                  className="object-contain h-full w-full brightness-0 invert"
                />
              </div>
              <div>
                <div className="font-display font-semibold text-white">F1 Soluções Financeiras</div>
                <div className="text-xs text-white/60">{COMPANY.tagline}</div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Corretora de seguros e serviços financeiros em Ribeirão Preto/SP. Intermediamos
              empréstimos com garantia de veículo em parceria com bancos e financeiras
              regulamentadas pelo Banco Central do Brasil.
            </p>
            <div className="mt-4 flex items-start gap-2 text-xs text-white/60">
              <ShieldCheck className="h-4 w-4 mt-0.5 text-[hsl(293,67%,65%)] shrink-0" />
              <span>{COMPLIANCE.bacen}</span>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-display font-semibold text-sm mb-4 text-white">Contato</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-[hsl(293,67%,65%)] shrink-0" />
                <span>
                  {COMPANY.address.street}
                  <br />
                  {COMPANY.address.neighborhood} · {COMPANY.address.city}/{COMPANY.address.state}
                  <br />
                  {COMPANY.address.zip}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[hsl(293,67%,65%)] shrink-0" />
                <a href={`tel:${COMPANY.phone.replace(/\D/g, "")}`} className="hover:text-white">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[hsl(293,67%,65%)] shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white break-all">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[hsl(293,67%,65%)] shrink-0" />
                {COMPANY.hours}
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-display font-semibold text-sm mb-4 text-white">Institucional</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sobre" className="text-white/70 hover:text-white">Sobre a F1</Link></li>
              <li><Link href="/como-funciona" className="text-white/70 hover:text-white">Como funciona</Link></li>
              <li><Link href="/parceiros" className="text-white/70 hover:text-white">Parceiros</Link></li>
              <li><Link href="/faq" className="text-white/70 hover:text-white">FAQ</Link></li>
              <li><Link href="/contato" className="text-white/70 hover:text-white">Contato</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-display font-semibold text-sm mb-4 text-white">Legal</h3>
            <ul className="space-y-2 text-sm mb-6">
              <li><Link href="/termos-de-uso" className="text-white/70 hover:text-white">Termos de Uso</Link></li>
              <li><Link href="/politica-de-privacidade" className="text-white/70 hover:text-white">Política de Privacidade</Link></li>
              <li><Link href="/aviso-legal" className="text-white/70 hover:text-white">Aviso Legal</Link></li>
            </ul>
            <div className="text-xs text-white/50 space-y-1">
              <div>CNPJ: {COMPANY.cnpj}</div>
              <div>{COMPANY.address.street}</div>
              <div>{COMPANY.address.city}/{COMPANY.address.state} — {COMPANY.address.zip}</div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-xs text-white/50 space-y-3">
          <p>{COMPLIANCE.example}</p>
          <p className="pt-2 text-center">
            © {new Date().getFullYear()} {COMPANY.legalName} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
