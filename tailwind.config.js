const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["pages/*.js", "pages/**/*.js", "components/*.js", 'layouts/*.js', "./node_modules/flowbite/**/*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
      },
      backgroundImage: {
        texture: 'url(https://thumbs.dreamstime.com/b/%E6%97%A7%E7%99%BD%E5%A2%99-%E6%97%A7%E7%9A%84%E7%99%BD%E5%A2%99%E3%80%81%E7%99%BD%E5%A2%99%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E7%BA%B9%E7%90%86-183179953.jpg)'
      },
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      flexBasis: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
      height: {
        '128': '32rem',
      },
      maxHeight: {
        '128': '32rem',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
};
