import { PageShell } from "@/components/layout/page-shell";
import { routeContent } from "@/content/site";

export default function AboutPage() {
  return (
    <PageShell
      eyebrow={routeContent.about.eyebrow}
      title={routeContent.about.title}
      description={routeContent.about.description}
    />
  );
}
