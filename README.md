# Flachenschneeschieber 2026

Premium industrial brand site foundation built with Next.js App Router, TypeScript, and a maintainable dark-first design system.

## Project goals

- mobile-first implementation with intentional tablet and desktop behavior
- modular section architecture for brand and product storytelling
- reusable design tokens and shared spacing rules
- clean path for future product expansion
- future-ready structure for selective 3D viewers and a separate configurator
- GitHub and Vercel-friendly deployment setup

## Key structure

```text
src/
  app/                  routes and layouts
  components/           reusable UI, layout, and homepage sections
  content/              structured page and navigation data
public/
  brand/logo/           web-ready logos
  images/               homepage, product, gallery, about assets
  models/products/      optimized web 3D files
assets-source/
  brand/                original brand files
  photos/               raw or editable source photography
  video/                source video files
  3d/                   Inventor, Blender, textures, and export pipeline
```

## Asset paths

- logos: `public/brand/logo`
- homepage images: `public/images/home`
- gallery images: `public/images/gallery`
- product images: `public/images/products`
- about and production images: `public/images/about`
- web 3D models: `public/models/products/<product-slug>`

Raw source files should go into `assets-source/` and are excluded from Vercel deployments via `.vercelignore`.
