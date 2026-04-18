import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/index";
import Sobre from "@/pages/sobre";
import ComoFunciona from "@/pages/como-funciona";
import Parceiros from "@/pages/parceiros";
import FaqPage from "@/pages/faq";
import Contato from "@/pages/contato";
import TermosDeUso from "@/pages/termos-de-uso";
import PoliticaDePrivacidade from "@/pages/politica-de-privacidade";
import AvisoLegal from "@/pages/aviso-legal";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
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
      <Route component={NotFound} />
    </Switch>
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
