import { motion } from "framer-motion";
import womanImage from "@/assets/executive-woman-5.jpg";


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
        <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-8 text-center text-section-dark-foreground">
          O PresenteMente{" "}
          <span className="gold-gradient-text">faz sentido para você?</span>
        </h2>
      </motion.div>

      <motion.div
        className="mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9 }}
      >
        <div className="relative">
          <div className="absolute -inset-3 border border-gold/40 rounded-sm -translate-x-4 translate-y-4" />
          <div className="relative overflow-hidden rounded-sm shadow-2xl">
            <img
              src={womanImage}
              alt="Mulher executiva empoderada representando liderança e autoridade"
              className="w-full h-auto object-cover aspect-[4/3]"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>

      <motion.p className="text-section-dark-foreground/70 text-lg leading-relaxed mb-10 text-center font-body font-light" {...fadeIn}>
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
        <p className="text-lg text-section-dark-foreground/80 font-body font-light italic">
          Não é para quem busca motivação superficial.<br />
          <span className="text-section-dark-foreground font-medium">É para quem busca transformação real na forma de liderar, decidir e sustentar sua própria vida.</span>
        </p>
      </motion.div>
    </div>
  </section>
);

export default FitSection;
