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

export function WhatIsTdg() {
  return (
    <section
      className="relative bg-[var(--color-bg-primary)] py-12 lg:py-16 scroll-mt-20 md:scroll-mt-24"
      id="whatistdg"
    >
      <div className="w-full pl-0 pr-6 md:pr-12 lg:pr-16">
        <div className="flex flex-col lg:flex-row gap-24 lg:gap-32 xl:gap-40">
          {/* Sticky Title Column */}
          <div className="w-full lg:w-fit lg:min-w-[200px]">
            <div className="lg:sticky lg:top-24 h-fit">
              <SectionTitle title={"ABOUT\nARMORGALV"} align="left" size="sidebar" />
              <div className="mt-6 hidden lg:flex flex-col items-start gap-4">
                <div className="w-px h-12 bg-[var(--color-steel-dark)]/30" />
              </div>
            </div>
          </div>

          {/* Scrolling Content Column */}
          <div className="w-full lg:flex-1 flex flex-col gap-32 lg:pl-12 xl:pl-24">
            {aboutItems
              .filter(
                (item) =>
                  item.id === "whatIsTDG" || item.id === "armorGalvProcess"
              )
              .map((item) => (
                <AboutItemPanel key={item.id} item={item} />
              ))}

            {/* ArmorGalv Technology Overview */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Text Pillar */}
              <div className="order-2 md:order-1 flex flex-col items-start text-left">
                <div className="w-full max-w-4xl mx-auto md:ml-0 md:mr-auto">
                  <h3 className="font-display text-5xl md:text-6xl lg:text-7xl text-[var(--color-text-primary)] mb-6 leading-[1.1] tracking-tight uppercase">
                    ZINC ARMOR <br />
                    <span className="text-[var(--color-accent-orange)]">
                      PERFECTED
                    </span>
                  </h3>

                  <p className="text-2xl md:text-3xl text-[var(--color-accent-orange)] mb-12 font-light italic leading-snug opacity-90">
                    21st century evolution of Thermal Diffusion technology.
                  </p>

                  <p className="text-[var(--color-text-secondary)] text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
                    ArmorGalv&reg; combines proprietary zinc powder mixtures with
                    computer-controlled precision to deliver superior corrosion
                    protection. The process uses catalysts that cause sublimation,
                    allowing zinc vapor to diffuse into steel at lower temperatures
                    with consistent, repeatable results.
                  </p>
                </div>
              </div>

              {/* Feature Cards */}
              <div className="order-1 md:order-2">
                <div className="flex flex-col gap-12">
                  {[
                    {
                      id: "corrosion",
                      title: "Superior Corrosion Protection",
                      description: "Outperforms traditional hot dip galvanizing with zinc-iron alloy layers that resist abrasion and corrosion.",
                      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    },
                    {
                      id: "precision",
                      title: "Computer Controlled Precision",
                      description: "Highly controllable by computer, consistently repeatable process with precise thickness control from 20 to 120 microns.",
                      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    },
                    {
                      id: "eco",
                      title: "Environmentally Responsible",
                      description: "Virtually zero emissions, significantly less water and hazardous chemicals than metal plating and hot dip galvanizing.",
                      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={feature.id}
                      className="flex gap-6 items-start text-left group"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.8 }}
                    >
                      <div className="w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-accent-orange)] bg-[var(--color-accent-orange)]/5 rounded-2xl border border-[var(--color-accent-orange)]/10 transition-all duration-300 group-hover:bg-[var(--color-accent-orange)]/10 group-hover:border-[var(--color-accent-orange)]/20 shadow-lg">
                        {feature.icon}
                      </div>
                      <div className="flex flex-col">
                        <h4 className="font-display text-xl text-[var(--color-text-primary)] mb-2 tracking-wide uppercase transition-colors group-hover:text-[var(--color-accent-orange)]">
                          {feature.title}
                        </h4>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg font-light opacity-80 group-hover:opacity-100 transition-opacity max-w-xl">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
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

  const secondImagePath = item.secondImage
    ? (images as Record<string, string>)[item.secondImage] || item.secondImage
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
          <motion.div className="flex flex-col gap-12" variants={textVariants}>
            <ul className="space-y-6">
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
            </ul>

            {item.belowTextImage && (
              <motion.div
                className="relative w-full max-w-[400px] mx-auto overflow-hidden rounded-2xl border border-[var(--color-steel-dark)]/10 shadow-lg group/img mt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={(images as Record<string, string>)[item.belowTextImage] || item.belowTextImage}
                  alt={item.title}
                  className="w-full h-auto block transition-transform duration-700 group-hover/img:scale-105"
                />
              </motion.div>
            )}
          </motion.div>

          {imagePath && (
            <motion.div
              className="relative w-full max-w-[800px] mx-auto overflow-hidden rounded-3xl border border-[var(--color-steel-dark)]/10 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] group"
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
                {secondImagePath && (
                  <img
                    src={secondImagePath}
                    alt={`${item.title} detail`}
                    className="w-full h-auto block transition-transform duration-1000 group-hover:scale-105 mt-4"
                  />
                )}
              </motion.div>
            </motion.div>
          )}
        </div>
      ) : null}
    </motion.div>
  );
}
