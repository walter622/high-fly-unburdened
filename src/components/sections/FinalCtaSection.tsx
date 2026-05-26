import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 },
};

const FinalCtaSection = () => (
  <section className="section-dark py-24 md:py-32">
    <div className="container max-w-3xl mx-auto px-6 text-center">
      <motion.div {...fadeIn}>
        <div className="divider-gold mb-10" />
        <h2 className="font-display text-5xl md:text-7xl font-medium leading-tight mb-10 text-section-dark-foreground">
          Chegou a hora de crescer{" "}
          <span className="gold-gradient-text italic">sem se perder no processo</span>
        </h2>
      </motion.div>

      <motion.div className="space-y-4 mb-12 text-section-dark-foreground/80 text-xl font-body font-light leading-relaxed" {...fadeIn}>
        <p>Você não precisa abrir mão da sua ambição.</p>
        <p>Não precisa diminuir sua potência.</p>
        <p>Não precisa escolher entre autoridade e equilíbrio.</p>
        <p className="text-section-dark-foreground font-medium mt-6">
          O que talvez precise mudar não é o tamanho do seu sonho — mas a forma como você vem sustentando tudo até aqui.
        </p>
        <p className="mt-4">
          O PresenteMente foi criado para mulheres que desejam continuar crescendo com clareza, presença, força e equilíbrio.
        </p>
      </motion.div>

      <motion.div className="mb-8" {...fadeIn}>
        <a href="#candidatura" className="cta-button rounded-sm">
          Quero me candidatar para o PresenteMente
        </a>
      </motion.div>

      <motion.p className="text-section-dark-foreground/40 text-base font-body tracking-wide" {...fadeIn}>
        Mentoria premium com Edgard Gonçalves para mulheres executivas que querem alta performance sem exaustão
      </motion.p>
    </div>
  </section>
);

export default FinalCtaSection;
