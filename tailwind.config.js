/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#E6E6FA',
          DEFAULT: '#8A2BE2',
          dark: '#4B0082',
        }
      },
      gradientColorStops: {
        'gradient-start': '#FFFFFF',
        'gradient-mid': '#E6E6FA',
        'gradient-end': '#4169E1',
      }
    },
  },
  plugins: [],
} 