import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 },
};

const more = [
  "mais clareza emocional para decisões estratégicas",
  "mais segurança interna para liderar sem precisar provar valor o tempo todo",
  "mais equilíbrio entre resultado, presença e energia",
  "mais consciência sobre padrões invisíveis que geram sobrecarga",
  "mais autoridade com autenticidade",
];

const less = [
  "menos reatividade emocional diante da pressão",
  "menos culpa por não conseguir sustentar tudo sozinha",
  "menos exaustão silenciosa travestida de ambição",
];

const TransformationSection = () => (
  <section className="section-cream py-24 md:py-32">
    <div className="container max-w-3xl mx-auto px-6">
      <motion.div {...fadeIn}>
        <div className="divider-gold mb-10" />
        <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight mb-8 text-center">
          O que muda quando você para de liderar no limite e{" "}
          <span className="gold-text italic">começa a operar com clareza</span>
        </h2>
      </motion.div>

      <motion.p className="text-muted-foreground text-xl text-center mb-10 font-body font-light" {...fadeIn}>
        Ao entrar no PresenteMente, a transformação buscada é que você desenvolva:
      </motion.p>

      <div className="space-y-3 mb-8">
        {more.map((item, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-4 px-5 py-3"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <span className="text-gold text-lg mt-0.5">+</span>
            <span className="text-foreground font-body">{item}</span>
          </motion.div>
        ))}
      </div>

      <div className="space-y-3 mb-8">
        {less.map((item, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-4 px-5 py-3"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (more.length + i) * 0.08 }}
          >
            <span className="text-gold text-lg mt-0.5">−</span>
            <span className="text-foreground font-body">{item}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="flex items-start gap-4 px-5 py-3"
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.7 }}
      >
        <span className="text-gold text-lg mt-0.5">+</span>
        <span className="text-foreground font-body">mais leveza para continuar crescendo sem se romper por dentro</span>
      </motion.div>

      <motion.div className="text-center mt-12 border-t border-border pt-10" {...fadeIn}>
        <p className="text-lg font-display italic text-foreground">
          Você continua forte.<br />
          <span className="gold-text">Mas não precisa continuar endurecida.</span>
        </p>
      </motion.div>
    </div>
  </section>
);

export default TransformationSection;
