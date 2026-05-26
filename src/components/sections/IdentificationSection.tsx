import { motion } from "framer-motion";
import executiveImage from "@/assets/executive-woman-2.png";

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
    <div className="container max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Image column - sticky */}
        <motion.div
          className="lg:col-span-5 lg:sticky lg:top-24"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
        >
          <div className="relative">
            <div className="absolute -inset-3 border border-gold/40 rounded-sm -translate-x-4 -translate-y-4" />
            <div className="relative overflow-hidden rounded-sm shadow-xl">
              <img
                src={executiveImage}
                alt="Executiva conduzindo reunião estratégica em ambiente corporativo de alto nível"
                className="w-full h-auto object-cover aspect-[4/5] grayscale-[10%]"
                loading="lazy"
              />
            </div>
            <div className="mt-6 pl-1">
              <div className="divider-gold-left mb-3" />
              <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground font-body">
                Liderança · Responsabilidade · Pressão constante
              </p>
            </div>
          </div>
        </motion.div>

        {/* Copy column */}
        <div className="lg:col-span-7">
          <motion.div {...fadeIn}>
            <div className="divider-gold-left mb-8" />
            <h2 className="font-display text-5xl md:text-6xl font-medium leading-tight mb-8">
              Se por fora você sustenta resultados, mas por dentro sente o peso de carregar tudo…{" "}
              <span className="gold-text italic">essa mentoria é para você</span>
            </h2>
          </motion.div>

          <motion.p className="text-muted-foreground text-xl leading-relaxed mb-6 font-body font-light" {...fadeIn}>
            O PresenteMente foi desenhado para mulheres que ocupam posições de liderança, influência e responsabilidade — e que, mesmo sendo admiradas, competentes e bem-sucedidas, sentem que estão vivendo no limite.
          </motion.p>

          <motion.p className="text-foreground text-xl mb-8 font-body font-medium" {...fadeIn}>
            Talvez você esteja vivendo uma ou mais destas situações:
          </motion.p>

          <div className="space-y-3 mb-12">
            {items.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4 px-5 py-4 rounded-sm bg-card border border-border/50"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <span className="mt-2 w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                <span className="text-foreground font-body">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.div className="border-t border-border pt-8" {...fadeIn}>
            <p className="text-xl font-display italic text-foreground leading-relaxed">
              O problema não é falta de capacidade.<br />
              <span className="gold-text">O problema é sustentar alta performance por tempo demais sem reorganizar a forma como você opera por dentro.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default IdentificationSection;
