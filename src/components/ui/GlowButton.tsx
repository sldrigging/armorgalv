import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowButtonProps extends HTMLMotionProps<"button"> {
  text?: string;
}

export function GlowButton({
  className,
  text = "LEARN MORE",
  href = "#whatistdg",
  ...props
}: GlowButtonProps & { href?: string }) {
  const ButtonContent = (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative p-[1px] inline-flex items-center justify-center overflow-hidden rounded-full transition-all duration-300",
        "bg-[var(--color-steel-dark)]/20 hover:bg-[var(--color-steel-dark)]/40",
        className
      )}
      {...props}
    >
      {/* The rotating gradient streak */}
      <div className="absolute inset-[-200%] animate-[spin_4s_linear_infinite] [background:conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_80%,var(--color-accent-orange)_95%,var(--color-accent-yellow)_100%)]" />

      {/* Solid inner masking layer */}
      <div className="absolute inset-[2px] bg-[#0f0f0f] rounded-full z-0" />

      {/* Button content container */}
      <span className="relative z-10 flex items-center justify-center gap-4 px-12 py-5 text-white font-display text-2xl md:text-3xl tracking-[0.2em] font-bold group-hover:text-[var(--color-accent-yellow)] transition-colors duration-300">
        {text}
      </span>

      {/* Subtle outer glow on hover */}
      <div className="absolute inset-0 rounded-full group-hover:shadow-[0_0_30px_rgba(255,109,0,0.4)] transition-shadow duration-500" />
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} className="no-underline">
        {ButtonContent}
      </a>
    );
  }

  return ButtonContent;
}
