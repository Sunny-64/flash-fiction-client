/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors : {
      "primary" : "#ffffff",
      "secondary" : "#000000", 
      "accent-color" : "#7E60D0"
    },
    extend: {},
  },
  plugins: [],
}