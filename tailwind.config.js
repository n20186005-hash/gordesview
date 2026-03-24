/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          50: '#faf8f5',
          100: '#f0ebe3',
          200: '#e0d5c6',
          300: '#c9b8a0',
          400: '#b39a7a',
          500: '#a08563',
          600: '#8a6f52',
          700: '#735a44',
          800: '#5f4a3a',
          900: '#503f33',
        },
      },
    },
  },
  plugins: [],
};
