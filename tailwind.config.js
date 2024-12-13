/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '120': '30rem',
        '136': '34rem',
        '140': '35rem',
      }
    },
  },
  plugins: [],
}

