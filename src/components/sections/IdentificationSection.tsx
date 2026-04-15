import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 },
};

const items = [
  "precisa provar competência o tempo todo",
  "sente que ninguém enxerga o peso real que você carrega",
  "conquistou espaço, mas não encontrou leveza",
  "está exausta, mesmo continuando funcional",
  "tem dificuldade de delegar e soltar o controle",
  "vive sob pressão constante e alta cobrança interna",
  "sente que sua vida profissional cresceu mais rápido do que sua vida interna conseguiu acompanhar",
  "quer continuar crescendo, mas sem se perder no processo",
];

const IdentificationSection = () => (
  <section className="section-light py-24 md:py-32">
    <div className="container max-w-3xl mx-auto px-6">
      <motion.div {...fadeIn}>
        <div className="divider-gold mb-10" />
        <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight mb-8 text-center">
          Se por fora você sustenta resultados, mas por dentro sente o peso de carregar tudo…{" "}
          <span className="gold-text italic">essa mentoria é para você</span>
        </h2>
      </motion.div>

      <motion.p className="text-muted-foreground text-lg leading-relaxed mb-6 text-center font-body font-light" {...fadeIn}>
        O PresenteMente foi desenhado para mulheres que ocupam posições de liderança, influência e responsabilidade — e que, mesmo sendo admiradas, competentes e bem-sucedidas, sentem que estão vivendo no limite.
      </motion.p>

      <motion.p className="text-muted-foreground text-lg mb-8 text-center font-body" {...fadeIn}>
        Talvez você esteja vivendo uma ou mais destas situações:
      </motion.p>

      <div className="space-y-4 mb-12">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-4 px-6 py-4 rounded-sm bg-card border border-border/50"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <span className="mt-1 w-2 h-2 rounded-full bg-gold flex-shrink-0" />
            <span className="text-foreground font-body">{item}</span>
          </motion.div>
        ))}
      </div>

      <motion.div className="text-center border-t border-border pt-10" {...fadeIn}>
        <p className="text-lg font-display italic text-foreground leading-relaxed">
          O problema não é falta de capacidade.<br />
          <span className="gold-text">O problema é sustentar alta performance por tempo demais sem reorganizar a forma como você opera por dentro.</span>
        </p>
      </motion.div>
    </div>
  </section>
);

export default IdentificationSection;
