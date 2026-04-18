import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/como-funciona", label: "Como funciona" },
  { href: "/parceiros", label: "Parceiros" },
  { href: "/faq", label: "FAQ" },
  { href: "/contato", label: "Contato" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-[hsl(220,20%,92%)]">
      <div className="container-f1 flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="F1 Soluções Financeiras — início">
          <div className="relative h-10 w-10">
            <img
              src="/logos/logo-f1-oficial.png"
              alt="F1 Soluções Financeiras"
              className="object-contain h-full w-full"
            />
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display font-semibold text-[hsl(221,72%,14%)] text-sm">F1 Soluções</span>
            <span className="text-[10px] text-[hsl(221,15%,40%)]">Financeiras</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const active = location === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  active
                    ? "text-[hsl(268,63%,46%)] bg-[hsl(268,63%,46%)]/5"
                    : "text-[hsl(221,72%,20%)] hover:text-[hsl(268,63%,46%)] hover:bg-[hsl(222,25%,96%)]"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="bg-[hsl(268,63%,46%)] hover:bg-[hsl(268,63%,40%)] text-white"
          >
            <a href="/#simular" data-testid="button-nav-simular">Simular agora</a>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 rounded-md text-[hsl(221,72%,14%)] hover:bg-[hsl(222,25%,96%)]"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[hsl(220,20%,92%)] bg-white">
          <div className="container-f1 py-3 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2.5 rounded-md text-sm font-medium text-[hsl(221,72%,20%)] hover:bg-[hsl(222,25%,96%)]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              size="sm"
              className="mt-2 bg-[hsl(268,63%,46%)] hover:bg-[hsl(268,63%,40%)] text-white"
            >
              <a href="/#simular" onClick={() => setOpen(false)}>
                Simular agora
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
