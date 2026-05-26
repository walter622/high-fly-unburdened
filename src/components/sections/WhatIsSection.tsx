import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 },
};

const focuses = ["pensa", "decide", "lidera", "sustenta autoridade", "organiza sua energia", "cresce sem continuar sendo consumida pela pressão, pela sobrecarga e pela autocobrança"];

const WhatIsSection = () => (
  <section className="section-light py-24 md:py-32">
    <div className="container max-w-3xl mx-auto px-6">
      <motion.div {...fadeIn}>
        <div className="divider-gold mb-10" />
        <h2 className="font-display text-5xl md:text-6xl font-medium leading-tight mb-8 text-center">
          O PresenteMente é a mentoria de{" "}
          <span className="gold-text">Edgard Gonçalves</span>{" "}
          para mulheres executivas que desejam alta performance com equilíbrio
        </h2>
      </motion.div>

      <motion.p className="text-muted-foreground text-xl leading-relaxed mb-6 text-center font-body font-light" {...fadeIn}>
        Mais do que uma mentoria, o PresenteMente é um espaço estratégico de reposicionamento interno para mulheres que lideram, decidem, influenciam e sustentam grandes responsabilidades.
      </motion.p>

      <motion.p className="text-foreground text-xl text-center mb-8 font-body font-medium" {...fadeIn}>
        Aqui, o foco não é apenas "se sentir melhor". O foco é fortalecer a forma como você:
      </motion.p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
        {focuses.map((item, i) => (
          <motion.div
            key={i}
            className={`p-5 border border-border rounded-sm text-center font-body text-foreground ${i === focuses.length - 1 ? "col-span-2 md:col-span-3" : ""}`}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {item}
          </motion.div>
        ))}
      </div>

      <motion.p className="text-center text-xl font-display italic text-foreground" {...fadeIn}>
        É uma experiência premium para mulheres que não querem abrir mão da ambição —{" "}
        <span className="gold-text">mas também não querem mais viver reféns da exaustão.</span>
      </motion.p>
    </div>
  </section>
);

export default WhatIsSection;
