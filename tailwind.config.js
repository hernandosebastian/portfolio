/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "neue-montreal": ['"Neue Montreal Regular"', "sans-serif"],
        "neue-montreal-italic": ['"Neue Montreal Italic"', "sans-serif"],
        "neue-montreal-light": ['"Neue Montreal Light"', "sans-serif"],
        "neue-montreal-light-italic": [
          '"Neue Montreal Light Italic"',
          "sans-serif",
        ],
        "neue-montreal-medium": ['"Neue Montreal Medium"', "sans-serif"],
        "neue-montreal-medium-italic": [
          '"Neue Montreal Medium Italic"',
          "sans-serif",
        ],
        "neue-montreal-bold": ['"Neue Montreal Bold"', "sans-serif"],
        "neue-montreal-bold-italic": [
          '"Neue Montreal Bold Italic"',
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
