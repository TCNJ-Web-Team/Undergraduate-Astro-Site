/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        xl: "1920px", // Custom size for extra-large screens
        lg: "1281px", // Custom size for large screens
        lgMd: "1050px", // Custom size for medium screens
        md: "900px", // Custom size for medium screens
        sm: "550px", // Custom size for small screens
        // xs: "430px", // Custom size for extra-small screens
      },
      objectPosition: {
        "0-0": "0% 0%",
        "10-0": "10% 0%",
        "20-0": "20% 0%",
        "30-0": "30% 0%",
        "40-0": "40% 0%",
        "50-0": "50% 0%",
        "60-0": "60% 0%",
        "70-0": "70% 0%",
        "80-0": "80% 0%",
        "90-0": "90% 0%",
        "100-0": "100% 0%",
      },
      backgroundImage: {
        yellowWhiteGradient: "linear-gradient(#FDD700 90%, white 90%)",
        yellowWhiteGradientMd:
          "linear-gradient(to top, white 75px, #FDD700 75px)",
        yellowWhiteGradientLg:
          "linear-gradient(to top, white 100px, #FDD700 100px)",
      },

      fontFamily: {
        bitter: ["Bitter", ...defaultTheme.fontFamily.sans],
        domine: ["Domine", ...defaultTheme.fontFamily.sans],
        chunkfive: ["Alfa Slab One", ...defaultTheme.fontFamily.sans],
        alfaslab: ["Alfa Slab One", ...defaultTheme.fontFamily.sans],
        opensans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        interstate: ["Interstate-Condensed", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "custom-16.25": "4.063rem",
      },
      colors: {
        transparent: "transparent",
        // TEXT AND BG
        tcnjyellow: "#FDD700",
        tcnjblue: "#293F6F",
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
  plugins: [require("@tailwindcss/aspect-ratio")],
};
