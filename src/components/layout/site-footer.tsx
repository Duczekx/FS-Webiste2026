import Link from "next/link";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <div className="site-footer__brand">
          <p className="eyebrow">Premium industrial brand platform</p>
          <h2>{siteConfig.legalName}</h2>
          <p>
            Structured for product expansion, stronger content, and future
            3D-led inquiry workflows.
          </p>
        </div>

        <div className="site-footer__links">
          <div>
            <p className="site-footer__label">Navigation</p>
            {siteConfig.navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>

          <div>
            <p className="site-footer__label">Contact</p>
            <a href={`mailto:${siteConfig.contact.email}`}>
              {siteConfig.contact.email}
            </a>
            <a href={`tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`}>
              {siteConfig.contact.phone}
            </a>
            <p>{siteConfig.contact.location}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
