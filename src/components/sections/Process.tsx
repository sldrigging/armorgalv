import { motion, type Variants } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { images } from "@/data/images";
import { processSteps } from "@/data/content";
import { cn } from "@/lib/utils";

export function Process() {
  return (
    <section
      className="relative bg-[var(--color-bg-primary)] py-12 lg:py-16"
      id="process"
    >
      <div className="w-full pl-0 pr-6 md:pr-12 lg:pr-16">
        <div className="flex flex-col lg:flex-row gap-24 lg:gap-32">
          {/* Sticky Title Column */}
          <div className="w-full lg:w-fit lg:min-w-[200px]">
            <div className="lg:sticky lg:top-24 h-fit">
              <SectionTitle
                title={"APPLICATION\nPROCESS"}
                align="left"
                size="sidebar"
                titleClassName="lg:text-[3.2rem]"
              />
              <div className="mt-6 hidden lg:flex flex-col items-start gap-4 text-[var(--color-steel-mid)]">
                <div className="w-px h-16 bg-[var(--color-steel-dark)]/30" />
              </div>
            </div>
          </div>

          {/* Scrolling Content Column */}
          <div className="w-full lg:flex-1 flex flex-col gap-12 md:gap-16 lg:gap-20">
            {processSteps.map((step, index) => (
              <ProcessPanel
                key={step.id}
                step={step}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ProcessPanelProps {
  step: (typeof processSteps)[number];
  index: number;
}

function ProcessPanel({ step, index }: ProcessPanelProps) {
  const isEven = index % 2 === 0;

  const imagePath =
    (images as Record<string, string>)[step.image] || step.image;

  const imageReveal: Variants = {
    hidden: { opacity: 0, scale: 0.95, clipPath: "inset(10% 0 10% 0)" },
    visible: {
      opacity: 1,
      scale: 1,
      clipPath: "inset(0% 0 0% 0)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const bgHighlight = isEven
    ? "bg-white p-8 md:p-12 lg:p-16 rounded-3xl lg:rounded-r-none border border-[var(--color-steel-dark)]/5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.06)] -ml-4 md:-ml-8 lg:-ml-12 -mr-6 md:-mr-12 lg:-mr-16"
    : "py-12 md:py-16";

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
    },
  };

  return (
    <motion.div
      className={cn("relative transition-all duration-500", bgHighlight)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Visual Column */}
        <div className={cn("order-2", isEven ? "md:order-2" : "md:order-1")}>
          <motion.div
            className={cn(
              "relative w-full group overflow-hidden rounded-3xl border border-[var(--color-steel-dark)]/10 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] max-w-[800px]",
              isEven ? "md:ml-0 md:mr-auto" : "mx-auto"
            )}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-full h-full"
              variants={imageReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <img
                src={imagePath}
                alt={step.title}
                className="w-full h-auto block transition-transform duration-1000 group-hover:scale-105"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Text Content Column */}
        <div
          className={cn(
            "order-1 flex flex-col justify-center",
            isEven ? "md:order-1" : "md:order-2"
          )}
        >
          <div
            className={cn(
              "w-full max-w-xl flex flex-col items-start text-left",
              isEven ? "mx-auto" : "md:ml-0 md:mr-auto"
            )}
          >
            {/* Step number */}
            <motion.span
              className="font-mono text-sm tracking-[0.4em] text-[var(--color-accent-orange)] mb-4 uppercase"
              variants={textVariants}
            >
              STEP {String(index + 1).padStart(2, "0")}
            </motion.span>

            <motion.h3
              className="font-display text-5xl md:text-6xl lg:text-7xl text-[var(--color-text-primary)] mb-6 leading-[1.1] tracking-tight uppercase"
              variants={textVariants}
            >
              {step.title}
            </motion.h3>

            <motion.p
              className="text-2xl md:text-3xl text-[var(--color-accent-orange)] mb-12 font-light italic leading-snug opacity-90"
              variants={textVariants}
            >
              {step.subtitle}
            </motion.p>

            {step.description && (
              <motion.p
                className="text-[var(--color-text-secondary)] text-lg md:text-xl lg:text-2xl leading-relaxed font-light"
                variants={textVariants}
              >
                {step.description}
              </motion.p>
            )}

            {step.points && step.points.length > 0 && (
              <ul className="space-y-6 w-full mt-8">
                {step.points.map((point, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-6 group/item"
                    variants={textVariants}
                  >
                    <span className="text-[var(--color-accent-orange)] mt-2 text-2xl font-light transition-transform group-hover/item:translate-x-1 shrink-0">
                      ━
                    </span>
                    <span className="text-[var(--color-text-secondary)] text-lg md:text-xl lg:text-2xl leading-relaxed group-hover/item:text-[var(--color-text-primary)] transition-colors duration-300">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
