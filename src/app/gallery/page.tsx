import { PageShell } from "@/components/layout/page-shell";
import { routeContent } from "@/content/site";

export default function GalleryPage() {
  return (
    <PageShell
      eyebrow={routeContent.gallery.eyebrow}
      title={routeContent.gallery.title}
      description={routeContent.gallery.description}
    />
  );
}
