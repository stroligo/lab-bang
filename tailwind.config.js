/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,less}",
    "./src/*.{html,js,less}",
    "./src/less/*.{html,js,less}",
    "./build/*.{html,js,less}",
    "./index.html",
    "./game.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
