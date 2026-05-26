import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 },
};

const AuthoritySection = () => (
  <section className="section-dark py-24 md:py-32">
    <div className="container max-w-3xl mx-auto px-6">
      <motion.div {...fadeIn}>
        <div className="divider-gold mb-10" />
        <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-8 text-center text-section-dark-foreground">
          Uma condução estratégica para mulheres que não querem mais viver sob o peso da{" "}
          <span className="gold-gradient-text">exaustão silenciosa</span>
        </h2>
      </motion.div>

      <motion.p className="text-section-dark-foreground/70 text-lg leading-relaxed mb-8 text-center font-body font-light" {...fadeIn}>
        O PresenteMente nasce da experiência de Edgard Gonçalves no trabalho com desenvolvimento humano, clareza emocional e aplicação prática para contextos de alta responsabilidade.
      </motion.p>

      <motion.div className="mb-12" {...fadeIn}>
        <p className="text-section-dark-foreground/80 text-lg text-center font-body mb-6">
          Seu olhar é direcionado para mulheres que:
        </p>
        <div className="space-y-4 max-w-xl mx-auto">
          {[
            "sustentam muito por fora, mas estão emocionalmente pressionadas por dentro",
            "têm resultados, mas sentem que a forma de chegar lá não pode continuar sendo a mesma",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 px-4">
              <span className="text-gold mt-1">✦</span>
              <span className="text-section-dark-foreground/70 font-body font-light">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Social proof placeholder */}
      <motion.div
        className="p-8 border border-gold/20 rounded-sm text-center mb-12"
        {...fadeIn}
      >
        <p className="text-section-dark-foreground/40 font-body text-base uppercase tracking-widest">
          Depoimentos e provas sociais em breve
        </p>
      </motion.div>

      <motion.p className="text-center text-xl font-display italic text-section-dark-foreground" {...fadeIn}>
        Quando a mulher certa encontra a condução certa, ela não apenas melhora.{" "}
        <span className="gold-text">Ela muda o jeito de liderar a própria vida.</span>
      </motion.p>
    </div>
  </section>
);

export default AuthoritySection;
