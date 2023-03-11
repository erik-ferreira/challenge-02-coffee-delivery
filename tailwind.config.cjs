/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto"],
        cursive: ["'Baloo 2'"],
      },
      colors: {
        white: "#FFFFFF",
        yellow: {
          600: "#C47F17",
          500: "#DBAC2C",
          100: "#F1E9C9",
        },
        violet: {
          900: "#4B2995",
          600: "#8047F8",
          200: "#EBE5F9",
        },
        brow: {
          900: "#272221",
          600: "#403937",
          500: "#574F4D",
          400: "#8D8686",
        },
        gray: {
          250: "#D7D5D5",
          200: "#E6E5E5",
          150: "#EDEDED",
          100: "#F3F2F2",
          50: "#FAFAFA",
        },
      },
      gridTemplateColumns: {
        "coffees-responsive": "repeat(auto-fit, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [],
};
