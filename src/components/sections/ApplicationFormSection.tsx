import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const SITUACOES = [
  "Excesso de trabalho",
  "Ansiedade",
  "Estresse constante",
  "Burnout",
  "Falta de propósito",
  "Dificuldade de equilibrar vida pessoal e profissional",
  "Conflitos de relacionamento",
  "Transição de carreira",
  "Falta de clareza sobre o futuro",
  "Solidão da liderança",
  "Excesso de responsabilidade",
  "Autocobrança",
  "Síndrome da impostora",
];

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(200),
  email: z.string().trim().email("Informe um e-mail válido").max(255),
  whatsapp: z.string().trim().min(8, "Informe um WhatsApp válido").max(50),
  situacoes: z.array(z.string()).min(1, "Selecione ao menos uma opção"),
});

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 },
};

const inputClass =
  "w-full px-4 py-3 bg-hero-bg/60 border border-white/15 rounded-md font-body text-section-dark-foreground placeholder:text-section-dark-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition";

const labelClass =
  "block text-sm font-body font-medium mb-2 text-section-dark-foreground tracking-wide";

const ApplicationFormSection = () => {
  const [form, setForm] = useState<{
    nome: string;
    email: string;
    whatsapp: string;
    situacoes: string[];
  }>({ nome: "", email: "", whatsapp: "", situacoes: [] });
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const toggleSituacao = (s: string) => {
    setForm((f) => ({
      ...f,
      situacoes: f.situacoes.includes(s)
        ? f.situacoes.filter((x) => x !== s)
        : [...f.situacoes, s],
    }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast({
        title: "Verifique o formulário",
        description: parsed.error.issues[0]?.message ?? "Dados inválidos",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.functions.invoke("submit-lead", {
        body: {
          ...parsed.data,
          situacao: parsed.data.situacoes.join(", "),
        },
      });
      if (error) throw error;
      setSent(true);
      setForm({ nome: "", email: "", whatsapp: "", situacoes: [] });
      toast({ title: "Candidatura enviada", description: "Em breve entraremos em contato." });
    } catch (err) {
      console.error(err);
      toast({
        title: "Não foi possível enviar",
        description: "Tente novamente em instantes.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const selectedLabel =
    form.situacoes.length === 0
      ? "Selecione"
      : form.situacoes.length === 1
      ? form.situacoes[0]
      : `${form.situacoes.length} opções selecionadas`;

  return (
    <section id="candidatura" className="section-dark py-24 md:py-32">
      <div className="container max-w-xl mx-auto px-6">
        <motion.div {...fadeIn} className="text-center mb-12">
          <div className="divider-gold mb-8" />
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-4 text-section-dark-foreground">
            Candidate-se para o <span className="gold-gradient-text italic">PresenteMente</span>
          </h2>
          <p className="text-section-dark-foreground/70 font-body text-lg">
            Preencha os campos abaixo. Nossa equipe entrará em contato para avaliar seu perfil.
          </p>
        </motion.div>

        <motion.form {...fadeIn} onSubmit={onSubmit} className="space-y-6">
          <div>
            <label htmlFor="nome" className={labelClass}>Nome</label>
            <input
              id="nome"
              type="text"
              required
              maxLength={200}
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className={inputClass}
              placeholder="Seu nome completo"
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>E-mail</label>
            <input
              id="email"
              type="email"
              required
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClass}
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label htmlFor="whatsapp" className={labelClass}>WhatsApp</label>
            <input
              id="whatsapp"
              type="tel"
              required
              maxLength={50}
              value={form.whatsapp}
              onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
              className={inputClass}
              placeholder="(00) 00000-0000"
            />
          </div>

          <div>
            <label className={labelClass}>
              Você está vivendo alguma destas situações? <span className="text-section-dark-foreground/50">(selecione uma ou mais)</span>
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                className={`${inputClass} text-left flex items-center justify-between`}
              >
                <span className={form.situacoes.length === 0 ? "text-section-dark-foreground/40" : ""}>
                  {selectedLabel}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className={`w-4 h-4 ml-2 transition-transform ${open ? "rotate-180" : ""}`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {open && (
                <div className="absolute z-20 mt-2 w-full max-h-72 overflow-y-auto rounded-md border border-white/15 bg-hero-bg shadow-xl">
                  {SITUACOES.map((s) => {
                    const checked = form.situacoes.includes(s);
                    return (
                      <label
                        key={s}
                        className="flex items-center gap-3 px-4 py-2.5 cursor-pointer hover:bg-white/5 text-section-dark-foreground font-body text-sm"
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleSituacao(s)}
                          className="w-4 h-4 accent-primary"
                        />
                        <span>{s}</span>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>

            {form.situacoes.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {form.situacoes.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-xs text-section-dark-foreground"
                  >
                    {s}
                    <button
                      type="button"
                      onClick={() => toggleSituacao(s)}
                      className="text-section-dark-foreground/70 hover:text-section-dark-foreground"
                      aria-label={`Remover ${s}`}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="pt-4 text-center">
            <button
              type="submit"
              disabled={loading || sent}
              className="cta-button rounded-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sent ? "Candidatura enviada ✓" : loading ? "Enviando..." : "Enviar candidatura"}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ApplicationFormSection;
