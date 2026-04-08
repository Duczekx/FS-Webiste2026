import { SectionHeading } from "@/components/ui/section-heading";
import { homePageContent } from "@/content/site";

export function ManufacturerSection() {
  const { manufacturer } = homePageContent;

  return (
    <section className="section">
      <div className="shell manufacturer-layout">
        <div className="surface-panel surface-panel--tall">
          <p className="eyebrow">Production media slot</p>
          <h3>Workshop, fabrication, and quality details.</h3>
          <p>/public/images/about/about-workshop-01.webp</p>
        </div>

        <div className="manufacturer-copy">
          <SectionHeading
            eyebrow="About and production"
            title={manufacturer.title}
            description={manufacturer.description}
          />

          <div className="manufacturer-points">
            <div className="manufacturer-point">
              <h3>Engineering trust</h3>
              <p>
                Product confidence should come from construction and field
                context, not decorative brand language.
              </p>
            </div>
            <div className="manufacturer-point">
              <h3>Future proof media system</h3>
              <p>
                The same section can later support production photography, short
                video loops, or process-led storytelling without redesign.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
