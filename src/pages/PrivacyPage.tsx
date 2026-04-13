import { Link } from "react-router-dom";

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      <header className="bg-black text-white py-6 px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between">
          <Link to="/" className="font-display text-2xl">
            ARMORGALV&reg;
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
        <h1 className="font-display text-4xl md:text-5xl mb-12">
          PRIVACY POLICY
        </h1>

        <div className="prose prose-lg max-w-none text-[var(--color-text-secondary)] space-y-8">
          <p>
            This Privacy Policy describes how ArmorGalv&reg; collects, uses, and
            shares information about you when you use our website and services.
          </p>

          <h2 className="font-display text-2xl text-[var(--color-text-primary)] mt-12">
            INFORMATION WE COLLECT
          </h2>
          <p>
            We collect information you provide directly to us, such as when you
            fill out a contact form, request information, or communicate with us.
            This may include your name, email address, company name, and message
            content.
          </p>

          <h2 className="font-display text-2xl text-[var(--color-text-primary)] mt-12">
            HOW WE USE YOUR INFORMATION
          </h2>
          <p>
            We use the information we collect to respond to your inquiries,
            provide our services, and communicate with you about ArmorGalv&reg;
            products and services.
          </p>

          <h2 className="font-display text-2xl text-[var(--color-text-primary)] mt-12">
            CONTACT US
          </h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at
            moshe@armorgalv.com.
          </p>
        </div>
      </main>
    </div>
  );
}
