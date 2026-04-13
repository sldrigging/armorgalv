import { motion } from "framer-motion";
import { stats } from "@/data/content";
import { Counter } from "@/components/ui/Counter";

export function Stats() {
  return (
    <section
      className="relative bg-[var(--color-bg-primary)] py-24 lg:py-32"
      id="stats"
    >
      <div className="w-full px-6 md:px-12 lg:px-32">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="hidden lg:block lg:w-1/6" />

          <div className="w-full lg:w-4/6 px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-0">
              {stats.map((stat, index) => (
                <div
                  key={stat.id}
                  className="relative flex flex-col items-center"
                >
                  <motion.div
                    className="flex flex-col items-center text-center w-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                  >
                    <div className="mb-8 relative">
                      <span className="font-display text-5xl md:text-6xl lg:text-7xl text-[var(--color-text-primary)] leading-none block">
                        <Counter
                          end={stat.value}
                          suffix={stat.suffix}
                          duration={2}
                        />
                      </span>
                    </div>

                    <div className="h-px w-12 bg-[var(--color-accent-orange)] mb-6 mx-auto" />

                    <span className="text-xs tracking-[0.4em] font-mono text-[var(--color-accent-orange)] uppercase">
                      {stat.label}
                    </span>
                  </motion.div>

                  {index < stats.length - 1 && (
                    <div className="hidden md:block absolute -right-0 top-0 bottom-0 w-px pt-2">
                      <div className="w-px h-16 bg-gradient-to-b from-[var(--color-accent-orange)] to-transparent opacity-40 mx-auto" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block lg:w-1/6" />
        </div>
      </div>
    </section>
  );
}
