import { PageShell } from "@/components/layout/page-shell";
import { routeContent } from "@/content/site";

export default function ConfiguratorPage() {
  return (
    <PageShell
      eyebrow={routeContent.configurator.eyebrow}
      title={routeContent.configurator.title}
      description={routeContent.configurator.description}
    />
  );
}
