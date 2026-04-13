import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { images } from "@/data/images";
import { GlowButton } from "@/components/ui/GlowButton";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.5, 0.7, 0.9],
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5],
    [1, 1, 0],
  );
  const contentY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-15%"]);
  const contentScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <motion.section ref={containerRef} className="relative h-[200vh]" id="hero">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        {/* Background with parallax */}
        <motion.div
          className="absolute inset-0"
          style={{ y: backgroundY, scale: backgroundScale }}
        >
          <img
            src={images.hero}
            alt="Industrial Steel Galvanizing"
            className="w-full h-full object-cover"
          />

          <motion.div
            className="absolute inset-0 bg-black/50"
            style={{ opacity: overlayOpacity }}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="relative z-10 h-full flex flex-col items-center justify-center px-6"
          style={{ opacity: contentOpacity, y: contentY, scale: contentScale }}
        >
          <div className="absolute inset-x-0 h-[60%] bg-black/40 blur-3xl rounded-[100%] z-[-1]" />

          {/* Main headline */}
          <div className="text-center w-full">
            <motion.p
              className="text-white text-xl md:text-2xl font-bold tracking-[0.4em] mb-6 md:mb-10 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] uppercase opacity-95"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0, ease: "easeOut" }}
            >
              THERMAL DIFFUSION GALVANIZING (TDG)
            </motion.p>
            <motion.h1
              className="font-display text-[11vw] md:text-[8vw] lg:text-[7vw] leading-[0.85] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              ARMORGALV&reg;
            </motion.h1>

            <motion.h2
              className="font-display text-[7vw] md:text-[5vw] lg:text-[4vw] leading-[0.9] mt-2 md:mt-4 drop-shadow-2xl bg-gradient-to-b from-[var(--color-accent-yellow)] to-[var(--color-accent-orange)] drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              TDG PERFECTED
            </motion.h2>

            <motion.p
              className="text-white/80 text-lg md:text-xl tracking-[0.2em] mt-6 md:mt-8 uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              A SUPERIOR CHOICE TO HOT DIP GALVANIZING
            </motion.p>

            <motion.p
              className="text-[var(--color-accent-orange)] text-sm md:text-base tracking-[0.3em] mt-4 font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              MEETS ASTM A-1059 STANDARD
            </motion.p>

            <div className="mt-12 md:mt-16 flex justify-center">
              <GlowButton />
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div
              className="flex flex-col items-center text-white font-bold"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-[10px] tracking-[0.3em] mb-3">SCROLL</span>
              <div className="w-[2px] h-12 bg-gradient-to-b from-white to-transparent" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Corner decorations */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-[var(--color-steel-dark)] opacity-50" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-[var(--color-steel-dark)] opacity-50" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-[var(--color-steel-dark)] opacity-50" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-[var(--color-steel-dark)] opacity-50" />
      </div>
    </motion.section>
  );
}
