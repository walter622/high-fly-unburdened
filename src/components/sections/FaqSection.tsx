import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 },
};

const faqs = [
  {
    q: "O PresenteMente é terapia?",
    a: "Não. O PresenteMente é uma mentoria com foco em clareza, liderança, equilíbrio emocional e aplicação prática para mulheres executivas que desejam sustentar alta performance sem exaustão.",
  },
  {
    q: "Essa mentoria é só para quem já ocupa cargo alto?",
    a: "Ela foi pensada para mulheres em posição de liderança, influência ou ascensão, que convivem com alta cobrança, responsabilidade e pressão constante.",
  },
  {
    q: "Funciona para quem já fez terapia ou coaching?",
    a: "Sim. Muitas mulheres já passaram por outros processos e ainda sentem que falta uma integração mais clara entre vida emocional, liderança e tomada de decisão.",
  },
  {
    q: "O PresenteMente serve para quem está emocionalmente sobrecarregada?",
    a: "Sim. A mentoria foi desenhada justamente para mulheres que vivem sucesso externo com desgaste interno e desejam reorganizar a forma como sustentam sua performance.",
  },
  {
    q: "Vou precisar expor minha vida pessoal?",
    a: "O processo respeita profundamente o ritmo, o contexto e os limites de cada mulher. O foco é gerar clareza, fortalecimento e direção com profundidade e segurança.",
  },
  {
    q: "Como faço para entrar?",
    a: "O ingresso acontece por candidatura / aplicação, para garantir alinhamento com o perfil da mentoria.",
  },
  {
    q: "Essa mentoria é individual ou em grupo?",
    a: "Os detalhes do formato serão compartilhados durante o processo de candidatura.",
  },
  {
    q: "Qual é o investimento?",
    a: "As informações sobre investimento serão compartilhadas durante o processo de candidatura.",
  },
];

const FaqSection = () => (
  <section className="section-light py-24 md:py-32">
    <div className="container max-w-3xl mx-auto px-6">
      <motion.div {...fadeIn}>
        <div className="divider-gold mb-10" />
        <h2 className="font-display text-lg md:text-2xl font-medium leading-tight mb-12 text-center">
          Perguntas frequentes
        </h2>
      </motion.div>

      <motion.div {...fadeIn}>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border rounded-sm px-6"
            >
              <AccordionTrigger className="font-body font-medium text-foreground text-left py-5 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-body font-light leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FaqSection;
