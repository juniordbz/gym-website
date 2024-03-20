/** @type {import('tailwindcss').Config}*/
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto Condensed', 'sans-serif'],
      },
      backgroundImage: {
        musculacao: "url('./src/assets/musculacao.jpg')",
      },
    },
  },

  plugins: [],
}

module.exports = config
