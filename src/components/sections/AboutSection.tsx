import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 },
};

const traits = ["clareza", "firmeza", "profundidade", "segurança", "olhar estratégico para quem precisa crescer sem se perder no processo"];

const AboutSection = () => (
  <section className="section-cream py-24 md:py-32">
    <div className="container max-w-3xl mx-auto px-6">
      <motion.div {...fadeIn}>
        <div className="divider-gold mb-10" />
        <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight mb-8 text-center">
          Quem é{" "}
          <span className="gold-text">Edgard Gonçalves</span>
        </h2>
      </motion.div>

      <motion.p className="text-muted-foreground text-lg leading-relaxed mb-6 text-center font-body font-light" {...fadeIn}>
        Edgard Gonçalves é o criador do PresenteMente e conduz um trabalho voltado a mulheres executivas que desejam sustentar alta performance com equilíbrio emocional, clareza e autoridade.
      </motion.p>

      <motion.p className="text-muted-foreground text-lg leading-relaxed mb-10 text-center font-body font-light" {...fadeIn}>
        Sua atuação integra profundidade psicológica com visão prática de liderança, ajudando mulheres em posição de responsabilidade a identificarem padrões invisíveis, reorganizarem sua forma de decidir e fortalecerem a própria presença sem viverem reféns da pressão e da sobrecarga.
      </motion.p>

      <motion.div {...fadeIn}>
        <p className="text-foreground text-lg text-center mb-6 font-body font-medium">Sua condução é marcada por:</p>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {traits.map((trait, i) => (
            <span
              key={i}
              className="px-5 py-2.5 border border-gold/30 rounded-sm text-foreground font-body text-sm"
            >
              {trait}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Credentials placeholder */}
      <motion.div
        className="p-8 border border-border rounded-sm text-center"
        {...fadeIn}
      >
        <p className="text-muted-foreground/50 font-body text-sm uppercase tracking-widest">
          Credenciais, formação e especializações em breve
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
