import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 },
};

const items = [
  "ocupa cargo de liderança ou está em ascensão",
  "empreende ou lidera equipes, áreas e decisões",
  "vive sob alta pressão e cobrança",
  "já conquistou reconhecimento externo, mas quer mais consistência interna",
  "deseja crescer com mais clareza e menos desgaste",
  "quer ser respeitada sem continuar se desgastando para provar valor",
  "busca uma mentoria profunda, prática e sofisticada",
];

const FitSection = () => (
  <section className="section-dark py-24 md:py-32">
    <div className="container max-w-3xl mx-auto px-6">
      <motion.div {...fadeIn}>
        <div className="divider-gold mb-10" />
        <h2 className="font-display text-5xl md:text-6xl font-medium leading-tight mb-8 text-center text-section-dark-foreground">
          O PresenteMente{" "}
          <span className="gold-gradient-text">faz sentido para você?</span>
        </h2>
      </motion.div>

      <motion.p className="text-section-dark-foreground/70 text-xl leading-relaxed mb-10 text-center font-body font-light" {...fadeIn}>
        Essa mentoria foi criada para mulheres que já têm trajetória, responsabilidade e alto nível de exigência — mas que perceberam que continuar crescendo do mesmo jeito pode custar caro demais.
      </motion.p>

      <motion.p className="text-section-dark-foreground text-lg text-center mb-6 font-body font-medium" {...fadeIn}>
        O PresenteMente é para você que:
      </motion.p>

      <div className="space-y-3 mb-12">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-4 px-6 py-4 border border-gold/15 rounded-sm"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
            <span className="text-section-dark-foreground/80 font-body">{item}</span>
          </motion.div>
        ))}
      </div>

      <motion.div className="text-center border-t border-section-dark-foreground/10 pt-10" {...fadeIn}>
        <p className="text-xl text-section-dark-foreground/80 font-body font-light italic">
          Não é para quem busca motivação superficial.<br />
          <span className="text-section-dark-foreground font-medium">É para quem busca transformação real na forma de liderar, decidir e sustentar sua própria vida.</span>
        </p>
      </motion.div>
    </div>
  </section>
);

export default FitSection;
