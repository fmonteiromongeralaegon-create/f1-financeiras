import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { maskCpf, maskPhone, maskPlate, validateCpf } from "@/lib/masks";
import { useSubmitLead } from "@workspace/api-client-react";
import { Link } from "wouter";
import { CheckCircle2, ChevronRight, AlertCircle, RefreshCw, MessageCircle } from "lucide-react";

const leadFormSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(14, "Telefone inválido"),
  cpf: z.string().refine((val) => validateCpf(val), "CPF inválido"),
  licensePlate: z.string().min(7, "Placa inválida"),
});

type QuizStep = 0 | 1 | 2 | 3 | 4;

const QUESTIONS = [
  {
    key: "vehiclePaid" as const,
    title: "Seu veículo está quitado e em seu nome?",
    description: "Apenas veículos sem financiamento ativo são aceitos como garantia.",
    blockedMessage:
      "Para essa modalidade o veículo precisa estar quitado e em seu nome. Converse com um consultor — temos outras opções de crédito e consórcio.",
  },
  {
    key: "vehicleAgeOk" as const,
    title: "Seu veículo tem até 19 anos de fabricação?",
    description:
      "Carros, SUVs e utilitários são aceitos até 19 anos (BV). Outros parceiros variam de 12 a 17 anos.",
    blockedMessage:
      "A maioria dos parceiros aceita veículos com até 19 anos. Confirme o ano exato com um consultor para verificarmos opções específicas.",
  },
  {
    key: "incomeOk" as const,
    title: "Você possui renda compatível com as parcelas?",
    description: "As instituições financeiras avaliam comprovação de renda na análise de crédito.",
    blockedMessage:
      "Renda comprovada é exigida pelas instituições parceiras. Um consultor pode avaliar formas alternativas de comprovação.",
  },
];

export function EligibilityQuiz() {
  const [step, setStep] = useState<QuizStep>(0);
  const [blockedMsg, setBlockedMsg] = useState<string | null>(null);
  const [quizData, setQuizData] = useState({
    vehiclePaid: null as boolean | null,
    vehicleAgeOk: null as boolean | null,
    incomeOk: null as boolean | null,
  });

  const submitLead = useSubmitLead();

  const form = useForm<z.infer<typeof leadFormSchema>>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: { name: "", email: "", phone: "", cpf: "", licensePlate: "" },
  });

  const answer = (key: keyof typeof quizData, value: boolean) => {
    const next = { ...quizData, [key]: value };
    setQuizData(next);
    if (!value) {
      const q = QUESTIONS.find((q) => q.key === key);
      setBlockedMsg(q?.blockedMessage ?? "Não podemos seguir com a simulação agora.");
      return;
    }
    setStep((s) => (s + 1) as QuizStep);
  };

  const reset = () => {
    setStep(0);
    setBlockedMsg(null);
    setQuizData({ vehiclePaid: null, vehicleAgeOk: null, incomeOk: null });
    form.reset();
  };

  const onSubmit = (values: z.infer<typeof leadFormSchema>) => {
    submitLead.mutate(
      {
        data: {
          name: values.name,
          email: values.email,
          phone: values.phone.replace(/\D/g, ""),
          cpf: values.cpf.replace(/\D/g, ""),
          licensePlate: values.licensePlate,
          vehiclePaid: quizData.vehiclePaid,
          vehicleInOwnerName: true,
          hasIncome: quizData.incomeOk,
          consentLgpd: true,
          source: "website",
        },
      },
      { onSuccess: () => setStep(4) }
    );
  };

  const currentQuestion = QUESTIONS[step] ?? null;
  const isSuccess = step === 4;
  const isBlocked = blockedMsg !== null;
  const isForm = step === 3 && !isBlocked;

  return (
    <section id="simular" className="py-16 lg:py-24 section-alt scroll-mt-16">
      <div className="container-f1">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-[hsl(268,63%,46%)]/10 px-3 py-1.5 text-xs font-medium text-[hsl(268,63%,40%)]">
            Passo 1 · Elegibilidade rápida
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[hsl(221,72%,14%)] mt-4">
            Veja em <span className="brand-gradient-text">30 segundos</span> se você se encaixa
          </h2>
          <p className="mt-3 text-[hsl(221,15%,40%)]">
            Responda três perguntas e descubra se seu veículo se qualifica para crédito com as
            menores taxas do mercado.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="rounded-xl bg-white p-6 sm:p-8 shadow-card">

            {/* Progress bar — 3 segments */}
            {!isSuccess && (
              <div className="flex items-center gap-2 mb-6">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                      i < step && !isBlocked ? "bg-[hsl(268,63%,46%)]" : "bg-[hsl(220,20%,90%)]"
                    }`}
                  />
                ))}
              </div>
            )}

            <AnimatePresence mode="wait">

              {/* Blocked */}
              {isBlocked && (
                <motion.div
                  key="blocked"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="text-center py-4"
                >
                  <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-orange-100 mb-4">
                    <AlertCircle className="h-7 w-7 text-orange-500" />
                  </div>
                  <h3 className="font-display font-semibold text-[hsl(221,72%,14%)] text-xl mb-3">
                    Vamos conversar antes de prosseguir
                  </h3>
                  <p className="text-sm text-[hsl(221,15%,40%)] leading-relaxed mb-6">{blockedMsg}</p>
                  <a
                    href="https://wa.me/5516988602882?text=Ol%C3%A1%2C+F1%21+Fiz+o+quiz+de+pr%C3%A9-qualifica%C3%A7%C3%A3o+e+gostaria+de+entender+as+op%C3%A7%C3%B5es+para+o+meu+perfil."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 w-full justify-center bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-3 px-6 rounded-lg transition-colors mb-3"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Falar com consultor no WhatsApp
                  </a>
                  <button
                    onClick={reset}
                    className="flex items-center gap-2 text-sm text-[hsl(268,63%,46%)] hover:underline mx-auto mt-2"
                  >
                    <RefreshCw className="h-3.5 w-3.5" />
                    Refazer a simulação
                  </button>
                </motion.div>
              )}

              {/* Quiz questions */}
              {!isBlocked && !isForm && !isSuccess && currentQuestion && (
                <motion.div
                  key={`q-${step}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="text-xs text-[hsl(221,15%,50%)] mb-2 font-medium">
                    Pergunta {step + 1} de 3
                  </div>
                  <h3 className="font-display font-bold text-[hsl(221,72%,14%)] text-2xl mb-2">
                    {currentQuestion.title}
                  </h3>
                  <p className="text-sm text-[hsl(221,15%,45%)] mb-6">{currentQuestion.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      size="lg"
                      className="h-14 text-base font-semibold bg-[hsl(268,63%,46%)] hover:bg-[hsl(268,63%,40%)] text-white"
                      onClick={() => answer(currentQuestion.key, true)}
                      data-testid={`quiz-q${step + 1}-yes`}
                    >
                      Sim
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-14 text-base font-semibold border-[hsl(220,20%,88%)] text-[hsl(221,72%,14%)] hover:bg-[hsl(222,25%,96%)]"
                      onClick={() => answer(currentQuestion.key, false)}
                      data-testid={`quiz-q${step + 1}-no`}
                    >
                      Não
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Lead form */}
              {isForm && (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="mb-5">
                    <h3 className="font-display font-bold text-[hsl(221,72%,14%)] text-xl mb-1">
                      Ótimo! Preencha seus dados para receber sua proposta
                    </h3>
                    <p className="text-sm text-[hsl(221,15%,45%)]">
                      Seus dados são protegidos por criptografia e usados apenas para a análise.
                    </p>
                  </div>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[hsl(221,72%,14%)] font-medium text-sm">Nome Completo</FormLabel>
                            <FormControl>
                              <Input placeholder="Seu nome completo" {...field} data-testid="input-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[hsl(221,72%,14%)] font-medium text-sm">E-mail</FormLabel>
                            <FormControl>
                              <Input placeholder="seu@email.com" type="email" {...field} data-testid="input-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[hsl(221,72%,14%)] font-medium text-sm">WhatsApp</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="(00) 00000-0000"
                                  {...field}
                                  onChange={(e) => field.onChange(maskPhone(e.target.value))}
                                  maxLength={15}
                                  data-testid="input-phone"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="cpf"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[hsl(221,72%,14%)] font-medium text-sm">CPF</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="000.000.000-00"
                                  {...field}
                                  onChange={(e) => field.onChange(maskCpf(e.target.value))}
                                  maxLength={14}
                                  data-testid="input-cpf"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="licensePlate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[hsl(221,72%,14%)] font-medium text-sm">Placa do Veículo</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="ABC1D23"
                                {...field}
                                onChange={(e) => field.onChange(maskPlate(e.target.value))}
                                maxLength={7}
                                data-testid="input-plate"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full h-14 text-base font-semibold bg-[hsl(268,63%,46%)] hover:bg-[hsl(268,63%,40%)] text-white mt-2"
                        disabled={submitLead.isPending}
                        data-testid="button-submit-simulation"
                      >
                        {submitLead.isPending ? "Enviando..." : (
                          <>
                            Enviar para análise
                            <ChevronRight className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>
                      <p className="text-xs text-[hsl(221,15%,45%)] leading-relaxed text-center">
                        Ao clicar em <strong className="text-[hsl(221,72%,14%)]">Enviar para análise</strong>, você concorda com a{" "}
                        <Link href="/politica-de-privacidade" className="text-[hsl(268,63%,46%)] hover:underline font-medium">
                          Política de Privacidade
                        </Link>{" "}
                        e autoriza a F1 a tratar seus dados para análise de crédito, conforme a LGPD.
                      </p>
                    </form>
                  </Form>
                </motion.div>
              )}

              {/* Success */}
              {isSuccess && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-6"
                >
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-5">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-display font-bold text-[hsl(221,72%,14%)] text-2xl mb-3">
                    Solicitação enviada!
                  </h3>
                  <p className="text-sm text-[hsl(221,15%,40%)] leading-relaxed mb-6 max-w-sm mx-auto">
                    Um consultor vai analisar seu perfil nos 4 bancos parceiros e entrar em contato
                    em instantes pelo WhatsApp.
                  </p>
                  <a
                    href="https://wa.me/5516988602882"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 justify-center w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Ir para o WhatsApp agora
                  </a>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
