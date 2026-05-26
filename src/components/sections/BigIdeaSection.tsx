import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 },
};

const costs = [
  "exaustão silenciosa",
  "perda de clareza",
  "decisões tomadas no cansaço",
  "endurecimento emocional",
  "uma sensação constante de estar devendo mais",
];

const BigIdeaSection = () => (
  <section className="section-dark py-24 md:py-32">
    <div className="container max-w-3xl mx-auto px-6">
      <motion.div {...fadeIn}>
        <div className="divider-gold mb-10" />
        <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight mb-8 text-center text-section-dark-foreground">
          Você não precisa trabalhar mais para crescer.{" "}
          <span className="gold-gradient-text">Você precisa operar em outro nível.</span>
        </h2>
      </motion.div>

      <motion.p className="text-section-dark-foreground/70 text-lg leading-relaxed mb-6 text-center font-body font-light" {...fadeIn}>
        A maior parte das mulheres em posição de liderança foi treinada para acreditar que crescer exige suportar mais pressão, carregar mais peso, aguentar mais tensão e se cobrar mais do que todo mundo.
      </motion.p>

      <motion.p className="text-gold text-lg text-center font-display italic mb-8" {...fadeIn}>
        Mas essa lógica cobra um preço alto.
      </motion.p>

      <motion.p className="text-section-dark-foreground/60 text-lg text-center mb-6 font-body" {...fadeIn}>
        Ela até produz resultado por um tempo. Só que também produz:
      </motion.p>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {costs.map((cost, i) => (
          <motion.span
            key={i}
            className="px-5 py-2.5 border border-gold/30 text-section-dark-foreground/80 rounded-sm text-base font-body tracking-wide"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            {cost}
          </motion.span>
        ))}
      </div>

      <motion.div className="text-center border-t border-section-dark-foreground/10 pt-10" {...fadeIn}>
        <p className="text-lg text-section-dark-foreground/80 font-body font-light leading-relaxed">
          O PresenteMente nasce a partir de uma nova lógica:{" "}
          <span className="text-section-dark-foreground font-medium">
            crescer com clareza, equilíbrio emocional e autoridade, sem continuar vivendo em guerra interna para sustentar o sucesso externo.
          </span>
        </p>
      </motion.div>
    </div>
  </section>
);

export default BigIdeaSection;
