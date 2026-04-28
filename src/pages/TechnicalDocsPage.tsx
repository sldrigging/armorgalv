import { useRef, useState, useEffect, useCallback } from "react";
import { motion, type Variants } from "framer-motion";
import { Header } from "@/components/layout/Header";

// PDFs
import pdfA01 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/A01- ArmorGalv vs Sherardizing.pdf";
import pdfB01 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/B01- ArmorGalv Spirol White Paper.pdf";
import pdfB02 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/B02- ArmorGalv Univ of Wollongong Abstract.pdf";
import pdfC01 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/C01- ArmorGalv Corrosion Thickness Anomaly.pdf";
import pdfC02 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/C02- ArmorGalv H2S Stress Cracking.pdf";
import pdfD01 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/D01- ArmorGalv Hubbell.pdf";
import pdfD02 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/D02- ArmorGalv on LCAC.pdf";
import pdfD03 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/D03- ArmorGalv Rebar.pdf";
import pdfD04 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/D04- ArmorGalv Spencer Industries LCAC Tie Downs.pdf";
import pdfD05 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/D05- ArmorGalv Zinc Coating for Steel in Concrete.pdf";
import pdfD06 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/D06- DSI-Australia mining.pdf";
import pdfD07 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/D07- AY McDonald Natural Gas Fittings.pdf";
import pdfE02 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/E02- ArmorGalv EPA Zinc Thermal Diffusion Abstract.pdf";
import pdfE03 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/E03- ArmorGalv Flordia DOT Evaluation.pdf";
import pdfE04 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/E04- ArmorGalv Navsea LCAC Test Report.pdf";
import pdfF01 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/F01- ArmorGalv References.pdf";
import pdfF02 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/F02- ArmorGalv Dade County Report.pdf";
import pdfF03 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/F03- ArmorGalv Florida Corrosion Challenge.pdf";

// Cover images
import imgA01 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/A01--ArmorGalv-vs-Sherardizing.png";
import imgB01 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/B01--ArmorGalv-Spirol-White-Paper.png";
import imgB02 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/B02--ArmorGalv-Univ-of-Wollongong-Abstract.png";
import imgC01 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/C01--ArmorGalv-Corrosion-Thickness-Anomaly.png";
import imgC02 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/C02--ArmorGalv-H2S-Stress-Cracking.png";
import imgD01 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/D01--ArmorGalv-Hubbell.png";
import imgD02 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/D02--ArmorGalv-on-LCAC.png";
import imgD03 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/D03--ArmorGalv-Rebar.png";
import imgD04 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/D04--ArmorGalv-Spencer-Industries-LCAC-Tie-Downs.png";
import imgD05 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/D05--ArmorGalv-Zinc-Coating-for-Steel-in-Concrete.png";
import imgD06 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/D06--DSI-Australia-Mining.png";
import imgD07 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/D07--AY-McDonald-Natural-Gas-Fittings.png";
import imgE02 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/E02--ArmorGalv-EPA-Zinc-Thermal-Diffusion-Abstract.png";
import imgE03 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/E03--ArmorGalv-Flordia-DOT-Evaluation.png";
import imgE04 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/E04--ArmorGalv-Navsea-LCAC-Test-Report.png";
import imgF01 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/F01--ArmorGalv-References.png";
import imgF02 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/F02--ArmorGalv-Dade-County-Report.png";
import imgF03 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/F03--ArmorGalv-Florida-Corrosion-Challenge.png";

import "./TechnicalDocsPage.css";

type DocItem = {
  code: string;
  label: string;
  thumb: string;
  pdf: string;
};

type Section = {
  id: string;
  title: string;
  items: DocItem[];
};

const sections: Section[] = [
  {
    id: "A",
    title: "Comparisons",
    items: [
      { code: "A01", label: "ArmorGalv® vs. Sherardizing", thumb: imgA01, pdf: pdfA01 },
    ],
  },
  {
    id: "B",
    title: "White Papers & Abstracts",
    items: [
      { code: "B01", label: "Spirol White Paper", thumb: imgB01, pdf: pdfB01 },
      { code: "B02", label: "Univ of Wollongong Abstract", thumb: imgB02, pdf: pdfB02 },
    ],
  },
  {
    id: "C",
    title: "Corrosion Studies",
    items: [
      { code: "C01", label: "Corrosion Thickness Anomaly", thumb: imgC01, pdf: pdfC01 },
      { code: "C02", label: "H2S Stress Cracking", thumb: imgC02, pdf: pdfC02 },
    ],
  },
  {
    id: "D",
    title: "Industry Applications",
    items: [
      { code: "D01", label: "Hubbell", thumb: imgD01, pdf: pdfD01 },
      { code: "D02", label: "ArmorGalv on LCAC", thumb: imgD02, pdf: pdfD02 },
      { code: "D03", label: "Rebar", thumb: imgD03, pdf: pdfD03 },
      { code: "D04", label: "Spencer Industries LCAC Tie Downs", thumb: imgD04, pdf: pdfD04 },
      { code: "D05", label: "Zinc Coating for Steel in Concrete", thumb: imgD05, pdf: pdfD05 },
      { code: "D06", label: "DSI-Australia Mining", thumb: imgD06, pdf: pdfD06 },
      { code: "D07", label: "AY McDonald Natural Gas Fittings", thumb: imgD07, pdf: pdfD07 },
    ],
  },
  {
    id: "E",
    title: "Government & Military",
    items: [
      { code: "E02", label: "EPA Zinc Thermal Diffusion Abstract", thumb: imgE02, pdf: pdfE02 },
      { code: "E03", label: "Florida DOT Evaluation", thumb: imgE03, pdf: pdfE03 },
      { code: "E04", label: "Navsea LCAC Test Report", thumb: imgE04, pdf: pdfE04 },
    ],
  },
  {
    id: "F",
    title: "References & Reports",
    items: [
      { code: "F01", label: "ArmorGalv® References", thumb: imgF01, pdf: pdfF01 },
      { code: "F02", label: "Dade County Report", thumb: imgF02, pdf: pdfF02 },
      { code: "F03", label: "Florida Corrosion Challenge", thumb: imgF03, pdf: pdfF03 },
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] } },
};

const DownloadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
  </svg>
);

function DocCard({ item }: { item: DocItem }) {
  const cardClass =
    "group flex flex-col bg-white rounded-2xl border border-[var(--color-steel-dark)]/10 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.08)] overflow-hidden hover:border-[var(--color-accent-orange)]/50 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer";

  const footer = (
    <div className="flex items-center justify-between px-5 py-4 gap-3">
      <div className="flex flex-col gap-0.5">
        <span className="font-mono text-xs tracking-[0.25em] text-[var(--color-accent-orange)] uppercase">
          {item.code}
        </span>
        <span className="font-display text-sm text-[var(--color-text-primary)] uppercase tracking-wide leading-snug">
          {item.label}
        </span>
      </div>
      <span className="shrink-0 font-mono text-xs tracking-widest text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent-orange)] transition-colors duration-300 uppercase">
        PDF
      </span>
    </div>
  );

  const overlay = (
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[var(--color-accent-orange)] text-white rounded-full p-3">
        <DownloadIcon />
      </div>
    </div>
  );

  return (
    <motion.a
      href={item.pdf}
      target="_blank"
      rel="noopener noreferrer"
      variants={cardVariants}
      className={cardClass}
    >
      <div className="relative overflow-hidden bg-[var(--color-bg-secondary)]">
        <img
          src={item.thumb}
          alt={item.label}
          className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.03]"
        />
        {overlay}
      </div>
      {footer}
    </motion.a>
  );
}

export function TechnicalDocsPage() {
  const [activeId, setActiveId] = useState(sections[0].id);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const scrollLock = useRef(false);

  const setSectionRef = useCallback(
    (id: string) => (el: HTMLDivElement | null) => {
      sectionRefs.current[id] = el;
    },
    []
  );

  useEffect(() => {
    function handleScroll() {
      if (scrollLock.current) return;
      const threshold = window.innerHeight * 0.35;
      let best: { id: string; top: number } | null = null;
      for (const sec of sections) {
        const el = sectionRefs.current[sec.id];
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= threshold) {
          if (!best || top > best.top) best = { id: sec.id, top };
        }
      }
      if (best) setActiveId(best.id);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToSection(id: string) {
    const el = sectionRefs.current[id];
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 112;
    scrollLock.current = true;
    window.scrollTo({ top, behavior: "smooth" });
    setActiveId(id);
    setTimeout(() => { scrollLock.current = false; }, 800);
  }

  return (
    <div className="tech-docs-page">
      <Header />

      <div className="tech-docs-layout">
        <nav className="tech-docs-nav">
          <div className="tech-docs-nav-sticky">
            <h2 className="tech-docs-nav-heading">Technical<br />Docs</h2>
            <p className="tech-docs-nav-desc">
              Click any document to open or download the PDF.
            </p>

            <h3 className="tech-docs-nav-group-heading">Documents</h3>
            <ul className="tech-docs-nav-list">
              {sections.map((sec) => (
                <li key={sec.id}>
                  <button
                    className={`tech-docs-nav-item${activeId === sec.id ? " active" : ""}`}
                    onClick={() => scrollToSection(sec.id)}
                  >
                    {sec.id}: {sec.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="tech-docs-content">
          {sections.map((sec) => (
            <div
              key={sec.id}
              className="tech-docs-section"
              ref={setSectionRef(sec.id)}
              id={`section-${sec.id}`}
            >
              <div className="tech-docs-section-header">
                <h3 className="tech-docs-section-title">
                  {sec.id}: {sec.title}
                </h3>
              </div>
              <motion.div
                className="tech-docs-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
              >
                {sec.items.map((item) => (
                  <DocCard key={item.code} item={item} />
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="tech-docs-back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15,13 10,6 5,13" />
        </svg>
      </button>
    </div>
  );
}
