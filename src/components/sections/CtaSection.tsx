import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 },
};

const CtaSection = () => (
  <section className="section-dark py-24 md:py-32" id="candidatura">
    <div className="container max-w-3xl mx-auto px-6 text-center">
      <motion.div {...fadeIn}>
        <div className="divider-gold mb-10" />
        <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight mb-8 text-section-dark-foreground">
          Se você sente que chegou longe, mas não quer continuar pagando caro demais por isso,{" "}
          <span className="gold-gradient-text">o PresenteMente pode ser seu próximo passo</span>
        </h2>
      </motion.div>

      <motion.p className="text-section-dark-foreground/70 text-lg leading-relaxed mb-6 font-body font-light" {...fadeIn}>
        Existe uma diferença entre continuar funcionando… e realmente sustentar sua liderança com clareza, energia e equilíbrio.
      </motion.p>

      <motion.p className="text-section-dark-foreground/80 text-lg mb-12 font-body" {...fadeIn}>
        O PresenteMente foi criado para mulheres que querem continuar crescendo — mas de um jeito mais consciente, forte e sustentável.
      </motion.p>

      <motion.div {...fadeIn}>
        <a href="#candidatura" className="cta-button rounded-sm">
          Quero me candidatar para o PresenteMente
        </a>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;
