import { SectionHeading } from "@/components/ui/section-heading";
import { homePageContent } from "@/content/site";

export function AdvantagesSection() {
  return (
    <section className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Why it works"
          title="A clear trust layer before the catalog gets deeper."
          description="The homepage should first communicate application fit, construction confidence, and long-term product seriousness."
        />

        <div className="advantage-grid">
          {homePageContent.advantages.map((item, index) => (
            <article key={item.title} className="surface-panel">
              <p className="advantage-index">{String(index + 1).padStart(2, "0")}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
