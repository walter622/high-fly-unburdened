import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 },
};

const steps = [
  {
    num: "01",
    title: "Clareza",
    text: "Identificar os padrões emocionais, comportamentais e mentais que hoje sustentam sua sobrecarga, sua autocobrança e sua perda de leveza.",
  },
  {
    num: "02",
    title: "Reorganização",
    text: "Reposicionar a forma como você lida com pressão, responsabilidade, limites, controle, exigência e tomada de decisão.",
  },
  {
    num: "03",
    title: "Fortalecimento",
    text: "Desenvolver mais segurança emocional, presença e consistência para liderar sem continuar vivendo no limite.",
  },
  {
    num: "04",
    title: "Sustentação",
    text: "Consolidar uma nova forma de crescer, decidir e ocupar seu espaço com autoridade, autenticidade e equilíbrio.",
  },
];

const MethodologySection = () => (
  <section className="section-dark py-24 md:py-32">
    <div className="container max-w-4xl mx-auto px-6">
      <motion.div {...fadeIn}>
        <div className="divider-gold mb-10" />
        <h2 className="font-display text-5xl md:text-6xl font-medium leading-tight mb-6 text-center text-section-dark-foreground">
          O caminho para crescer{" "}
          <span className="gold-gradient-text">sem se perder no processo</span>
        </h2>
      </motion.div>

      <motion.p className="text-section-dark-foreground/70 text-xl text-center mb-16 font-body font-light" {...fadeIn}>
        O PresenteMente foi pensado para ajudar mulheres executivas a reorganizarem sua forma de operar por dentro, para que consigam sustentar performance, liderança e crescimento com mais clareza, equilíbrio e autoridade.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="p-8 border border-gold/15 rounded-sm relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <span className="gold-gradient-text font-display text-6xl font-bold opacity-40 absolute top-4 right-6">
              {step.num}
            </span>
            <h3 className="font-display text-3xl text-gold mb-3">{step.title}</h3>
            <p className="text-section-dark-foreground/70 font-body font-light text-base leading-relaxed">
              {step.text}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div className="text-center mt-16 border-t border-section-dark-foreground/10 pt-10" {...fadeIn}>
        <p className="text-xl text-section-dark-foreground/80 font-display italic">
          Não se trata de desacelerar sua potência.<br />
          <span className="gold-text">Se trata de sustentar sua potência sem continuar se desgastando para isso.</span>
        </p>
      </motion.div>
    </div>
  </section>
);

export default MethodologySection;
