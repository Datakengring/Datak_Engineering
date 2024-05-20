/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#080051",
        secondary: "#F2F2F2",
        tertiary: "#FCFCFC",
        textColorPrimary: "#333333",
        linearOne: "#080051",
        linearTwo: "#6252F6",
        yellow: "#EAA508",
      },
      boxShadow: {
        "2xl": "2px 2px 30px 4px rgb(0 0 0 / 0.25)",
      },
    },
  },
  plugins: [],
};
