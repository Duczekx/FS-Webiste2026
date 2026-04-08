import { SectionHeading } from "@/components/ui/section-heading";
import { homePageContent } from "@/content/site";

export function ApplicationsSection() {
  return (
    <section className="section">
      <div className="shell applications-layout">
        <div>
          <SectionHeading
            eyebrow="Applications and gallery"
            title="Real field imagery should prove scale, use, and credibility."
            description="This section is intentionally designed around photography-first storytelling rather than a busy UI treatment."
          />

          <ul className="application-list">
            {homePageContent.applications.map((application) => (
              <li key={application}>{application}</li>
            ))}
          </ul>
        </div>

        <div className="gallery-stack" aria-label="Gallery placeholders">
          <div className="gallery-stack__item">
            <span>/public/images/gallery/gallery-tractor-action-01.webp</span>
          </div>
          <div className="gallery-stack__item">
            <span>/public/images/gallery/gallery-industrial-site-02.webp</span>
          </div>
          <div className="gallery-stack__item gallery-stack__item--wide">
            <span>/public/images/gallery/gallery-parking-lot-03.webp</span>
          </div>
        </div>
      </div>
    </section>
  );
}
