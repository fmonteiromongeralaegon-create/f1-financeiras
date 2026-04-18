import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { maskCpf, maskPhone, maskPlate, validateCpf } from "@/lib/masks";
import { useSubmitLead } from "@workspace/api-client-react";
import { Link } from "wouter";
import { CheckCircle2, ChevronRight, AlertCircle, XCircle } from "lucide-react";

const leadFormSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(14, "Telefone inválido"),
  cpf: z.string().refine((val) => validateCpf(val), "CPF inválido"),
  licensePlate: z.string().min(7, "Placa inválida"),
  consentLgpd: z.literal(true, {
    errorMap: () => ({ message: "Você precisa concordar com a Política de Privacidade" }),
  }),
});

export function EligibilityQuiz() {
  const [step, setStep] = useState(1);
  const [quizData, setQuizData] = useState({
    vehiclePaid: null as boolean | null,
    vehicleAgeOk: null as boolean | null,
    incomeOk: null as boolean | null,
  });

  const submitLead = useSubmitLead();

  const form = useForm<z.infer<typeof leadFormSchema>>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      cpf: "",
      licensePlate: "",
      consentLgpd: undefined,
    },
  });

  const handleQuizAnswer = (field: keyof typeof quizData, answer: boolean) => {
    setQuizData((prev) => ({ ...prev, [field]: answer }));
    if (!answer) {
      setStep(-1); // Rejected
    } else {
      if (step === 3) {
        setStep(4); // Form
      } else {
        setStep(step + 1);
      }
    }
  };

  const onSubmit = (values: z.infer<typeof leadFormSchema>) => {
    submitLead.mutate({
      data: {
        name: values.name,
        email: values.email,
        phone: values.phone.replace(/\D/g, ''),
        cpf: values.cpf.replace(/\D/g, ''),
        licensePlate: values.licensePlate,
        vehiclePaid: quizData.vehiclePaid,
        vehicleInOwnerName: true,
        hasIncome: quizData.incomeOk,
        consentLgpd: values.consentLgpd,
        source: "website",
      }
    }, {
      onSuccess: () => {
        setStep(5); // Success
      }
    });
  };

  return (
    <section id="simular" className="py-24 bg-background relative scroll-mt-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Simulação Gratuita
          </h2>
          <p className="text-muted-foreground text-lg">
            Descubra em minutos se o seu perfil tem pré-aprovação.
          </p>
        </div>

        <Card className="border-border/50 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-secondary">
            <div 
              className="h-full bg-primary transition-all duration-500 ease-in-out"
              style={{ width: `${step > 0 && step <= 4 ? (step / 4) * 100 : 100}%` }}
            ></div>
          </div>
          <CardHeader className="pt-8">
            {step >= 1 && step <= 3 && (
              <CardDescription className="text-center font-medium text-primary">
                Passo {step} de 3
              </CardDescription>
            )}
            <CardTitle className="text-center text-2xl font-display">
              {step === 1 && "Seu veículo está quitado e em seu nome?"}
              {step === 2 && "O veículo tem até 19 anos de fabricação?"}
              {step === 3 && "Você possui renda compatível com as parcelas?"}
              {step === 4 && "Ótimo! Preencha os dados para ver sua proposta"}
              {step === 5 && "Solicitação enviada com sucesso!"}
              {step === -1 && "Infelizmente não podemos prosseguir"}
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-8">
            
            {/* Quiz Steps */}
            {step === 1 && (
              <div className="grid grid-cols-2 gap-4 mt-4">
                <Button variant="outline" className="h-16 text-lg hover:border-primary hover:text-primary" onClick={() => handleQuizAnswer('vehiclePaid', true)} data-testid="quiz-q1-yes">
                  Sim
                </Button>
                <Button variant="outline" className="h-16 text-lg hover:border-destructive hover:text-destructive" onClick={() => handleQuizAnswer('vehiclePaid', false)} data-testid="quiz-q1-no">
                  Não
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="grid grid-cols-2 gap-4 mt-4">
                <Button variant="outline" className="h-16 text-lg hover:border-primary hover:text-primary" onClick={() => handleQuizAnswer('vehicleAgeOk', true)} data-testid="quiz-q2-yes">
                  Sim
                </Button>
                <Button variant="outline" className="h-16 text-lg hover:border-destructive hover:text-destructive" onClick={() => handleQuizAnswer('vehicleAgeOk', false)} data-testid="quiz-q2-no">
                  Não
                </Button>
              </div>
            )}

            {step === 3 && (
              <div className="grid grid-cols-2 gap-4 mt-4">
                <Button variant="outline" className="h-16 text-lg hover:border-primary hover:text-primary" onClick={() => handleQuizAnswer('incomeOk', true)} data-testid="quiz-q3-yes">
                  Sim
                </Button>
                <Button variant="outline" className="h-16 text-lg hover:border-destructive hover:text-destructive" onClick={() => handleQuizAnswer('incomeOk', false)} data-testid="quiz-q3-no">
                  Não
                </Button>
              </div>
            )}

            {/* Rejected State */}
            {step === -1 && (
              <div className="text-center mt-2 flex flex-col items-center">
                <AlertCircle className="h-16 w-16 text-muted-foreground mb-4 opacity-50" />
                <p className="text-muted-foreground mb-8">
                  Para essa modalidade de crédito, o veículo precisa estar totalmente quitado, em seu nome, e ter no máximo 19 anos de fabricação.
                </p>
                <Button className="w-full" asChild>
                  <a href="https://wa.me/5516988602882" target="_blank" rel="noopener noreferrer">
                    Falar com consultor no WhatsApp
                  </a>
                </Button>
                <Button variant="ghost" className="mt-4" onClick={() => { setStep(1); setQuizData({ vehiclePaid: null, vehicleAgeOk: null, incomeOk: null }); }}>
                  Refazer simulação
                </Button>
              </div>
            )}

            {/* Success State */}
            {step === 5 && (
              <div className="text-center mt-2 flex flex-col items-center">
                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full mb-6">
                  <CheckCircle2 className="h-16 w-16 text-green-600 dark:text-green-500" />
                </div>
                <p className="text-foreground text-lg font-medium mb-2">
                  Recebemos seus dados!
                </p>
                <p className="text-muted-foreground mb-8">
                  Um de nossos consultores especializados vai analisar o seu perfil nos bancos parceiros e entrará em contato em instantes pelo WhatsApp.
                </p>
                <Button className="w-full h-14 text-base bg-[#25D366] hover:bg-[#20bd5a] text-white" asChild>
                  <a href="https://wa.me/5516988602882" target="_blank" rel="noopener noreferrer">
                    Ir para o WhatsApp agora
                  </a>
                </Button>
              </div>
            )}

            {/* Lead Form */}
            {step === 4 && (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mt-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome Completo</FormLabel>
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
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                          <Input placeholder="seu@email.com" type="email" {...field} data-testid="input-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>WhatsApp</FormLabel>
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
                          <FormLabel>CPF</FormLabel>
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
                        <FormLabel>Placa do Veículo</FormLabel>
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
                  
                  <FormField
                    control={form.control}
                    name="consentLgpd"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 border rounded-lg bg-muted/50 mt-6">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            data-testid="checkbox-lgpd"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-normal text-muted-foreground cursor-pointer">
                            Concordo com a{" "}
                            <Link href="/politica-de-privacidade" className="text-primary hover:underline" target="_blank">
                              Política de Privacidade
                            </Link>{" "}
                            e aceito receber comunicações da F1 Soluções Financeiras.
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  {form.formState.errors.consentLgpd && (
                     <p className="text-[0.8rem] font-medium text-destructive">
                       {form.formState.errors.consentLgpd.message}
                     </p>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full h-14 text-base mt-2" 
                    disabled={submitLead.isPending}
                    data-testid="button-submit-simulation"
                  >
                    {submitLead.isPending ? "Processando..." : (
                      <>
                        Enviar simulação
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            )}

          </CardContent>
        </Card>
      </div>
    </section>
  );
}
