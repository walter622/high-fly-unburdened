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
  telefone: z.string().trim().min(8, "Informe um telefone válido").max(50),
  whatsapp: z.string().trim().max(50).optional().or(z.literal("")),
  situacao: z.string().min(1, "Selecione uma opção"),
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
  const [form, setForm] = useState({ nome: "", telefone: "", whatsapp: "", situacao: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

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
      const { error } = await supabase.functions.invoke("submit-lead", { body: parsed.data });
      if (error) throw error;
      setSent(true);
      setForm({ nome: "", telefone: "", whatsapp: "", situacao: "" });
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

        <motion.form
          {...fadeIn}
          onSubmit={onSubmit}
          className="space-y-6"
        >
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
            <label htmlFor="telefone" className={labelClass}>Telefone</label>
            <input
              id="telefone"
              type="tel"
              required
              maxLength={50}
              value={form.telefone}
              onChange={(e) => setForm({ ...form, telefone: e.target.value })}
              className={inputClass}
              placeholder="(00) 00000-0000"
            />
          </div>

          <div>
            <label htmlFor="whatsapp" className={labelClass}>WhatsApp</label>
            <input
              id="whatsapp"
              type="tel"
              maxLength={50}
              value={form.whatsapp}
              onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
              className={inputClass}
              placeholder="(00) 00000-0000"
            />
          </div>

          <div>
            <label htmlFor="situacao" className={labelClass}>
              Você está vivendo alguma destas situações?
            </label>
            <select
              id="situacao"
              required
              value={form.situacao}
              onChange={(e) => setForm({ ...form, situacao: e.target.value })}
              className={`${inputClass} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 stroke=%22white%22 stroke-width=%222%22 viewBox=%220 0 24 24%22><path stroke-linecap=%22round%22 stroke-linejoin=%22round%22 d=%22M19 9l-7 7-7-7%22/></svg>')] bg-no-repeat bg-[right_1rem_center] bg-[length:1rem] pr-10`}
            >
              <option value="" disabled className="bg-hero-bg text-section-dark-foreground/60">
                Selecione
              </option>
              {SITUACOES.map((s) => (
                <option key={s} value={s} className="bg-hero-bg text-section-dark-foreground">
                  {s}
                </option>
              ))}
            </select>
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
