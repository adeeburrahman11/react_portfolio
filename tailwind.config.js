/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        "baby-blue": "#ECF1F2",
        "cool-grey": "#53565A",
        "a-yellow": "#F4D800",
        "a-black": "#050707",
      },
    },
  },
  plugins: [tailwindScrollbar],
};
