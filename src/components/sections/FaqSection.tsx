import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "A Sessão Diagnóstica é terapia?", a: "Não. É uma conversa de diagnóstico e análise do seu momento atual. Caso exista necessidade de atendimento clínico específico, isso deverá ser tratado adequadamente." },
  { q: "Preciso estar em burnout?", a: "Não. Na verdade, uma das propostas é identificar padrões antes que o esgotamento se transforme em um quadro mais grave." },
  { q: "A sessão é somente para C-levels?", a: "Não. Ela é voltada a executivas, líderes, gestoras e empreendedoras que convivem com alto nível de responsabilidade e pressão." },
  { q: "Já faço terapia. Posso participar?", a: "Sim. A Sessão Diagnóstica possui objetivo diferente de um processo terapêutico." },
  { q: "Quanto custa a sessão?", a: "A sessão de análise é realizada sem compromisso de contratação." },
  { q: "O que acontece depois?", a: "Ao final, Edgard apresenta sua leitura sobre o momento atual e possíveis caminhos. Caso exista alinhamento para um acompanhamento, ele poderá apresentar a possibilidade de continuidade." },
];

const FaqSection = () => (
  <section className="section-cream py-24 md:py-32">
    <div className="container max-w-5xl px-6">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="mb-5 text-center font-body text-xs font-semibold uppercase tracking-[0.22em] text-primary">FAQ</p>
        <h2 className="text-center text-4xl font-medium md:text-6xl">Perguntas frequentes</h2>
        <Accordion type="single" collapsible className="mt-14 border-t border-border">
          {faqs.map((faq, index) => <AccordionItem key={faq.q} value={`faq-${index}`} className="border-b border-border"><AccordionTrigger className="py-6 text-left font-display text-xl font-medium hover:no-underline md:text-2xl">{faq.q}</AccordionTrigger><AccordionContent className="max-w-3xl pb-7 font-body text-base leading-relaxed text-muted-foreground">{faq.a}</AccordionContent></AccordionItem>)}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FaqSection;