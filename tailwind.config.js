/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx, ts, tsx}"],
  theme: {
    minWidth: {
      "0": "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    container: {
      // padding: "2rem", 
      center: true,
    },
    extend: {},
  },
  plugins: [],
};
