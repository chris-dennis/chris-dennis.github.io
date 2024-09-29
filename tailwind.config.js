/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'varela-round': ['Varela Round', 'sans-serif'], // Add your custom font here
      },
    },
  },
  plugins: [],
}

