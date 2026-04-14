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

        </motion.div>

        {/* Content */}
        <motion.div
          className="relative z-10 h-full flex flex-col items-center justify-center px-6"
          style={{ opacity: contentOpacity, y: contentY, scale: contentScale }}
        >
          <div className="absolute inset-x-0 h-[60%] bg-black/40 blur-3xl rounded-[100%] z-[-1]" />

          {/* Main headline */}
          <div className="text-center w-full">
            {/* Biggest — white */}
            <motion.h1
              className="font-display text-[9vw] md:text-[6.5vw] lg:text-[5.5vw] leading-[1] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Thermal Diffusion Galvanizing (TDG)
            </motion.h1>

            {/* Medium — gradient green */}
            <motion.h2
              className="font-display text-[6.5vw] md:text-[4.5vw] lg:text-[3.8vw] leading-[1.1] mt-3 md:mt-4 bg-gradient-to-b from-[var(--color-accent-yellow)] to-[var(--color-accent-orange)] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              ArmorGalv&reg; Process&hellip;TDG Perfected!
            </motion.h2>

            {/* Small — white */}
            <motion.p
              className="text-white text-xl md:text-2xl font-bold tracking-[0.25em] mt-5 md:mt-6 uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              A Superior Choice to Hot Dip Galvanizing
            </motion.p>

            {/* Smallest — green */}
            <motion.p
              className="text-[var(--color-accent-yellow)] text-xl md:text-2xl font-bold tracking-[0.35em] mt-3 font-mono uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              Meets ASTM A-1059 Standard
            </motion.p>

            <div className="mt-10 md:mt-12 flex justify-center">
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
