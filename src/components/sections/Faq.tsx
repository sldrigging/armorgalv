import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { brandText } from "@/lib/brandText";

const faqs = [
  {
    question: "How does ArmorGalv\u00AE compare to hot dip galvanizing?",
    answer:
      "ArmorGalv\u00AE provides superior corrosion resistance that exceeds traditional hot dip galvanizing per ASTM A-123 and A-153. After 5,000 hours of salt fog testing, HDG bolts were virtually unrecognizable while ArmorGalv\u00AE bolts were largely unchanged. Additionally, ArmorGalv\u00AE offers precise thickness control, zero hydrogen embrittlement risk, and lower process temperatures.",
  },
  {
    question: "What materials can be coated with ArmorGalv\u00AE?",
    answer:
      "ArmorGalv\u00AE can be applied to a wide range of steel materials including carbon steel, alloy steels, and even stainless steel. On stainless steel, it helps stop thread galling, offers better corrosion resistance in marine and industrial settings, and increases surface hardness. It is safe for high-strength alloy steels as there is no risk of hydrogen embrittlement.",
  },
  {
    question: "What is the typical process time for ArmorGalv\u00AE coating?",
    answer:
      "The typical heating process time is around 3 hours. Parts are first abrasive blasted, cleaned, and dried, then placed into a cylindrical chamber with proprietary zinc powder mixture. The chamber is placed into a heating oven where it rotates at less than 2 RPM to ensure complete and even treatment.",
  },
  {
    question: "Is ArmorGalv\u00AE environmentally friendly?",
    answer:
      "Yes. The ArmorGalv\u00AE process produces virtually zero emissions and uses significantly less water and hazardous chemicals than metal plating and hot dip galvanizing. It is one of the most environmentally responsible galvanizing processes available.",
  },
  {
    question: "How do I become an ArmorGalv\u00AE licensee?",
    answer:
      "To learn about becoming a licensee, please contact us directly. We provide a \"turnkey\" solution, including equipment, technology, materials, training and continuing support.",
  },
];

export function Faq() {
  return (
    <section
      className="relative bg-[var(--color-bg-primary)] py-12 lg:py-16"
      id="faq"
    >
      <div className="w-full pl-0 pr-6 md:pr-12 lg:pr-16">
        <div className="flex flex-col lg:flex-row gap-24 lg:gap-32">
          {/* Sticky Title Column */}
          <div className="w-full lg:w-fit lg:min-w-[200px]">
            <div className="lg:sticky lg:top-24 h-fit">
              <SectionTitle title="FAQ" align="left" size="sidebar" />
              <div className="mt-6 hidden lg:flex flex-col items-start gap-4">
                <div className="w-px h-12 bg-[var(--color-steel-dark)]/30" />
              </div>
            </div>
          </div>

          {/* FAQ Content area */}
          <div className="w-full lg:flex-1 flex flex-col items-center">
            <motion.div
              className="w-full max-w-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Accordion
                type="single"
                collapsible
                className="w-full space-y-12"
              >
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-[var(--color-steel-dark)]/20 rounded-[2rem] bg-[var(--color-bg-secondary)] overflow-hidden transition-all duration-300 hover:border-[var(--color-accent-orange)]/40 h-fit"
                  >
                    <AccordionTrigger className="flex w-full items-center justify-between px-10 py-6 md:px-12 md:py-8 text-left font-display text-lg md:text-2xl text-[var(--color-text-primary)] hover:text-[var(--color-accent-orange)] transition-colors uppercase tracking-widest group">
                      {brandText(faq.question)}
                    </AccordionTrigger>
                    <AccordionContent className="text-[var(--color-text-secondary)] text-base md:text-xl leading-relaxed font-light px-10 pb-6 md:px-12 md:pb-8">
                      <div className="pt-6 border-t border-[var(--color-steel-dark)]/10">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
