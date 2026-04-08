import { PageShell } from "@/components/layout/page-shell";
import { routeContent } from "@/content/site";

export default function ProductsPage() {
  return (
    <PageShell
      eyebrow={routeContent.products.eyebrow}
      title={routeContent.products.title}
      description={routeContent.products.description}
    />
  );
}
