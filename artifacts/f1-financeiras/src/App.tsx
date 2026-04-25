import { lazy, Suspense } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/index";

const Sobre = lazy(() => import("@/pages/sobre"));
const ComoFunciona = lazy(() => import("@/pages/como-funciona"));
const Parceiros = lazy(() => import("@/pages/parceiros"));
const FaqPage = lazy(() => import("@/pages/faq"));
const Contato = lazy(() => import("@/pages/contato"));
const TermosDeUso = lazy(() => import("@/pages/termos-de-uso"));
const PoliticaDePrivacidade = lazy(() => import("@/pages/politica-de-privacidade"));
const AvisoLegal = lazy(() => import("@/pages/aviso-legal"));
const Obrigado = lazy(() => import("@/pages/obrigado"));
const NotFound = lazy(() => import("@/pages/not-found"));

const queryClient = new QueryClient();

function Router() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/como-funciona" component={ComoFunciona} />
        <Route path="/parceiros" component={Parceiros} />
        <Route path="/faq" component={FaqPage} />
        <Route path="/contato" component={Contato} />
        <Route path="/termos-de-uso" component={TermosDeUso} />
        <Route path="/politica-de-privacidade" component={PoliticaDePrivacidade} />
        <Route path="/aviso-legal" component={AvisoLegal} />
        <Route path="/obrigado" component={Obrigado} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
