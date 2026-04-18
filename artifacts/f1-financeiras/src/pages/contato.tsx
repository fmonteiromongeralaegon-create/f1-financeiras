import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSubmitContact } from "@workspace/api-client-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { maskPhone } from "@/lib/masks";
import { Link } from "wouter";
import { Mail, MapPin, Phone, CheckCircle2, MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/company";

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
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "", consentLgpd: undefined },
  });

  const onSubmit = (values: z.infer<typeof contactFormSchema>) => {
    submitContact.mutate({
      data: {
        name: values.name,
        email: values.email,
        phone: values.phone ? values.phone.replace(/\D/g, "") : null,
        subject: values.subject,
        message: values.message,
        consentLgpd: values.consentLgpd,
      },
    });
  };

  const contactItems = [
    {
      icon: Phone,
      label: "Telefone / WhatsApp",
      value: COMPANY.phone,
      sub: COMPANY.hours,
    },
    {
      icon: Mail,
      label: "E-mail",
      value: COMPANY.email,
    },
    {
      icon: MapPin,
      label: "Endereço",
      value: `${COMPANY.address.street}\n${COMPANY.address.city}/${COMPANY.address.state}\n${COMPANY.address.zip}`,
    },
  ];

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Page header */}
        <div className="section-alt py-16">
          <div className="container-f1 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[hsl(268,63%,46%)]/10 px-3 py-1.5 text-xs font-medium text-[hsl(268,63%,40%)]">
              Fale conosco
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[hsl(221,72%,14%)] mt-4 mb-4">
              Entre em Contato
            </h1>
            <p className="text-[hsl(221,15%,40%)] text-lg max-w-2xl mx-auto">
              Estamos aqui para ajudar. Preencha o formulário abaixo ou use um de nossos canais diretos.
            </p>
          </div>
        </div>

        {/* Content */}
        <section className="py-16">
          <div className="container-f1 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

              {/* Contact info sidebar */}
              <div className="space-y-6">
                <h3 className="font-display text-lg font-bold text-[hsl(221,72%,14%)]">Canais de atendimento</h3>
                {contactItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-lg brand-gradient-bg-soft flex items-center justify-center shrink-0">
                      <item.icon className="h-4 w-4 text-[hsl(268,63%,46%)]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[hsl(221,72%,14%)]">{item.label}</p>
                      <p className="text-sm text-[hsl(221,15%,40%)] whitespace-pre-line">{item.value}</p>
                      {item.sub && <p className="text-xs text-[hsl(221,15%,55%)] mt-0.5">{item.sub}</p>}
                    </div>
                  </div>
                ))}

                <a
                  href={`https://wa.me/${COMPANY.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 justify-center w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-3 px-5 rounded-lg text-sm transition-colors mt-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  Abrir no WhatsApp
                </a>
              </div>

              {/* Form */}
              <div className="lg:col-span-2">
                <div className="rounded-xl bg-white p-6 sm:p-8 shadow-card">
                  {submitContact.isSuccess ? (
                    <div className="text-center py-10">
                      <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                        <CheckCircle2 className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-[hsl(221,72%,14%)] mb-2">Mensagem enviada!</h3>
                      <p className="text-[hsl(221,15%,40%)] mb-6">Agradecemos o contato. Nossa equipe responderá em breve.</p>
                      <button
                        className="text-sm text-[hsl(268,63%,46%)] hover:underline"
                        onClick={() => { submitContact.reset(); form.reset(); }}
                      >
                        Enviar nova mensagem
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-display text-xl font-bold text-[hsl(221,72%,14%)] mb-1">Envie uma mensagem</h2>
                      <p className="text-sm text-[hsl(221,15%,45%)] mb-6">Retornaremos o seu contato o mais breve possível.</p>
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-sm font-medium text-[hsl(221,72%,14%)]">Nome Completo *</FormLabel>
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
                                  <FormLabel className="text-sm font-medium text-[hsl(221,72%,14%)]">E-mail *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="seu@email.com" type="email" {...field} data-testid="input-contact-email" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-sm font-medium text-[hsl(221,72%,14%)]">WhatsApp (opcional)</FormLabel>
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
                                  <FormLabel className="text-sm font-medium text-[hsl(221,72%,14%)]">Assunto *</FormLabel>
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
                                <FormLabel className="text-sm font-medium text-[hsl(221,72%,14%)]">Mensagem *</FormLabel>
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
                              <FormItem className="flex flex-row items-start gap-3 p-4 rounded-lg bg-[hsl(222,25%,97%)] border border-[hsl(220,20%,91%)]">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                    data-testid="checkbox-contact-lgpd"
                                  />
                                </FormControl>
                                <FormLabel className="text-xs font-normal text-[hsl(221,15%,40%)] cursor-pointer leading-relaxed">
                                  Concordo com a{" "}
                                  <Link href="/politica-de-privacidade" className="text-[hsl(268,63%,46%)] hover:underline">
                                    Política de Privacidade
                                  </Link>{" "}
                                  e autorizo o uso dos meus dados para contato, conforme a LGPD.
                                </FormLabel>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <button
                            type="submit"
                            disabled={submitContact.isPending}
                            className="w-full h-12 font-semibold text-sm text-white rounded-lg bg-[hsl(268,63%,46%)] hover:bg-[hsl(268,63%,40%)] transition-colors disabled:opacity-60"
                            data-testid="button-submit-contact"
                          >
                            {submitContact.isPending ? "Enviando..." : "Enviar mensagem"}
                          </button>
                        </form>
                      </Form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
