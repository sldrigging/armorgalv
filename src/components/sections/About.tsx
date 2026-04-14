import { motion, type Variants, AnimatePresence } from "framer-motion";
import { useState } from "react";
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
  const [modalSrc, setModalSrc] = useState<string | null>(null);

  const imagePath = item.image
    ? (images as Record<string, string>)[item.image] || item.image
    : null;

  const sourceImages = item.collageImages
    ? item.collageImages.map(
        (key) => (images as Record<string, string>)[key] || key
      )
    : [];

  // Repeat source images to fill 15 slots (5 cols × 3 rows)
  const collageImagePaths = sourceImages.length > 0
    ? Array.from({ length: 15 }, (_, i) => sourceImages[i % sourceImages.length])
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
        className="font-display text-5xl md:text-6xl lg:text-7xl text-[var(--color-text-primary)] mb-12 mt-12 lg:mt-24 leading-[1.1] tracking-tight uppercase"
        variants={textVariants}
      >
        {item.title}
      </motion.h3>

      {item.isCollage && collageImagePaths.length > 0 ? (
        <>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
            {collageImagePaths.map((imgPath, i) => (
              <motion.button
                key={i}
                className="relative aspect-square overflow-hidden rounded-xl bg-[#f8f9fa] border border-[var(--color-steel-dark)]/10 shadow-[0_4px_12px_-4px_rgba(0,0,0,0.08)] group cursor-pointer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                onClick={() => setModalSrc(imgPath)}
              >
                <img
                  src={imgPath}
                  alt={`${item.title} ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl">⤢</span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Modal */}
          <AnimatePresence>
            {modalSrc && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setModalSrc(null)}
              >
                <motion.div
                  className="relative max-w-4xl w-full max-h-[90vh]"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={modalSrc}
                    alt="Example"
                    className="w-full h-auto max-h-[90vh] object-contain rounded-2xl shadow-2xl"
                  />
                  <button
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors text-lg"
                    onClick={() => setModalSrc(null)}
                  >
                    ✕
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
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
