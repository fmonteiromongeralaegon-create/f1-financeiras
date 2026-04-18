import { ShieldCheck } from "lucide-react";

export function ComplianceBar() {
  return (
    <div className="bg-[hsl(221,72%,10%)] text-white text-xs sm:text-sm">
      <div className="container-f1 flex items-center justify-center gap-2 py-2 text-center">
        <ShieldCheck className="h-3.5 w-3.5 text-[hsl(293,67%,65%)] shrink-0" />
        <span className="opacity-90">
          Correspondente bancário (Res. CMN 3.954/2011) · Não cobramos pagamento antecipado
        </span>
      </div>
    </div>
  );
}
