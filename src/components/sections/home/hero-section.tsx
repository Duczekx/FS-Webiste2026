import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { homePageContent } from "@/content/site";

export function HeroSection() {
  const { hero } = homePageContent;

  return (
    <section className="hero">
      <div className="hero__stage">
        <div className="hero__backdrop" aria-hidden="true" />

        <div className="shell">
          <div className="hero__panel">
            <div className="hero__inner">
              <div className="hero__copy">
                <p className="eyebrow">{hero.eyebrow}</p>
                <h1 className="hero__title">{hero.title}</h1>
                <p className="hero__description">{hero.description}</p>

                <div className="hero__actions">
                  <ButtonLink
                    href={hero.primaryCta.href}
                    label={hero.primaryCta.label}
                  />
                  <ButtonLink
                    href={hero.secondaryCta.href}
                    label={hero.secondaryCta.label}
                    variant="secondary"
                  />
                </div>
              </div>

              <div className="hero__media" aria-label={hero.mediaLabel}>
                <div className="hero__media-frame">
                  <Image
                    src="/images/home/hero-mounted-plow-01.jpg"
                    alt="Mounted snow plow on a working vehicle in winter conditions"
                    fill
                    priority
                    sizes="(min-width: 1280px) 46vw, (min-width: 768px) 100vw, 100vw"
                    className="hero__image"
                  />
                  <div className="hero__media-overlay">
                    <p>{hero.mediaLabel}</p>
                    <span>{hero.mediaHint}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
