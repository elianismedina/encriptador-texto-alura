/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#22d4fd",
      secondary: "#cbd5e1",
      white: "#ffffff",
      dark: "#0f172a",
      light: "#475569"
    },
    extend: {
      fontFamily: {
        "krona one": ["Krona One", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        chauphilomeneone: ["Chau Philomene One", "sans-serif"],
      },
    },
    plugins: [],
  },
};
