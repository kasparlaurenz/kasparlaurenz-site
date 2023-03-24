/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    transitionDuration: {
      DEFAULT: "300ms",
      150: "150ms",
      250: "250ms",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};

module.exports = config;
