/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans"],
      },
    },
    colors: {
      hoki: {
        50: "#C5D9E0",
        100: "#90B2BE",
        200: "#608C9A",
        300: "#3D7081",
        400: "#215567",
        500: "#0F3D4D",
        600: "#0B2E3B",
        700: "#08212B",
        800: "#05161D",
        900: "#030C10",
      },
    },
  },
  plugins: [],
};
