import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  className?: string;
  align?: "left" | "center";
  size?: "default" | "sidebar";
  titleClassName?: string;
}

export function SectionTitle({
  title,
  className = "",
  align = "center",
  size = "default",
  titleClassName = "",
}: SectionTitleProps) {
  const isLeft = align === "left";
  const isSidebar = size === "sidebar";

  return (
    <motion.div
      className={cn(
        "relative w-full z-20 flex flex-col",
        isSidebar ? "py-0" : "py-20 md:py-28",
        isLeft ? "items-start text-left" : "items-center text-center",
        className
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Accent Line */}
      <motion.div
        className={cn(
          "h-[3px] bg-[var(--color-accent-orange)] mb-6 md:mb-10",
          isSidebar ? "w-16" : "w-[20vw] min-w-[150px] max-w-[400px]",
          isLeft ? "origin-left" : "origin-center"
        )}
        variants={{
          hidden: { scaleX: 0 },
          visible: {
            scaleX: 1,
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
          },
        }}
      />

      <motion.h2
        className={cn(
          "font-display text-[var(--color-text-primary)] tracking-[0.1em] uppercase leading-tight drop-shadow-sm whitespace-pre-line",
          isSidebar
            ? "text-4xl md:text-5xl lg:text-7xl lg:ml-6"
            : "text-5xl md:text-7xl lg:text-8xl",
          isSidebar ? "px-0" : "px-6",
          titleClassName
        )}
        variants={{
          hidden: { opacity: 0, scale: 0.95 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
          },
        }}
      >
        {title}
      </motion.h2>

      {/* Bottom decorative line */}
      <motion.div
        className={cn(
          "mt-10 md:mt-14 h-[1px] bg-gradient-to-r",
          isSidebar ? "w-32 lg:w-48" : "w-[30vw] min-w-[200px] max-w-[600px]",
          isLeft
            ? "from-[var(--color-accent-orange)]/50 to-transparent"
            : "from-transparent via-[var(--color-accent-orange)]/50 to-transparent"
        )}
        variants={{
          hidden: { opacity: 0, scaleX: 0 },
          visible: {
            opacity: 1,
            scaleX: 1,
            transition: { duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
          },
        }}
      />
    </motion.div>
  );
}
