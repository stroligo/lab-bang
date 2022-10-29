/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,less}",
    "./src/*.{html,js,less}",
    "./build/*.{html,js,less}",
    "./*",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
