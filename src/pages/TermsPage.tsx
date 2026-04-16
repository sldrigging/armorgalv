import { Link } from "react-router-dom";

export function TermsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      <header className="bg-black text-white py-6 px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between">
          <Link to="/" className="font-display text-2xl">
            ArmorGalv<sup>®</sup>
          </Link>
          <Link
            to="/"
            className="text-sm font-mono tracking-wider hover:text-[var(--color-accent-orange)] transition-colors"
          >
            &larr; BACK
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <h1 className="font-display uppercase text-4xl md:text-5xl mb-12">
          TERMS OF SERVICE
        </h1>

        <div className="prose prose-lg max-w-none text-[var(--color-text-secondary)] space-y-8">
          <p>
            These Terms of Service govern your use of the ArmorGalv<sup>®</sup> website
            and services. By accessing or using our services, you agree to be
            bound by these terms.
          </p>

          <h2 className="font-display uppercase text-2xl text-[var(--color-text-primary)] mt-12">
            USE OF SERVICES
          </h2>
          <p>
            You may use our website for informational purposes. All content on
            this website is the property of ArmorGalv<sup>®</sup> and may not be
            reproduced without permission.
          </p>

          <h2 className="font-display uppercase text-2xl text-[var(--color-text-primary)] mt-12">
            INTELLECTUAL PROPERTY
          </h2>
          <p>
            ArmorGalv<sup>®</sup> is a registered trademark. All trademarks, service
            marks, and trade names are proprietary to ArmorGalv<sup>®</sup> or its
            licensors.
          </p>

          <h2 className="font-display uppercase text-2xl text-[var(--color-text-primary)] mt-12">
            CONTACT US
          </h2>
          <p>
            If you have questions about these Terms, please contact us at
            moshe@armorgalv.com.
          </p>
        </div>
      </main>
    </div>
  );
}
