const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["pages/*.js", "pages/**/*.js", "components/*.js", 'layouts/*.js'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
      },
      backgroundImage: {
        texture: 'url(https://thumbs.dreamstime.com/b/%E6%97%A7%E7%99%BD%E5%A2%99-%E6%97%A7%E7%9A%84%E7%99%BD%E5%A2%99%E3%80%81%E7%99%BD%E5%A2%99%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E7%BA%B9%E7%90%86-183179953.jpg)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
