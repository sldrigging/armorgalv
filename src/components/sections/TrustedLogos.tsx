import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function TrustedLogos() {
  const standards = ["ASTM A-123", "ASTM A-153", "ASTM A-1059", "NACE TM0177"];

  return (
    <section
      className="bg-[var(--color-bg-primary)] py-12 lg:py-16"
      id="standards"
    >
      <div className="w-full pl-0 pr-6 md:pr-12 lg:pr-16">
        <div className="flex flex-col lg:flex-row gap-24 lg:gap-32">
          {/* Sticky Title Column */}
          <div className="w-full lg:w-fit lg:min-w-[200px]">
            <div className="lg:sticky lg:top-24 h-fit">
              <SectionTitle title="STANDARDS" align="left" size="sidebar" />
              <div className="mt-6 hidden lg:flex flex-col items-start gap-4">
                <div className="w-px h-12 bg-[var(--color-steel-dark)]/30" />
              </div>
            </div>
          </div>

          {/* Scrolling Content Column */}
          <div className="w-full lg:flex-1 flex flex-col items-center">
            <motion.div
              className="flex flex-col gap-16 items-start text-left w-full max-w-5xl"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-display text-4xl md:text-5xl lg:text-7xl text-[var(--color-text-primary)] leading-tight tracking-tight">
                MEETS THE HIGHEST <br />
                <span className="text-[var(--color-accent-orange)]">
                  INDUSTRY STANDARDS
                </span>
              </h3>

              <div className="w-full flex flex-wrap items-center justify-center md:justify-start gap-x-12 gap-y-12 md:gap-x-16 lg:gap-x-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
                {standards.map((standard) => (
                  <span
                    key={standard}
                    className="font-display text-xl md:text-2xl lg:text-3xl tracking-[0.2em] font-bold text-[var(--color-text-primary)] hover:text-[var(--color-accent-orange)] transition-colors duration-500 cursor-default"
                  >
                    {standard}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
