import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { images } from "@/data/images";

export function Approvals() {
  return (
    <section
      className="relative bg-[var(--color-bg-primary)] py-12 lg:py-16"
      id="approvals"
    >
      <div className="w-full pl-0 pr-6 md:pr-12 lg:pr-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 xl:gap-32">
          {/* Sticky Title Column */}
          <div className="w-full lg:w-fit lg:min-w-[200px]">
            <div className="lg:sticky lg:top-24 h-fit">
              <SectionTitle title="APPROVALS" align="left" size="sidebar" />
              <div className="mt-6 hidden lg:flex flex-col items-start gap-4">
                <div className="w-px h-12 bg-[var(--color-steel-dark)]/30" />
              </div>
            </div>
          </div>

          {/* Scrolling Content Column */}
          <div className="w-full lg:flex-1 flex flex-col gap-32 lg:pl-12 xl:pl-24">
            <motion.div
              className="service-panel transition-all duration-500 bg-white p-8 md:p-12 lg:p-16 rounded-3xl lg:rounded-r-none border border-[var(--color-steel-dark)]/5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.06)] -ml-4 md:-ml-8 lg:-ml-12 -mr-6 md:-mr-12 lg:-mr-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.1,
                margin: "0px 0px -100px 0px",
              }}
              transition={{ staggerChildren: 0.15 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-24 lg:gap-24 items-center">
                {/* Image Box Column (Right) */}
                <div className="order-2 md:order-2">
                  <motion.div
                    className="relative w-full max-w-[800px] overflow-hidden rounded-3xl border border-[var(--color-steel-dark)]/10 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] bg-white p-8 group"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <motion.div
                      className="w-full h-full"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:gap-y-12 items-center justify-items-center w-full">
                        {Array.from({ length: 8 }).map((_, i) => {
                          const imgKey = `approval${i + 1}`;
                          const imgPath = (images as Record<string, string>)[
                            imgKey
                          ];
                          return (
                            <div
                              key={imgKey}
                              className="relative w-full aspect-[4/3] max-w-[160px] flex items-center justify-center p-2 transition-transform duration-500 hover:scale-105"
                            >
                              <img
                                src={imgPath}
                                alt={`Approval logo ${i + 1}`}
                                className="max-h-full max-w-full object-contain"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Text Content Column (Left) */}
                <div className="order-1 md:order-1 flex flex-col justify-center">
                  <div className="w-full max-w-xl flex flex-col items-start text-left mx-auto">
                    <motion.h3
                      className="font-display text-5xl md:text-6xl lg:text-7xl text-[var(--color-text-primary)] mb-6 leading-[1.1] tracking-tight uppercase"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    >
                      STANDARDS &<br />
                      GOVERNMENT AGENCIES
                    </motion.h3>

                    <motion.div
                      className="text-[var(--color-text-secondary)] text-lg md:text-xl leading-relaxed font-light flex flex-col gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                    >
                      <p>Meets ASTM A-1059 standards.</p>
                      <p>
                        Compliant with U2S NACE TM0177 specification for oil
                        well applications.
                      </p>
                      <div className="flex flex-col gap-1 mt-2">
                        <p>U.S. Department of War</p>
                        <p>Israeli Defense Force</p>
                        <p>Florida Department of Transportation</p>
                        <p>Virginia Department of Transportation</p>
                        <p>New York City Transit Department</p>
                        <p>BART San Francisco Transit Department</p>
                      </div>

                      <a
                        href="#more-approvals"
                        className="mt-8 text-lg font-medium text-[var(--color-text-primary)] tracking-wide hover:text-[var(--color-accent-orange)] transition-colors inline-block relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-px after:bg-current after:origin-right hover:after:origin-left after:transition-transform hover:after:scale-x-100 after:scale-x-0 w-fit"
                      >
                        Click here for more approvals and references
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
