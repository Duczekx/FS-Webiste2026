import { PageShell } from "@/components/layout/page-shell";
import { routeContent } from "@/content/site";

export default function ContactPage() {
  return (
    <PageShell
      eyebrow={routeContent.contact.eyebrow}
      title={routeContent.contact.title}
      description={routeContent.contact.description}
    />
  );
}
