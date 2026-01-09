import { defineConfig, fontProviders } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";
import pagefind from "astro-pagefind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), sitemap(), pagefind()],
  site: "https://programs.tcnj.edu",

  // site: "https://statictest.kinsta.cloud/",
  // base: "/undergraduate",
  output: "static", // Ensures static generation
  trailingSlash: "never", // Ensures no trailing slash in the URL
  redirects: {
    // simplest form → 302 by default
    // "/graduate/test": "https://programs.tcnj.edu",

    // explicit status code
    "/graduate/clinical-mental-health-counseling-post-masters-certificate-online":
      {
        destination:
          "https://programs.tcnj.edu/graduate/clinical-mental-health-counseling-certificate",
        status: 301,
      },
  },

  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Domine",
        cssVariable: "--font-domine",
        weights: [400, 500, 600, 700],
        styles: ["normal"],
        // formats: ["woff2", "woff"],
        optimizedFallbacks: true,
      },
      {
        provider: fontProviders.google(),
        name: "Open Sans",
        cssVariable: "--font-opensans",
        weights: [400, 500, 600],
        styles: ["normal", "italic"],
        // formats: ["woff2", "woff"],
        optimizedFallbacks: true,
      },
      {
        provider: fontProviders.google(),
        name: "Alfa Slab One",
        cssVariable: "--font-alfaslab",
        weights: [400],
        styles: ["normal"],
        // formats: ["woff2", "woff"],
        optimizedFallbacks: true,
      },
    ],
  },
  // build: { redirects: false },
});
