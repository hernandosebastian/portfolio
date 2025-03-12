/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Neue Montreal Regular"', "sans-serif"],
        "sans-italic": ['"Neue Montreal Italic"', "sans-serif"],
        "sans-light": ['"Neue Montreal Light"', "sans-serif"],
        "sans-light-italic": ['"Neue Montreal Light Italic"', "sans-serif"],
        "sans-medium": ['"Neue Montreal Medium"', "sans-serif"],
        "sans-medium-italic": ['"Neue Montreal Medium Italic"', "sans-serif"],
        "sans-bold": ['"Neue Montreal Bold"', "sans-serif"],
        "sans-bold-italic": ['"Neue Montreal Bold Italic"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
