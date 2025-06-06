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
});
