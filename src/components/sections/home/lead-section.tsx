import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { homePageContent } from "@/content/site";

export function LeadSection() {
  const { lead } = homePageContent;

  return (
    <section className="section">
      <div className="shell lead-panel">
        <SectionHeading
          eyebrow="Contact and inquiry"
          title={lead.title}
          description={lead.description}
        />

        <div className="lead-panel__actions">
          <ButtonLink href={lead.primaryCta.href} label={lead.primaryCta.label} />
          <ButtonLink
            href={lead.secondaryCta.href}
            label={lead.secondaryCta.label}
            variant="secondary"
          />
        </div>
      </div>
    </section>
  );
}
