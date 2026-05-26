import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 },
};

const pillars = [
  "profundidade emocional",
  "leitura estratégica",
  "clareza sobre padrões invisíveis",
  "aplicação prática na vida real de quem lidera",
];

const DifferentialSection = () => (
  <section className="section-cream py-24 md:py-32">
    <div className="container max-w-3xl mx-auto px-6">
      <motion.div {...fadeIn}>
        <div className="divider-gold mb-10" />
        <h2 className="font-display text-5xl md:text-6xl font-medium leading-tight mb-8 text-center">
          Por que o PresenteMente{" "}
          <span className="gold-text italic">não é "mais uma mentoria"</span>
        </h2>
      </motion.div>

      <motion.p className="text-muted-foreground text-xl leading-relaxed mb-8 text-center font-body font-light" {...fadeIn}>
        Muitas mulheres executivas já passaram por terapia, coaching, cursos e processos de desenvolvimento — e ainda assim sentem que algo continua faltando.
      </motion.p>

      <motion.p className="text-foreground text-xl text-center mb-8 font-body" {...fadeIn}>
        O diferencial do PresenteMente está na integração entre:
      </motion.p>

      <div className="grid grid-cols-2 gap-4 mb-12">
        {pillars.map((item, i) => (
          <motion.div
            key={i}
            className="p-6 border border-gold/25 rounded-sm text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <span className="font-body text-foreground font-medium">{item}</span>
          </motion.div>
        ))}
      </div>

      <motion.div {...fadeIn} className="space-y-4 mb-10">
        <p className="text-muted-foreground text-xl text-center font-body font-light">
          Edgard Gonçalves conduz essa mentoria a partir de uma visão que une escuta qualificada, firmeza, percepção emocional e direcionamento objetivo.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-base text-muted-foreground font-body">
          <span className="px-4 py-2 border border-border rounded-sm">Não é um processo genérico</span>
          <span className="px-4 py-2 border border-border rounded-sm">Não é conteúdo motivacional</span>
          <span className="px-4 py-2 border border-border rounded-sm">Não é acolhimento sem direção</span>
        </div>
      </motion.div>

      <motion.p className="text-center text-xl font-display italic text-foreground" {...fadeIn}>
        É uma mentoria para mulheres que precisam de{" "}
        <span className="gold-text">profundidade com clareza</span>, e não de mais ruído.
      </motion.p>
    </div>
  </section>
);

export default DifferentialSection;
