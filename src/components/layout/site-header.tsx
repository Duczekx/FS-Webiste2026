import Link from "next/link";
import { siteConfig } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link href="/" className="brand-lockup" aria-label={siteConfig.name}>
          <span className="brand-lockup__mark" />
          <span className="brand-lockup__text">{siteConfig.name}</span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="site-nav__link">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="site-header__cta">
          Inquiry
        </Link>
      </div>
    </header>
  );
}
