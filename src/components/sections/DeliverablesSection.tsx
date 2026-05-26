import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 },
};

const deliverables = [
  "Acompanhamento estratégico com Edgard Gonçalves",
  "Um processo voltado à sua realidade de liderança e alta exigência",
  "Espaço seguro para aprofundar questões que impactam sua performance, sua clareza e sua autoridade",
  "Direcionamentos práticos para lidar com pressão, sobrecarga e tomada de decisão",
  "Uma condução que integra profundidade emocional com aplicação estratégica",
  "Uma experiência voltada a crescimento sustentável, e não apenas alívio momentâneo",
];

const DeliverablesSection = () => (
  <section className="section-light py-24 md:py-32">
    <div className="container max-w-3xl mx-auto px-6">
      <motion.div {...fadeIn}>
        <div className="divider-gold mb-10" />
        <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-8 text-center">
          O que você recebe{" "}
          <span className="gold-text italic">no PresenteMente</span>
        </h2>
      </motion.div>

      <motion.p className="text-muted-foreground text-xl text-center mb-12 font-body font-light" {...fadeIn}>
        Ao entrar no PresenteMente, você terá acesso a uma experiência de acompanhamento premium pensada para gerar profundidade, clareza e aplicação real.
      </motion.p>

      <div className="space-y-6">
        {deliverables.map((item, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-5 p-6 border-l-2 border-gold/40"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <span className="gold-gradient-text font-display text-2xl font-bold opacity-50">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-foreground font-body leading-relaxed">{item}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DeliverablesSection;
