import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";
const BASE_URL = "/ug-programs/";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  site: "http://academics.tcnj.edu",
  base: BASE_URL,
  output: "static", // ensures a static build
  // site: "https://statictest.kinsta.cloud/",
  // base: "/undergraduate",
  vite: {
    define: {
      __BASE_URL__: JSON.stringify(BASE_URL),
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `$base: '${BASE_URL}';`,
        },
      },
    },
  },
});
