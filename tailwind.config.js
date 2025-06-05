/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        darkAccent: "#BAC0A3",
        accent: "#1D4D8E",
        brown: "#463F1A",
        customRed: "#9A3412",
        skin: "#EEEBE0",
        uconn: "#0C2443",
        white: "#F8F8FA",
        black: "#030303",
      },
    },
    screens: {
      xs: "320px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1100px",
      // => @media (min-width: 1024px) { ... }

      xl: "1626px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1926px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
