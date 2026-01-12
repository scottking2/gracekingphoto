/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#f6f3ee',
        'light-brown': '#d2c5b9',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'], // Close match to La Luxes Serif
        fjalla: ['Fjalla One', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.3em',
        ultra: '0.4em',
      },
    },
  },
  plugins: [],
};
