import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSubmitContact } from "@workspace/api-client-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { maskPhone } from "@/lib/masks";
import { Link } from "wouter";
import { Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Selecione um assunto"),
  message: z.string().min(10, "Mensagem muito curta"),
  consentLgpd: z.literal(true, {
    errorMap: () => ({ message: "Você precisa concordar com os termos" }),
  }),
});

export default function Contato() {
  const submitContact = useSubmitContact();

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      consentLgpd: undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof contactFormSchema>) => {
    submitContact.mutate({
      data: {
        name: values.name,
        email: values.email,
        phone: values.phone ? values.phone.replace(/\D/g, '') : null,
        subject: values.subject,
        message: values.message,
        consentLgpd: values.consentLgpd,
      }
    });
  };

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <SiteHeader />
      <main className="flex-1 py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-display font-bold text-foreground mb-4">Entre em Contato</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estamos aqui para ajudar. Preencha o formulário abaixo ou use um de nossos canais diretos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-xl font-display font-bold mb-6">Informações de Contato</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-primary mr-4 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Telefone / WhatsApp</p>
                      <p className="text-muted-foreground">(16) 98860-2882</p>
                      <p className="text-sm text-muted-foreground mt-1">Seg. a Sex., 9h às 18h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-primary mr-4 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">E-mail</p>
                      <p className="text-muted-foreground break-all">contato@f1solucoesfinanceiras.com.br</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-primary mr-4 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Endereço</p>
                      <p className="text-muted-foreground">
                        Rua Pedro Antonio Luiz, 156 — Ap. 12<br />
                        Ribeirão Preto/SP<br />
                        CEP 14098-366
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <Card className="border-border/50 shadow-sm">
                <CardHeader>
                  <CardTitle className="font-display text-2xl">Envie uma mensagem</CardTitle>
                  <CardDescription>Retornaremos o seu contato o mais breve possível.</CardDescription>
                </CardHeader>
                <CardContent>
                  {submitContact.isSuccess ? (
                    <div className="text-center py-12">
                      <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full inline-block mb-4">
                        <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-500" />
                      </div>
                      <h3 className="text-2xl font-display font-bold mb-2">Mensagem enviada!</h3>
                      <p className="text-muted-foreground">
                        Agradecemos o contato. Nossa equipe responderá em breve.
                      </p>
                      <Button 
                        variant="outline" 
                        className="mt-8"
                        onClick={() => {
                          submitContact.reset();
                          form.reset();
                        }}
                      >
                        Enviar nova mensagem
                      </Button>
                    </div>
                  ) : (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nome Completo *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Seu nome" {...field} data-testid="input-contact-name" />
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
                                <FormLabel>E-mail *</FormLabel>
                                <FormControl>
                                  <Input placeholder="seu@email.com" type="email" {...field} data-testid="input-contact-email" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>WhatsApp (Opcional)</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="(00) 00000-0000" 
                                    {...field} 
                                    onChange={(e) => field.onChange(maskPhone(e.target.value))}
                                    maxLength={15}
                                    data-testid="input-contact-phone" 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Assunto *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger data-testid="select-contact-subject">
                                      <SelectValue placeholder="Selecione um assunto" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="Simulação de empréstimo">Simulação de empréstimo</SelectItem>
                                    <SelectItem value="Dúvida">Dúvida</SelectItem>
                                    <SelectItem value="Reclamação">Reclamação</SelectItem>
                                    <SelectItem value="Outro">Outro</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Mensagem *</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Como podemos ajudar?" 
                                  className="min-h-[120px] resize-y" 
                                  {...field} 
                                  data-testid="textarea-contact-message" 
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
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                  data-testid="checkbox-contact-lgpd"
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="text-sm font-normal text-muted-foreground cursor-pointer">
                                  Concordo com a{" "}
                                  <Link href="/politica-de-privacidade" className="text-primary hover:underline" target="_blank">
                                    Política de Privacidade
                                  </Link>
                                </FormLabel>
                                <FormMessage />
                              </div>
                            </FormItem>
                          )}
                        />

                        <Button 
                          type="submit" 
                          className="w-full md:w-auto px-8" 
                          disabled={submitContact.isPending}
                          data-testid="button-submit-contact"
                        >
                          {submitContact.isPending ? "Enviando..." : "Enviar mensagem"}
                        </Button>
                      </form>
                    </Form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
