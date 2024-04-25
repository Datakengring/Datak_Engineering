/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#080051",
        secondary: "#F2F2F2",
        textColorPrimary: "#333333",
        linearOne: "#080051",
        linearTwo: "#6252F6",
      },
    },
  },
  plugins: [],
};
