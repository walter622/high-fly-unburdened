import { motion } from "framer-motion";
import womanImage from "@/assets/executive-woman-3.png";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 },
};

const forItems = [
  "mulheres executivas",
  "líderes, diretoras, gerentes seniores, C-levels e empreendedoras",
  "mulheres em ascensão que vivem alta cobrança",
  "mulheres que desejam crescer sem continuar se esgotando",
  "quem busca profundidade, estratégia e transformação real",
  "quem valoriza acompanhamento premium e direcionamento claro",
];

const notForItems = [
  "quem busca solução mágica",
  "quem procura apenas motivação passageira",
  "quem não está disposta a olhar com honestidade para os próprios padrões",
  "quem quer atalhos superficiais",
  "quem não valoriza profundidade, aplicação e processo",
];

const ForWhoSection = () => (
  <section className="section-light py-24 md:py-32">
    <div className="container max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Copy column */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <motion.div {...fadeIn}>
            <div className="divider-gold-left mb-8" />
            <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight mb-12">
              Para quem o PresenteMente é —{" "}
              <span className="gold-text italic">e para quem não é</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display text-2xl gold-text mb-6 flex items-center gap-2">
                <span className="text-lg">✦</span> É para:
              </h3>
              <div className="space-y-4">
                {forItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-gold mt-1.5 text-sm">●</span>
                    <span className="text-foreground font-body">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h3 className="font-display text-2xl text-muted-foreground mb-6 flex items-center gap-2">
                <span className="text-lg">—</span> Não é para:
              </h3>
              <div className="space-y-4">
                {notForItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-muted-foreground/50 mt-1.5 text-sm">●</span>
                    <span className="text-muted-foreground font-body">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Image column */}
        <motion.div
          className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-24"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
        >
          <div className="relative">
            <div className="absolute -inset-3 border border-gold/40 rounded-sm translate-x-4 -translate-y-4" />
            <div className="relative overflow-hidden rounded-sm shadow-xl">
              <img
                src={womanImage}
                alt="Mulher empreendedora confiante representando ascensão e ambição feminina"
                className="w-full h-auto object-cover aspect-[4/5] grayscale-[10%]"
                loading="lazy"
              />
            </div>
            <div className="mt-6 pr-1 text-right">
              <div className="divider-gold-left mb-3 ml-auto" />
              <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground font-body">
                Ambição · Clareza · Equilíbrio
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ForWhoSection;
