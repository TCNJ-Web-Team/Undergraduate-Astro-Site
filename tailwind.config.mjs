/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        bitter: ["Bitter", ...defaultTheme.fontFamily.sans],
        chunkfive: ["Chunk Five", ...defaultTheme.fontFamily.sans],
        opensans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "custom-16.25": "4.063rem",
      },
      colors: {
        transparent: "transparent",
        // TEXT AND BG
        tcnjyellow: "#FDD700",
        tcnjblue: "#464E7D",
        // BG COLORS
        lightgrey: "#F1F1F1",
        darkgrey: "#C8DAE6",
        // TEXT COLORS
        darkgrey: "#2E2E2E",
        primarylinkblue: "#33739F",
        darklinkblue: "#2B6388",
        lightlinkblue: "#9BD0F3",
      },
    },
  },
  plugins: [],
};
