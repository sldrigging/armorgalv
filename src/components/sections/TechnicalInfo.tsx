import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";

import a01Thumb from "@/assets/technical-info/A01-ArmorGalv-vs-Sherardizing-sm.jpg";
import c01Thumb from "@/assets/technical-info/C01-ArmorGalv-Corrosion-Thickness-Anomaly-sm.jpg";
import f01Thumb from "@/assets/technical-info/F01-ArmorGalv-References-sm.jpg";

import a01Pdf from "@/assets/technical-info/A01-ArmorGalv-vs-Sherardizing.pdf";
import c01Pdf from "@/assets/technical-info/C01-ArmorGalv-Corrosion-Thickness-Anomaly.pdf";
import f01Pdf from "@/assets/technical-info/F01-ArmorGalv-References.pdf";

const documents = [
  {
    id: "A01",
    title: "ArmorGalv® vs. Sherardizing",
    thumb: a01Thumb,
    pdf: a01Pdf,
  },
  {
    id: "C01",
    title: "Corrosion & Thickness Anomaly",
    thumb: c01Thumb,
    pdf: c01Pdf,
  },
  {
    id: "F01",
    title: "ArmorGalv® References",
    thumb: f01Thumb,
    pdf: f01Pdf,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
  },
};

export function TechnicalInfo() {
  return (
    <section
      className="relative bg-[var(--color-bg-primary)] py-12 lg:py-16"
      id="tech-info"
    >
      <div className="w-full pl-0 pr-6 md:pr-12 lg:pr-16">
        <div className="flex flex-col lg:flex-row gap-24 lg:gap-32">
          {/* Sticky Title Column */}
          <div className="w-full lg:w-fit lg:min-w-[200px]">
            <div className="lg:sticky lg:top-24 h-fit">
              <SectionTitle
                title={"TECHNICAL\nINFO"}
                align="left"
                size="sidebar"
                titleClassName="lg:text-[3.2rem]"
              />
              <div className="mt-6 hidden lg:flex flex-col items-start gap-4">
                <div className="w-px h-12 bg-[var(--color-steel-dark)]/30" />
              </div>
            </div>
          </div>

          {/* Document Cards */}
          <div className="w-full lg:flex-1 flex flex-col justify-center py-12 md:py-16">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {documents.map((doc) => (
                <motion.a
                  key={doc.id}
                  href={doc.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={cardVariants}
                  className="group flex flex-col bg-white rounded-3xl border border-[var(--color-steel-dark)]/10 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] overflow-hidden hover:border-[var(--color-accent-orange)]/50 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.14)] transition-all duration-300 cursor-pointer"
                >
                  {/* Thumbnail */}
                  <div className="relative overflow-hidden bg-[var(--color-bg-secondary)]">
                    <img
                      src={doc.thumb}
                      alt={doc.title}
                      className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    {/* Download overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[var(--color-accent-orange)] text-white rounded-full p-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="flex items-center justify-between px-6 py-5 gap-4">
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-xs tracking-[0.3em] text-[var(--color-accent-orange)] uppercase">
                        {doc.id}
                      </span>
                      <span className="font-display text-sm md:text-base text-[var(--color-text-primary)] uppercase tracking-wide leading-snug">
                        {doc.title}
                      </span>
                    </div>
                    <span className="shrink-0 font-mono text-xs tracking-widest text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent-orange)] transition-colors duration-300 uppercase">
                      PDF
                    </span>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
