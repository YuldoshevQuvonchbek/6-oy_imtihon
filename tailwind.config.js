/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          lg: "1200px",
        },
        padding: "20px",
      },
    },
    colors: {
      Secondary: "#F7F7F7",
      vivaldiRed: "#ea3838",
      argent: "#888888",
      Black: "#19191C",
      white: " #ffffff",
      shutterGrey: "#797d7e",
      placebo: "#e7e7e7",
    },
  },
  plugins: [],
};
