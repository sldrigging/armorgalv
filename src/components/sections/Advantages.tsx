import { motion, type Variants } from "framer-motion";
import { advantages } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { images } from "@/data/images";
import { cn } from "@/lib/utils";

export function Advantages() {
  return (
    <section
      className="relative bg-[var(--color-bg-primary)] py-12 lg:py-16"
      id="advantages"
    >
      <div className="w-full pl-0 pr-6 md:pr-12 lg:pr-16">
        <div className="flex flex-col lg:flex-row gap-24 lg:gap-32">
          {/* Sticky Title Column */}
          <div className="w-full lg:w-fit lg:min-w-[200px]">
            <div className="lg:sticky lg:top-24 h-fit">
              <SectionTitle title="ADVANTAGES" align="left" size="sidebar" />
              <div className="mt-6 hidden lg:flex flex-col items-start gap-4">
                <div className="w-px h-12 bg-[var(--color-steel-dark)]/30" />
              </div>
            </div>
          </div>

          {/* Scrolling Content Column */}
          <div className="w-full lg:flex-1 flex flex-col gap-12 md:gap-16 lg:gap-20">
            {advantages.map((advantage, index) => (
              <AdvantagePanel key={advantage.id} advantage={advantage} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface AdvantagePanelProps {
  advantage: (typeof advantages)[number];
  index: number;
}

function AdvantagePanel({ advantage, index }: AdvantagePanelProps) {
  const isEven = index % 2 === 0;

  const imagePath = (images as Record<string, string>)[advantage.image] || advantage.image;
  const secondImagePath = advantage.secondImage
    ? (images as Record<string, string>)[advantage.secondImage] || advantage.secondImage
    : null;

  const collageImagePaths = advantage.collageImages
    ? advantage.collageImages.map(
        (key) => (images as Record<string, string>)[key] || key
      )
    : [];

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const bgHighlight = isEven
    ? "bg-white p-8 md:p-12 lg:p-16 rounded-3xl lg:rounded-r-none border border-[var(--color-steel-dark)]/5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.06)] -ml-4 md:-ml-8 lg:-ml-12 -mr-6 md:-mr-12 lg:-mr-16"
    : "py-12 md:py-16";

  return (
    <motion.div
      className={cn("service-panel transition-all duration-500", bgHighlight)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }}
      transition={{ staggerChildren: 0.15 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 lg:gap-24 items-center">
        <div className={cn("order-2", isEven ? "md:order-2" : "md:order-1")}>
            <motion.div
              className="relative w-full max-w-[800px] overflow-hidden rounded-3xl border border-[var(--color-steel-dark)]/10 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8 }}
            >
              {advantage.isCollage && collageImagePaths.length > 0 ? (
                <motion.div
                  className="w-full h-full flex flex-row items-center justify-center gap-4 bg-[#f8f9fa] p-8"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {collageImagePaths.map((imgPath, i) => (
                    <img
                      key={i}
                      src={imgPath}
                      alt={`${advantage.title} detail ${i + 1}`}
                      className="flex-1 w-0 h-auto max-h-[200px] object-contain transition-transform duration-1000 group-hover:scale-105"
                    />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  className="w-full h-full"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <img
                    src={imagePath}
                    alt={advantage.title}
                    className="w-full h-auto block transition-transform duration-1000 group-hover:scale-105"
                  />
                  {secondImagePath && (
                    <img
                      src={secondImagePath}
                      alt={`${advantage.title} detail`}
                      className="w-full h-auto block transition-transform duration-1000 group-hover:scale-105 mt-4"
                    />
                  )}
                </motion.div>
              )}
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
            <motion.h3
              className="font-display text-5xl md:text-6xl lg:text-7xl text-[var(--color-text-primary)] mb-6 leading-[1.1] tracking-tight"
              variants={itemVariants}
            >
              {advantage.title.toUpperCase()}
            </motion.h3>

            <motion.p
              className="text-2xl md:text-3xl text-[var(--color-accent-orange)] mb-12 font-light italic leading-snug opacity-90"
              variants={itemVariants}
            >
              {advantage.subtitle}
            </motion.p>

            <motion.p
              className="text-[var(--color-text-secondary)] text-lg md:text-xl lg:text-2xl leading-relaxed font-light"
              variants={itemVariants}
            >
              {advantage.description}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
