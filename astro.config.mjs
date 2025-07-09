import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), sitemap()],
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
  // build: { redirects: false },
});
