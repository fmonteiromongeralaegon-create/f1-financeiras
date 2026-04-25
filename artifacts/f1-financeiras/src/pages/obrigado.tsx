import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, Clock, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export default function Obrigado() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[hsl(222,25%,97%)]">
      <SiteHeader />

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-lg"
        >
          <div className="bg-white rounded-2xl shadow-card p-8 sm:p-10 text-center">

            <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>

            <h1 className="font-display font-bold text-[hsl(221,72%,14%)] text-3xl sm:text-4xl mb-3">
              Dados recebidos!
            </h1>

            <p className="text-[hsl(221,15%,40%)] text-base leading-relaxed mb-8">
              Sua solicitação foi enviada com sucesso. Em breve um de nossos especialistas
              entrará em contato pelo <strong className="text-[hsl(221,72%,14%)]">WhatsApp</strong> com
              a melhor proposta para o seu perfil.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <div className="flex items-center gap-2 text-sm text-[hsl(221,15%,40%)] bg-[hsl(222,25%,97%)] rounded-lg px-4 py-3">
                <Clock className="h-4 w-4 text-[hsl(268,63%,46%)] shrink-0" />
                Retorno em até 24h úteis
              </div>
              <div className="flex items-center gap-2 text-sm text-[hsl(221,15%,40%)] bg-[hsl(222,25%,97%)] rounded-lg px-4 py-3">
                <ShieldCheck className="h-4 w-4 text-[hsl(268,63%,46%)] shrink-0" />
                Sem custo para você
              </div>
            </div>

            <a
              href="https://wa.me/5516988602882"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-4 px-6 rounded-xl transition-colors text-base mb-4"
            >
              <MessageCircle className="h-5 w-5" />
              Falar agora pelo WhatsApp
            </a>

            <Link
              href="/"
              className="inline-flex items-center justify-center w-full text-sm text-[hsl(221,15%,50%)] hover:text-[hsl(221,72%,14%)] transition-colors py-2"
            >
              Voltar para a página inicial
            </Link>

          </div>

          <p className="text-center text-xs text-[hsl(221,15%,55%)] mt-6">
            <ShieldCheck className="inline h-3 w-3 mr-1" />
            Correspondente bancário · Res. CMN 3.954/2011 · Sem cobrança antecipada
          </p>
        </motion.div>
      </main>

      <SiteFooter />
    </div>
  );
}
