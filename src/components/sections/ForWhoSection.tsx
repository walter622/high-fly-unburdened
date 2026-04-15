import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 },
};

const forItems = [
  "mulheres executivas",
  "líderes, diretoras, gerentes seniores, C-levels e empreendedoras",
  "mulheres em ascensão que vivem alta cobrança",
  "mulheres que desejam crescer sem continuar se esgotando",
  "quem busca profundidade, estratégia e transformação real",
  "quem valoriza acompanhamento premium e direcionamento claro",
];

const notForItems = [
  "quem busca solução mágica",
  "quem procura apenas motivação passageira",
  "quem não está disposta a olhar com honestidade para os próprios padrões",
  "quem quer atalhos superficiais",
  "quem não valoriza profundidade, aplicação e processo",
];

const ForWhoSection = () => (
  <section className="section-light py-24 md:py-32">
    <div className="container max-w-5xl mx-auto px-6">
      <motion.div {...fadeIn}>
        <div className="divider-gold mb-10" />
        <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight mb-16 text-center">
          Para quem o PresenteMente é —{" "}
          <span className="gold-text italic">e para quem não é</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display text-xl gold-text mb-6 flex items-center gap-2">
            <span className="text-2xl">✦</span> É para:
          </h3>
          <div className="space-y-4">
            {forItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3 pl-2">
                <span className="text-gold mt-1.5 text-xs">●</span>
                <span className="text-foreground font-body">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display text-xl text-muted-foreground mb-6 flex items-center gap-2">
            <span className="text-2xl">—</span> Não é para:
          </h3>
          <div className="space-y-4">
            {notForItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3 pl-2">
                <span className="text-muted-foreground/50 mt-1.5 text-xs">●</span>
                <span className="text-muted-foreground font-body">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ForWhoSection;
