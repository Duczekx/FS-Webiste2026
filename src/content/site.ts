export const siteConfig = {
  name: "Flachenschneeschieber",
  legalName: "Flachenschneeschieber",
  description:
    "Premium industrial snow plows for professional winter service, engineered for demanding commercial and municipal use.",
  locale: "de-DE",
  contact: {
    email: "info@flaechenschneeschieber.de",
    phone: "+49 (0)000 000 000",
    location: "Germany",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Applications", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Configurator", href: "/configurator" },
  ],
} as const;

export const homePageContent = {
  hero: {
    eyebrow: "Professional winter service equipment",
    title: "Premium snow plows for serious winter service operations.",
    description:
      "Built for mounted real-world use on commercial, industrial, and municipal ground where reliability, visibility, and control matter every day.",
    primaryCta: {
      label: "Request a quote",
      href: "/contact",
    },
    secondaryCta: {
      label: "Explore products",
      href: "/products",
    },
    mediaLabel: "Real mounted application in winter conditions",
    mediaHint: "Professional winter service in real operating context",
  },
  advantages: [
    {
      title: "Professional durability",
      description:
        "Developed for repeated daily use in winter service environments where reliability matters more than marketing.",
    },
    {
      title: "Precise construction",
      description:
        "A restrained engineering-first product language that communicates strength, fit, and long-term maintainability.",
    },
    {
      title: "Application focused",
      description:
        "Built to perform across parking areas, service yards, industrial sites, and other commercial surfaces.",
    },
    {
      title: "Manufacturer credibility",
      description:
        "Prepared to showcase workshop, production, and future fabrication proof points as the content library grows.",
    },
  ],
  products: [
    {
      slug: "commercial-series",
      name: "Commercial Series",
      summary:
        "A flexible product presentation pattern for standard business and contractor use cases.",
      emphasis: "Best for parking areas and private winter service fleets.",
    },
    {
      slug: "municipal-series",
      name: "Municipal Series",
      summary:
        "Structured for heavier-duty use, larger working widths, and future product option depth.",
      emphasis: "Best for municipal, industrial, and public-area maintenance.",
    },
    {
      slug: "custom-configurations",
      name: "Custom Configurations",
      summary:
        "Prepared for option-driven product pages and later 3D-enabled lead generation.",
      emphasis: "Best for customers with specialized mounting or workflow requirements.",
    },
  ],
  applications: [
    "Parking areas and retail service zones",
    "Industrial yards and logistics surfaces",
    "Municipal maintenance environments",
    "Commercial winter service operations",
  ],
  manufacturer: {
    title: "A real manufacturer, not just a reseller.",
    description:
      "This section is prepared to combine workshop imagery, construction details, and production credibility into a calm premium narrative.",
  },
  lead: {
    title: "Start with a direct project inquiry.",
    description:
      "The current lead path is designed around direct contact and quote requests, with room to evolve into a full configurator workflow later.",
    primaryCta: {
      label: "Contact the team",
      href: "/contact",
    },
    secondaryCta: {
      label: "View gallery",
      href: "/gallery",
    },
  },
} as const;

export const routeContent = {
  products: {
    eyebrow: "Product platform",
    title: "A product architecture designed to scale with the catalog.",
    description:
      "This section is structured for category pages, future product detail pages, technical data, and media upgrades without broad refactors.",
  },
  gallery: {
    eyebrow: "Applications",
    title: "Real operating context will be a core trust signal.",
    description:
      "The gallery is reserved for authentic field imagery showing snow plows mounted on vehicles and working in commercial or industrial settings.",
  },
  about: {
    eyebrow: "About and production",
    title: "Manufacturing credibility belongs in the main brand narrative.",
    description:
      "This page is prepared for production imagery, workshop process, engineering proof, and the company story as content becomes available.",
  },
  contact: {
    eyebrow: "Lead generation",
    title: "Clear next steps, low friction, and direct inquiry routing.",
    description:
      "Contact should remain simple and credible: direct channels first, with structured inquiry capture as the project matures.",
  },
  configurator: {
    eyebrow: "Future 3D workflow",
    title: "Prepared for a selective product viewer and a dedicated configurator.",
    description:
      "The future configurator will live as a separate quote-generation experience, not as a heavy dependency of the homepage.",
  },
} as const;
