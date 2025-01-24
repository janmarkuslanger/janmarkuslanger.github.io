/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./*.html", "./src/**/*.{js,ts}"],
    theme: {
      extend: {},
    },
    daisyui: {
      themes: ["cyberpunk"],
    },
    plugins: [
      require('daisyui')
    ],
  };