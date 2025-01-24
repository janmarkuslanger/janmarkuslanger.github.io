/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./index.html",  "./src/**/*.{js,ts}"],
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