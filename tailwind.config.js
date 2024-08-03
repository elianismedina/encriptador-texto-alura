/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#22d4fd",
      secondary: "#f8fafc",
      white: "#ffffff",
      dark: "#0f172a",
      light: "#475569"
    },
    extend: {
      fontFamily: {
        "krona one": ["Krona One", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    plugins: [],
  },
};
