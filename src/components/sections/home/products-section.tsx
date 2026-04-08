import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { homePageContent } from "@/content/site";

export function ProductsSection() {
  return (
    <section className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Product overview"
          title="Structured product blocks, ready for detail pages and selective 3D."
          description="The range overview is designed as a clean system now, with space for specifications, media, and later product-depth modules."
        />

        <div className="product-grid">
          {homePageContent.products.map((product) => (
            <article key={product.slug} className="product-card">
              <div className="product-card__media">
                <span>Product visual placeholder</span>
              </div>
              <div className="product-card__body">
                <p className="eyebrow">{product.emphasis}</p>
                <h3>{product.name}</h3>
                <p>{product.summary}</p>
                <Link href="/products" className="text-link">
                  View product structure
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
