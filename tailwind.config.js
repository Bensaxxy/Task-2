/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "poppins",
    },
    extend: {
      colors: {
        primary: "#606060",
        secondary: "#DBDBDB",
        nutural: "#D7FAFF",
        white: "#F5F5F5",
      },
      container: {
        center: true,
        padding: { DEFAULT: "1rem", sm: "1rem" },
      },
    },
  },
  plugins: [],
};
