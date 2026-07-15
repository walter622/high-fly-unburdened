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
    <section id="candidatura" className="section-light py-24 md:py-32">
      <div className="container max-w-2xl mx-auto px-6">
        <motion.div {...fadeIn} className="text-center mb-12">
          <div className="divider-gold mb-8" />
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-4">
            Candidate-se para o <span className="gold-gradient-text italic">PresenteMente</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Preencha os campos abaixo. Nossa equipe entrará em contato para avaliar seu perfil.
          </p>
        </motion.div>

        <motion.form
          {...fadeIn}
          onSubmit={onSubmit}
          className="bg-card border border-border rounded-sm p-8 md:p-10 shadow-sm space-y-6"
        >
          <div>
            <label htmlFor="nome" className="block text-sm font-body font-medium mb-2 tracking-wide">
              Nome completo *
            </label>
            <input
              id="nome"
              type="text"
              required
              maxLength={200}
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className="w-full px-4 py-3 bg-background border border-input rounded-sm font-body focus:outline-none focus:ring-2 focus:ring-ring transition"
              placeholder="Seu nome"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="telefone" className="block text-sm font-body font-medium mb-2 tracking-wide">
                Telefone *
              </label>
              <input
                id="telefone"
                type="tel"
                required
                maxLength={50}
                value={form.telefone}
                onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-input rounded-sm font-body focus:outline-none focus:ring-2 focus:ring-ring transition"
                placeholder="(11) 99999-9999"
              />
            </div>
            <div>
              <label htmlFor="whatsapp" className="block text-sm font-body font-medium mb-2 tracking-wide">
                WhatsApp
              </label>
              <input
                id="whatsapp"
                type="tel"
                maxLength={50}
                value={form.whatsapp}
                onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-input rounded-sm font-body focus:outline-none focus:ring-2 focus:ring-ring transition"
                placeholder="(11) 99999-9999"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-body font-medium mb-3 tracking-wide">
              Você está vivendo alguma destas situações? *
            </label>
            <div className="grid md:grid-cols-2 gap-2">
              {SITUACOES.map((s) => (
                <label
                  key={s}
                  className={`flex items-center gap-3 px-4 py-3 border rounded-sm cursor-pointer transition font-body text-sm ${
                    form.situacao === s
                      ? "border-primary bg-primary/5"
                      : "border-input hover:border-primary/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="situacao"
                    value={s}
                    checked={form.situacao === s}
                    onChange={() => setForm({ ...form, situacao: s })}
                    className="accent-primary"
                  />
                  <span>{s}</span>
                </label>
              ))}
            </div>
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
