const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#EA3C3C",
        },
      },
    },
    // colors: {
    //   black: "#503535", // Overwrite the default black color
    // },
  },
  plugins: [],
});
