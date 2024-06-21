/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '22': '90px',
        '26': '105px',
        '30': '120px',
        '34': '136px',
        '50': '200px',
        '100': '570px',
      }
    },
  },
  plugins: [],
}

