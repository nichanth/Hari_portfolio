/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00E5FF",
        secondary: "#0A192F",
        accent: "#64FFDA",
        dark: "#020617",
      },
    },
  },
  plugins: [],
};