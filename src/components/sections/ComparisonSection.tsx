import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 },
};

const withItems = [
  "decisões com mais clareza e menos ruído interno",
  "liderança com mais presença e menos desgaste",
  "mais segurança emocional diante da pressão",
  "mais consciência sobre padrões que sabotam sua energia",
  "crescimento com mais equilíbrio e sustentabilidade",
  "autoridade sem máscara corporativa",
  "menos sobrecarga invisível",
  "mais leveza para continuar performando",
];

const withoutItems = [
  "continuar liderando no limite",
  "manter decisões atravessadas por cansaço e tensão",
  "seguir carregando tudo sozinha",
  "continuar confundindo força com endurecimento",
  "perpetuar autocobrança crônica",
  "viver sob pressão constante sem reorganização interna",
  "crescer externamente enquanto se esgota por dentro",
  "adiar uma mudança que já se tornou necessária",
];

const ComparisonSection = () => (
  <section className="section-light py-24 md:py-32">
    <div className="container max-w-5xl mx-auto px-6">
      <motion.div {...fadeIn}>
        <div className="divider-gold mb-10" />
        <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight mb-16 text-center">
          O custo de continuar no automático{" "}
          <span className="gold-text italic">é alto demais</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <motion.div
          className="p-8 border border-gold/30 rounded-sm bg-card"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display text-xl gold-text mb-6 text-center">Com o PresenteMente</h3>
          <div className="space-y-4">
            {withItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-gold mt-1 text-sm">✦</span>
                <span className="text-foreground font-body text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="p-8 border border-border rounded-sm"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display text-xl text-muted-foreground mb-6 text-center">Sem o PresenteMente</h3>
          <div className="space-y-4">
            {withoutItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1 text-sm">—</span>
                <span className="text-muted-foreground font-body text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ComparisonSection;
