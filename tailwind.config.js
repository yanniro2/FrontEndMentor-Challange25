/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    { pattern: /text-(Blue|Yellow|Green|Red)/ }

  ],
  theme: {
    screens: {
      "Mobile": { "min": "320px", "max": "800px" },
      "Tablet": { "min": "800px", "max": "1200px" },
      "Desktop": "1440px",
    },
    colors: {

      // ### Primary
      "Light-red": "hsl(0, 100%, 67%)",
      "Light-red-2": "hsl(0, 100%, 95%)",
      "Orangey-yellow": "hsl(39, 100%, 56%)",
      "Green-teal": "hsl(166, 100%, 37%)",
      "Cobalt-blue": "hsl(234, 85%, 45%)",

      //" ## Gradients
      "Light-slate-blue": "hsl(252, 100%, 67%)",
      "Light-royal-blue": "hsl(241, 81%, 54%)",
      "Violet-blue": "hsla(256, 72%, 46%, 1)",
      "Persian-blue": "hsla(241, 72%, 46%, 0)",

      // ### Neutral
      "White": "hsl(0, 0%, 100%)",
      "Pale-blue": "hsl(221, 100%, 96%)",
      "Light-lavender": "hsl(241, 100%, 89%)",
      "Dark-gray-blue": "hsl(224, 30%, 27%)",
      "Dark-gray-blue-2": "hsl(224, 30%, 70%)",

      // Section Colors
      "Blue": "#1125D6",
      "Blue-2": "#112500",
      "Yellow": "#FFB21E",
      "Green": "#00BB8F",
      "Red": "#F55F55",
      "Red-2": "#F55F80",

    },
    fontSize: {
      ms: "18px",
    },
    fontWeight: {
      m: 500,
      l: 700,
      xl: 800,
    },
    fontFamily: {
      hanken: ["Hanken Grotesk", "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}
