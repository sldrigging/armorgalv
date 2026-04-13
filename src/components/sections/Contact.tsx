import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { serviceProviders } from "@/data/content";

export function Contact() {
  // Contact form hidden per user request; state and variables removed


  return (
    <section
      className="relative bg-[var(--color-bg-primary)] py-12 lg:py-16"
      id="contact"
    >
      <div className="w-full pl-0 pr-6 md:pr-12 lg:pr-16">
        <div className="flex flex-col lg:flex-row gap-24 lg:gap-32">
          {/* Sticky Title Column */}
          <div className="w-full lg:w-fit lg:min-w-[200px]">
            <div className="lg:sticky lg:top-24 h-fit">
              <SectionTitle title="CONTACT" align="left" size="sidebar" />
              <div className="mt-6 hidden lg:flex flex-col items-start gap-4">
                <div className="w-px h-12 bg-[var(--color-steel-dark)]/30" />
              </div>
            </div>
          </div>

          {/* Scrolling Content Column */}
          <div className="w-full lg:flex-1 flex flex-col gap-24 items-center">
            <motion.div
              className="flex flex-col items-start text-left w-full max-w-5xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-display text-4xl md:text-5xl lg:text-7xl text-[var(--color-text-primary)] mb-12 leading-tight tracking-tight">
                GET IN <br />
                <span className="text-[var(--color-accent-orange)]">
                  TOUCH
                </span>
              </h3>

              <p className="text-[var(--color-text-secondary)] text-xl md:text-3xl leading-relaxed font-light mb-16 max-w-5xl">
                Interested in ArmorGalv&reg; for your projects? Contact us to
                discuss how thermal diffusion galvanizing can provide superior
                protection for your steel components.
              </p>

              {/* Service Providers */}
              <div className="w-full mb-16">
                {serviceProviders.map((category) => (
                  <div key={category.category} className="mb-12">
                    <h4 className="font-display text-2xl md:text-3xl text-[var(--color-text-primary)] mb-2 tracking-wide">
                      {category.category}
                    </h4>
                    {"note" in category && category.note && (
                      <p className="text-[var(--color-text-muted)] text-sm mb-6 italic">
                        {category.note}
                      </p>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {category.providers.map((provider) => (
                        <div
                          key={provider.company}
                          className="p-6 rounded-2xl border border-[var(--color-steel-dark)]/10 bg-[var(--color-bg-secondary)] hover:border-[var(--color-accent-orange)]/30 transition-colors duration-300"
                        >
                          <h5 className="font-display text-xl text-[var(--color-text-primary)] mb-1">
                            {provider.company}
                          </h5>
                          <p className="text-[var(--color-text-secondary)] text-sm mb-3">
                            {provider.location}
                          </p>
                          <div className="flex flex-col gap-1 text-sm">
                            <span className="text-[var(--color-accent-orange)]">
                              {provider.website}
                            </span>
                            <span className="text-[var(--color-text-muted)]">
                              {provider.phone}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Form (Hidden per user request) */}
              <div className="hidden">
                 {/* Form was here */}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
