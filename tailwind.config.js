/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#7f7f7f",
      secondary: "#181A1C",
      comp: {
        primary: "#D4D6D7",
        secondary: "#8C9296",
      },
      white: "#fff",
      btn: {
        primary: "#CC0006",
        hover: "#3F7652",
      },
      footer: "#6367695e",
    },
    screens: {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      display: ["last"],
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
