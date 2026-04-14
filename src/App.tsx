import { Link } from "react-router-dom";
import armorGalvLogo from "@/assets/ArmorGalv-Logo.png";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { BackToTop } from "@/components/layout/BackToTop";
import { GrainOverlay } from "@/components/effects/GrainOverlay";
import { Hero } from "@/components/sections/Hero";
import { Advantages } from "@/components/sections/Advantages";
import { Process } from "@/components/sections/Process";
import { Approvals } from "@/components/sections/Approvals";
import { About } from "@/components/sections/About";
import { WhatIsTdg } from "@/components/sections/WhatIsTdg";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

function App() {
  return (
    <SmoothScroll>
      {/* Grain overlay for industrial texture */}
      <GrainOverlay />

      {/* Sticky header */}
      <Header />

      {/* Main content */}
      <main>
        {/* Hero with cinematic scroll */}
        <Hero />

        {/* About TDG */}
        <WhatIsTdg />

        {/* Advantages of ArmorGalv */}
        <Advantages />

        {/* Approvals & Standards */}
        <Approvals />

        {/* Zinc Armor Perfected and Examples */}
        <About />

        {/* Application Process */}
        <Process />

        {/* FAQ section */}
        <Faq />

        {/* Contact & Service Providers */}
        <Contact />

      </main>

      {/* Footer */}
      <footer className="py-20 bg-white border-t border-[var(--color-steel-dark)]/20 text-black">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Logo & Tagline */}
            <div className="flex flex-col items-start gap-6">
              <div className="flex items-center gap-3">
                <img src={armorGalvLogo} alt="ArmorGalv" className="h-12 w-auto object-contain" />
                <div className="flex flex-col text-[10px] tracking-wider text-black">
                  <span>THERMAL DIFFUSION</span>
                  <span>GALVANIZING</span>
                  <span className="text-[var(--color-accent-orange)]">
                    ARMORGALV&reg;
                  </span>
                </div>
              </div>
              <p className="text-black text-sm max-w-xs">
                ArmorGalv&reg; &mdash; Thermal Diffusion Galvanizing perfected.
                A superior choice to hot dip galvanizing, meeting ASTM A-1059
                standards.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-6">
              <h4 className="font-display text-lg tracking-widest text-black">
                CONTACT
              </h4>
              <div className="flex flex-col gap-4 text-sm text-black">
                <p className="flex items-center gap-3">
                  <span className="text-[var(--color-accent-orange)]">E:</span>
                  <a
                    href="mailto:moshe@armorgalv.com"
                    className="hover:text-[var(--color-accent-orange)] transition-colors"
                  >
                    moshe@armorgalv.com
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-[var(--color-accent-orange)]">P:</span>
                  <a
                    href="tel:+1xxx8888888"
                    className="hover:text-[var(--color-accent-orange)] transition-colors"
                  >
                    xxx-888-8888
                  </a>
                </p>
              </div>
            </div>

            {/* Social & Legal */}
            <div className="flex flex-col gap-6 items-start md:items-end">
              <div className="flex items-center gap-6">
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-[var(--color-steel-dark)]/20">
            {/* Copyright */}
            <p className="text-black text-xs">
              &copy; {new Date().getFullYear()} ArmorGalv&reg;. All
              rights reserved.
            </p>

            <div className="flex items-center gap-6 text-xs text-black">
              <Link
                to="/privacy"
                className="hover:text-[var(--color-accent-orange)] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-[var(--color-accent-orange)] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <BackToTop />
    </SmoothScroll>
  );
}

export default App;
