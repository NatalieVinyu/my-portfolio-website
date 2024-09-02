const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Questrial'],
        mono: ['Reddit Mono']
      },
      "slide-in-left": {
        "0%": {
              visibility: "visible",
              transform: "translate 3d(-100%,0,0)"
        },
        "100%": {
          transform:"translate 3d(0,0,0)"
        }
      }
      
    },
  },
  plugins: [],
};
