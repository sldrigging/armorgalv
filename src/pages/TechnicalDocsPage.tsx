import { useRef, useState, useEffect, useCallback } from "react";
import { motion, type Variants } from "framer-motion";
import { Header } from "@/components/layout/Header";

// Existing docs — have thumbnails
import a01Thumb from "@/assets/technical-info/A01-ArmorGalv-vs-Sherardizing-sm.jpg";
import a01Pdf from "@/assets/technical-info/A01-ArmorGalv-vs-Sherardizing.pdf";
import c01Thumb from "@/assets/technical-info/C01-ArmorGalv-Corrosion-Thickness-Anomaly-sm.jpg";
import c01Pdf from "@/assets/technical-info/C01-ArmorGalv-Corrosion-Thickness-Anomaly.pdf";
import f01Thumb from "@/assets/technical-info/F01-ArmorGalv-References-sm.jpg";
import f01Pdf from "@/assets/technical-info/F01-ArmorGalv-References.pdf";

// New PDFs — no thumbnails yet
import pdfA02 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/ArmorGalv vs Sherardizing.pdf";
import pdfA03 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/ArmorGalv Spirol White Paper.pdf";
import pdfB01 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/ArmorGalv Corrosion Thickness Anomaly.pdf";
import pdfB02 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/ArmorGalv Florida Corrosion Challenge.pdf";
import pdfB03 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/ArmorGalv Dade County Report.pdf";
import pdfB04 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/Corrosion Protection Just Went From Better to Best - A.Y. McDonald.pdf";
import pdfC02 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/ArmorGalv Thickness Anomaly.pdf";
import pdfC03 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/ArmorGalv Zinc Coating for Steel in Concrete.pdf";
import pdfC04 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/ArmorGalv EPA Zinc Thermal Diffusion Abstract.pdf";
import pdfD01 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/ArmorGalv Rebar.pdf";
import pdfD02 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/ArmorGalv H2S Stress Cracking.pdf";
import pdfD03 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/ArmorGalv Hubbell.pdf";
import pdfD04 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/DSI-Australia mining.pdf";
import pdfE01 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/ArmorGalv Flordia DOT Evaluation.pdf";
import pdfE02 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/ArmorGalv Navsea LCAC Test Report.pdf";
import pdfE03 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/ArmorGalv on LCAC.pdf";
import pdfE04 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/ArmorGalv Spencer Industries LCAC Tie Downs.pdf";
import pdfF02 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/F01 ArmorGalv References.pdf";
import pdfF03 from "@/assets/technical-info/ArmorGalv-Technical-Docs-PDFs/ArmorGalv Univ of Wollongong Abstract.pdf";

import "./TechnicalDocsPage.css";

type DocItem = {
  code: string;
  label: string;
  thumb?: string;
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
      { code: "A01", label: "ArmorGalv® vs. Sherardizing", thumb: a01Thumb, pdf: a01Pdf },
      { code: "A02", label: "vs. Sherardizing", pdf: pdfA02 },
      { code: "A03", label: "Spirol White Paper", pdf: pdfA03 },
    ],
  },
  {
    id: "B",
    title: "Corrosion Studies",
    items: [
      { code: "B01", label: "Corrosion Thickness Anomaly", pdf: pdfB01 },
      { code: "B02", label: "Florida Corrosion Challenge", pdf: pdfB02 },
      { code: "B03", label: "Dade County Report", pdf: pdfB03 },
      { code: "B04", label: "Corrosion Protection: A.Y. McDonald", pdf: pdfB04 },
    ],
  },
  {
    id: "C",
    title: "Coating Properties",
    items: [
      { code: "C01", label: "Corrosion & Thickness Anomaly", thumb: c01Thumb, pdf: c01Pdf },
      { code: "C02", label: "Thickness Anomaly", pdf: pdfC02 },
      { code: "C03", label: "Zinc Coating for Steel in Concrete", pdf: pdfC03 },
      { code: "C04", label: "EPA Zinc Thermal Diffusion Abstract", pdf: pdfC04 },
    ],
  },
  {
    id: "D",
    title: "Industry Applications",
    items: [
      { code: "D01", label: "Rebar", pdf: pdfD01 },
      { code: "D02", label: "H2S Stress Cracking", pdf: pdfD02 },
      { code: "D03", label: "Hubbell", pdf: pdfD03 },
      { code: "D04", label: "DSI-Australia Mining", pdf: pdfD04 },
    ],
  },
  {
    id: "E",
    title: "Government & Military",
    items: [
      { code: "E01", label: "Florida DOT Evaluation", pdf: pdfE01 },
      { code: "E02", label: "Navsea LCAC Test Report", pdf: pdfE02 },
      { code: "E03", label: "ArmorGalv on LCAC", pdf: pdfE03 },
      { code: "E04", label: "Spencer Industries LCAC Tie Downs", pdf: pdfE04 },
    ],
  },
  {
    id: "F",
    title: "References & Reports",
    items: [
      { code: "F01", label: "ArmorGalv® References", thumb: f01Thumb, pdf: f01Pdf },
      { code: "F02", label: "ArmorGalv References", pdf: pdfF02 },
      { code: "F03", label: "Univ of Wollongong Abstract", pdf: pdfF03 },
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
      {item.thumb ? (
        <div className="relative overflow-hidden bg-[var(--color-bg-secondary)]">
          <img
            src={item.thumb}
            alt={item.label}
            className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.03]"
          />
          {overlay}
        </div>
      ) : (
        <div className="relative w-full aspect-[0.77] bg-gradient-to-br from-[var(--color-bg-secondary)] to-[var(--color-bg-tertiary)] flex flex-col items-center justify-center gap-2 group-hover:from-[rgba(0,153,75,0.04)] group-hover:to-[rgba(0,153,75,0.08)] transition-all duration-300">
          <div className="w-12 h-12 rounded-full border-2 border-dashed border-[var(--color-steel-dark)]/30 group-hover:border-[var(--color-accent-orange)]/40 transition-colors duration-300 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-orange)] transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <span className="font-mono text-xs text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-orange)] transition-colors duration-300 tracking-wider">
            PDF
          </span>
          {overlay}
        </div>
      )}
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
