import { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";

type PageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageShell({
  eyebrow,
  title,
  description,
  children,
}: PageShellProps) {
  return (
    <main className="page-main">
      <section className="section section--page-intro">
        <div className="shell">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </div>
      </section>

      <section className="section">
        <div className="shell page-grid">
          <div className="surface-panel">
            <p className="eyebrow">Prepared structure</p>
            <h3>Content-first, upgrade-friendly layout</h3>
            <p>
              Each page uses the same spacing, typography, and section rhythm so
              new content can be added later without visual drift.
            </p>
          </div>

          <div className="surface-panel">
            <p className="eyebrow">Future-ready integration</p>
            <h3>Room for richer media and product depth</h3>
            <p>
              Product media, application imagery, and 3D-specific modules can be
              expanded without rewriting the foundation.
            </p>
          </div>
        </div>
      </section>

      {children}

      <section className="section">
        <div className="shell cta-banner">
          <SectionHeading
            eyebrow="Next step"
            title="Need a quote or want to discuss the right setup?"
            description="The conversion path stays simple: direct contact first, richer inquiry logic later."
          />
          <div className="cta-banner__actions">
            <ButtonLink href="/contact" label="Open contact" />
            <ButtonLink
              href="/configurator"
              label="View configurator plan"
              variant="secondary"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
