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
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'], // Free alternative to La Luxes Serif
        light: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
