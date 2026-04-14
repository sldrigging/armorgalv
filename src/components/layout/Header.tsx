import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/data/content";
import logo from "@/assets/armorgalv-logo.png";
import ecoLogo from "@/assets/Eco-Friendly-Logo.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = document.querySelector("header")?.offsetHeight ?? 96;
      const top = element.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-primary)]/95 backdrop-blur-md border-b border-[var(--color-steel-dark)]/10 shadow-sm">
      <div
        className="w-full"
        style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
      >
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo Container */}
          <div className="flex-1 flex items-center">
            <a
              href="#"
              className="relative flex items-center group cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <div className="flex items-center gap-3">
                <img src={logo} alt="ArmorGalv Logo" className="h-10 md:h-12 w-auto object-contain" />
              </div>
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-6 flex-initial h-full">
            {navigation.map((item) => (
              <div key={item.id} className="relative group h-full flex items-center">
                <button
                  onClick={() => !item.children && scrollToSection(item.id)}
                  className="relative px-4 py-2 text-base font-bold tracking-wide text-[var(--color-text-primary)] hover:text-[var(--color-accent-orange)] transition-colors duration-300 cursor-pointer"
                >
                  <span className="relative z-10 inline-block font-mono text-sm tracking-[0.2em] uppercase">
                    {item.label}
                    {!item.children && <span className="absolute left-0 right-0 -bottom-1 h-[1px] bg-[var(--color-accent-orange)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />}
                  </span>
                </button>
                
                {item.children && (
                  <div className="absolute top-full left-0 w-72 bg-white border border-[var(--color-steel-dark)]/10 shadow-lg rounded-b-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden flex flex-col py-2">
                    {item.children.map((child) => (
                      <button
                        key={child.id}
                        onClick={() => scrollToSection(child.id)}
                        className="w-full text-left px-6 py-3 text-sm font-bold tracking-wide text-[#2b2b2b] hover:text-[var(--color-accent-orange)] hover:bg-[var(--color-bg-secondary)] transition-colors duration-200"
                      >
                        <span className="font-mono tracking-[0.1em] uppercase block">{child.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side — eco logo */}
          <div className="flex-1 hidden lg:flex justify-end items-center">
            <img src={ecoLogo} alt="Eco Friendly" className="h-14 md:h-16 w-auto object-contain" />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer relative z-50"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 7 : 0 }}
              className="w-7 h-[2px] bg-[var(--color-text-primary)] origin-center"
            />
            <motion.span
              animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
              className="w-5 h-[2px] bg-[var(--color-accent-orange)]"
            />
            <motion.span
              animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -7 : 0 }}
              className="w-7 h-[2px] bg-[var(--color-text-primary)] origin-center"
            />
          </button>
        </div>
      </div>

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-steel-dark)] to-transparent" />

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden fixed top-20 md:top-24 left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-[var(--color-steel-dark)]"
          >
            <nav className="flex flex-col py-6 px-12">
              {navigation.map((item, index) => (
                <div key={item.id} className="flex flex-col border-b border-[var(--color-steel-dark)]/30">
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    onClick={() => !item.children && scrollToSection(item.id)}
                    className="relative py-4 pl-6 text-left text-white hover:text-[var(--color-accent-orange)] transition-colors duration-300 group"
                  >
                    <span className="font-mono text-lg tracking-[0.2em] uppercase">
                      {item.label}
                    </span>
                    {!item.children && (
                      <motion.span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[var(--color-accent-orange)] group-hover:h-8 transition-all duration-300" />
                    )}
                  </motion.button>
                  
                  {item.children && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
                      className="flex flex-col pl-10 pb-4 gap-4"
                    >
                      {item.children.map((child) => (
                        <button
                          key={child.id}
                          onClick={() => scrollToSection(child.id)}
                          className="text-left text-white/70 hover:text-[var(--color-accent-orange)] transition-colors"
                        >
                          <span className="font-mono text-xs md:text-sm tracking-[0.1em] uppercase">{child.label}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
