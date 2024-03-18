/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'background-light': '#f1e9f7',
        'background-dark': '#100816',

        'primary-onLight': '#120c18',
        'primary-onDark': '#ede7f3',

        'secondary-onLight': '#7a6095',
        'secondary-onDark': '#b598d1',

        primary: '#511f7a',

        'active': '#b822ff',
      },
    },
  },
  plugins: [],
}

