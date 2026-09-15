import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const SITUACOES = [
  "ansiedade frequente", "cansaço mental", "sobrecarga", "dificuldade de delegar",
  "autocobrança excessiva", "dificuldade de desligar", "estresse constante",
  "sinais de burnout", "dificuldade de equilibrar carreira e vida pessoal",
];

const DURACOES = ["Menos de 3 meses", "De 3 a 6 meses", "De 6 meses a 1 ano", "De 1 a 2 anos", "Há mais de 2 anos"];

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome completo").max(200),
  email: z.string().trim().email("Informe um e-mail válido").max(255),
  whatsapp: z.string().trim().min(8, "Informe um WhatsApp válido").max(50),
  cidadeEstado: z.string().trim().min(2, "Informe sua cidade e estado").max(150),
  cargo: z.string().trim().min(2, "Informe seu cargo atual").max(150),
  empresaSegmento: z.string().trim().min(2, "Informe sua empresa ou segmento").max(200),
  situacoes: z.array(z.string()).min(1, "Selecione ao menos uma situação"),
  duracao: z.string().min(1, "Informe há quanto tempo"),
  impacto: z.coerce.number().min(0).max(10),
  objetivo: z.string().trim().min(10, "Conte um pouco mais sobre o que gostaria de mudar").max(1500),
});

type FormState = z.infer<typeof schema>;

const initialForm: FormState = {
  nome: "", email: "", whatsapp: "", cidadeEstado: "", cargo: "", empresaSegmento: "",
  situacoes: [], duracao: "", impacto: 5, objetivo: "",
};

const inputClass = "w-full border border-section-dark-foreground/20 bg-section-dark-foreground/5 px-4 py-3.5 font-body text-section-dark-foreground outline-none transition placeholder:text-section-dark-foreground/35 focus:border-primary focus:ring-1 focus:ring-primary";
const labelClass = "mb-2 block font-body text-sm font-medium text-section-dark-foreground";

const ApplicationFormSection = () => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const toggleSituacao = (situacao: string) => setForm((current) => ({
    ...current,
    situacoes: current.situacoes.includes(situacao)
      ? current.situacoes.filter((item) => item !== situacao)
      : [...current.situacoes, situacao],
  }));

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast({ title: "Verifique o formulário", description: parsed.error.issues[0]?.message ?? "Dados inválidos", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.functions.invoke("submit-lead", { body: parsed.data });
      if (error) throw error;
      setSent(true);
      setForm(initialForm);
      toast({ title: "Solicitação enviada", description: "Em breve entraremos em contato." });
    } catch {
      toast({ title: "Não foi possível enviar", description: "Tente novamente em instantes.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="sessao" className="section-dark py-24 md:py-32">
      <div className="container max-w-6xl px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="lg:sticky lg:top-12 lg:self-start">
            <h2 className="text-4xl font-medium leading-[1.08] text-section-dark-foreground md:text-5xl">Para preservar a qualidade das conversas e o acompanhamento individual, as sessões são realizadas mediante aplicação.</h2>
            <p className="mt-7 font-body text-lg text-section-dark-foreground/70">Preencha seus dados abaixo.</p>
          </div>

          <form onSubmit={onSubmit} className="grid gap-6 border border-section-dark-foreground/15 bg-section-dark-foreground/5 p-6 md:grid-cols-2 md:p-10" noValidate>
            <div className="md:col-span-2"><label className={labelClass} htmlFor="nome">Nome completo</label><input id="nome" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} className={inputClass} maxLength={200} /></div>
            <div><label className={labelClass} htmlFor="email">E-mail</label><input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} maxLength={255} /></div>
            <div><label className={labelClass} htmlFor="whatsapp">WhatsApp</label><input id="whatsapp" type="tel" value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} className={inputClass} maxLength={50} /></div>
            <div><label className={labelClass} htmlFor="cidade">Cidade / Estado</label><input id="cidade" value={form.cidadeEstado} onChange={(e) => setForm({ ...form, cidadeEstado: e.target.value })} className={inputClass} maxLength={150} /></div>
            <div><label className={labelClass} htmlFor="cargo">Cargo atual</label><input id="cargo" value={form.cargo} onChange={(e) => setForm({ ...form, cargo: e.target.value })} className={inputClass} maxLength={150} /></div>
            <div className="md:col-span-2"><label className={labelClass} htmlFor="empresa">Empresa / segmento</label><input id="empresa" value={form.empresaSegmento} onChange={(e) => setForm({ ...form, empresaSegmento: e.target.value })} className={inputClass} maxLength={200} /></div>

            <div className="relative md:col-span-2">
              <span className={labelClass}>Qual dessas situações mais representa seu momento atual?</span>
              <Button type="button" variant="outline" onClick={() => setOpen((value) => !value)} aria-expanded={open} className={`${inputClass} h-auto justify-between rounded-none hover:bg-section-dark-foreground/10 hover:text-section-dark-foreground`}>
                <span>{form.situacoes.length ? `${form.situacoes.length} ${form.situacoes.length === 1 ? "situação selecionada" : "situações selecionadas"}` : "Selecione uma ou mais situações"}</span><ChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
              </Button>
              {open && <div className="absolute z-20 mt-1 max-h-72 w-full overflow-y-auto border border-section-dark-foreground/20 bg-secondary p-2 shadow-premium">{SITUACOES.map((situacao) => <label key={situacao} className="flex cursor-pointer items-center gap-3 px-3 py-2.5 font-body text-sm text-section-dark-foreground hover:bg-section-dark-foreground/5"><input type="checkbox" checked={form.situacoes.includes(situacao)} onChange={() => toggleSituacao(situacao)} className="h-4 w-4 accent-primary" />{situacao};</label>)}</div>}
              {form.situacoes.length > 0 && <div className="mt-3 flex flex-wrap gap-2">{form.situacoes.map((situacao) => <span key={situacao} className="inline-flex items-center gap-2 border border-primary/35 bg-primary/10 px-3 py-1.5 font-body text-xs text-section-dark-foreground">{situacao}<button type="button" onClick={() => toggleSituacao(situacao)} aria-label={`Remover ${situacao}`}><X className="h-3 w-3" /></button></span>)}</div>}
            </div>

            <div className="md:col-span-2"><label className={labelClass} htmlFor="duracao">Há quanto tempo você sente que isso está afetando sua vida?</label><select id="duracao" value={form.duracao} onChange={(e) => setForm({ ...form, duracao: e.target.value })} className={inputClass}><option value="">Selecione</option>{DURACOES.map((duracao) => <option key={duracao} value={duracao}>{duracao}</option>)}</select></div>
            <div className="md:col-span-2"><label className={labelClass} htmlFor="impacto">De 0 a 10, quanto essa situação está impactando você atualmente?</label><div className="flex items-center gap-5"><input id="impacto" type="range" min="0" max="10" step="1" value={form.impacto} onChange={(e) => setForm({ ...form, impacto: Number(e.target.value) })} className="w-full accent-primary" /><output htmlFor="impacto" className="grid h-12 w-12 shrink-0 place-items-center border border-primary font-display text-2xl text-primary">{form.impacto}</output></div></div>
            <div className="md:col-span-2"><label className={labelClass} htmlFor="objetivo">O que você gostaria que estivesse diferente na sua vida profissional e pessoal daqui a 6 meses?</label><textarea id="objetivo" rows={5} value={form.objetivo} onChange={(e) => setForm({ ...form, objetivo: e.target.value })} className={`${inputClass} resize-none`} maxLength={1500} /></div>
            <div className="md:col-span-2"><Button type="submit" disabled={loading || sent} className="h-auto min-h-14 w-full rounded-sm px-7 py-4 font-body text-sm font-semibold uppercase tracking-[0.08em] shadow-premium">{sent ? "Solicitação enviada" : loading ? "Enviando..." : "Solicitar minha Sessão Diagnóstica"}</Button></div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplicationFormSection;