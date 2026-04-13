import { motion, type Variants } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { images } from "@/data/images";
import { aboutItems } from "@/data/content";
const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
  },
};

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 0.95, clipPath: "inset(10% 0 10% 0)" },
  visible: {
    opacity: 1,
    scale: 1,
    clipPath: "inset(0% 0 0% 0)",
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

export function About() {
  return (
    <section
      className="relative bg-[var(--color-bg-primary)] py-12 lg:py-16"
      id="examples"
    >
      <div className="w-full pl-0 pr-6 md:pr-12 lg:pr-16">
        <div className="flex flex-col lg:flex-row gap-24 lg:gap-32 xl:gap-40">
          {/* Sticky Title Column */}
          <div className="w-full lg:w-fit lg:min-w-[200px]">
            <div className="lg:sticky lg:top-24 h-fit">
              <SectionTitle title="EXAMPLES" align="left" size="sidebar" />
              <div className="mt-6 hidden lg:flex flex-col items-start gap-4">
                <div className="w-px h-12 bg-[var(--color-steel-dark)]/30" />
              </div>
            </div>
          </div>

          {/* Scrolling Content Column */}
          <div className="w-full lg:flex-1 flex flex-col gap-32 lg:pl-12 xl:pl-24">
            {aboutItems
              .filter((item) => item.id === "examples")
              .map((item) => (
                <AboutItemPanel key={item.id} item={item} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface AboutItemPanelProps {
  item: (typeof aboutItems)[number];
}

function AboutItemPanel({ item }: AboutItemPanelProps) {
  const imagePath = item.image
    ? (images as Record<string, string>)[item.image] || item.image
    : null;

  const collageImagePaths = item.collageImages
    ? item.collageImages.map(
        (key) => (images as Record<string, string>)[key] || key
      )
    : [];

  return (
    <motion.div
      className="relative w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.15 }}
    >
      {/* Title */}
      <motion.h3
        className="font-display text-5xl md:text-6xl lg:text-7xl text-[var(--color-text-primary)] mb-12 leading-[1.1] tracking-tight uppercase"
        variants={textVariants}
      >
        {item.title}
      </motion.h3>

      {item.isCollage && collageImagePaths.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {collageImagePaths.map((imgPath, i) => (
            <motion.div
              key={i}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#f8f9fa] border border-[var(--color-steel-dark)]/10 shadow-[0_10px_20px_-8px_rgba(0,0,0,0.08)] group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <img
                src={imgPath}
                alt={`${item.title} ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      ) : item.points?.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.ul className="space-y-6" variants={textVariants}>
            {item.points.map((point, i) => (
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
          </motion.ul>

          {imagePath && (
            <motion.div
              className="relative w-full max-w-[800px] overflow-hidden rounded-3xl border border-[var(--color-steel-dark)]/10 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] group"
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
                  alt={item.title}
                  className="w-full h-auto block transition-transform duration-1000 group-hover:scale-105"
                />
              </motion.div>
            </motion.div>
          )}
        </div>
      ) : null}
    </motion.div>
  );
}
