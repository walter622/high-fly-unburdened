import { motion } from "framer-motion";
import edgardImage from "@/assets/edgard-2.jpg";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 },
};

const traits = ["clareza", "firmeza", "profundidade", "segurança", "olhar estratégico para quem precisa crescer sem se perder no processo"];

const AboutSection = () => (
  <section className="section-cream py-24 md:py-32">
    <div className="container max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
        >
          <div className="relative">
            <div className="absolute -inset-3 border border-gold/50 rounded-sm -translate-x-4 -translate-y-4" />
            <div className="relative overflow-hidden rounded-sm shadow-xl">
              <img
                src={edgardImage}
                alt="Edgard Gonçalves, mentor e fundador do PresenteMente"
                className="w-full h-auto object-cover aspect-[4/5]"
                loading="lazy"
              />
            </div>
            <div className="mt-6">
              <div className="divider-gold-left mb-3" />
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-body">
                Edgard Gonçalves · Mentor & Fundador
              </p>
            </div>
          </div>
        </motion.div>

        <div className="lg:col-span-7">
          <motion.div {...fadeIn}>
            <div className="divider-gold-left mb-8" />
            <h2 className="font-display text-lg md:text-2xl font-medium leading-tight mb-8">
              Quem é <span className="gold-text">Edgard Gonçalves</span>
            </h2>
          </motion.div>

          <motion.p className="text-muted-foreground text-lg leading-relaxed mb-6 font-body font-light" {...fadeIn}>
            Edgard Gonçalves é o criador do PresenteMente e conduz um trabalho voltado a mulheres executivas que desejam sustentar alta performance com equilíbrio emocional, clareza e autoridade.
          </motion.p>

          <motion.p className="text-muted-foreground text-lg leading-relaxed mb-10 font-body font-light" {...fadeIn}>
            Sua atuação integra profundidade psicológica com visão prática de liderança, ajudando mulheres em posição de responsabilidade a identificarem padrões invisíveis, reorganizarem sua forma de decidir e fortalecerem a própria presença sem viverem reféns da pressão e da sobrecarga.
          </motion.p>

          <motion.div {...fadeIn}>
            <p className="text-foreground text-lg mb-6 font-body font-medium">Sua condução é marcada por:</p>
            <div className="flex flex-wrap gap-3">
              {traits.map((trait, i) => (
                <span key={i} className="px-5 py-2.5 border border-gold/40 rounded-sm text-foreground font-body text-base">
                  {trait}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
