/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '576px',
      'sm': '808px',
      'md': '1000px',
      'lg': '1160px',
    },
    extend: {
      fontFamily: {
        sans: ['Figtree', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'container-xs': '536px',
        'container-sm': '768px',
        'container-md': '960px',
        'container-lg': '1120px',
      },
    },
  },
  plugins: [],
}

