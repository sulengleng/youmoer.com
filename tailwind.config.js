const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["pages/*.js", "pages/**/*.js", "components/*.js", 'layouts/*.js', "./node_modules/flowbite/**/*.js"],
  darkMode: ["class"], // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
      },
      backgroundImage: {
        "obsidian-icon": "url('https://s2.loli.net/2023/01/17/gJhfbt5NCFSYLVj.png')",
        "notion-icon": "url('https://s2.loli.net/2023/01/17/Y2tGjAv8PsxqBeW.png')",
        "discord-icon": "url('https://s2.loli.net/2023/01/17/eQx1i26rJFtSXN4.png')",
        "zotero-icon": "url('https://s2.loli.net/2023/01/17/GupbZ9gQFRkJrEo.png')",
        "readwise-icon": "url('https://s2.loli.net/2023/01/17/rYfeF4aJO8gBAlK.png')",
        "github-icon": "url('https://s2.loli.net/2023/01/17/OJhVlYiXmHksyTr.png')",
        "question": "url('https://s2.loli.net/2023/01/18/2EyOGq6rmaXYRKN.png')",
        "dash-board": "url('https://s2.loli.net/2023/01/13/6tmuThilakOz71D.png')",
        "braun-dot": "url('https://s2.loli.net/2023/01/13/sULPAx5trHCcv4O.png')",
        "camera-white": "url('https://s2.loli.net/2023/01/12/iZfSLYBAb91Ohrw.png')",
        "camera-black": "url('https://s2.loli.net/2023/01/12/o46bSIy2td1a7R8.png')",
        "camera-center": "url('https://s2.loli.net/2023/01/11/wBtCTWhrd1NxMYn.png')",
        "camera-left": "url('https://s2.loli.net/2023/01/11/ZzRYfjyV3b2OI6L.png')",
        "camera-right": "url('https://s2.loli.net/2023/01/11/xWcdqFLvZPMBD43.png')",
        "envelope": "url('https://s2.loli.net/2023/01/07/Lg6OxhpZGSjQqMN.png')",
        "letter-cover": "url('https://s2.loli.net/2023/01/07/NDX421Gl8tPBsao.png')",
        "light-map": "url('https://s2.loli.net/2023/01/04/OA1cXWzPdC4hT8J.png')",
        "dark-map": "url('https://s2.loli.net/2023/01/04/bhlLmytVwx2OJnZ.png')",
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
        '88': '22rem',
        '108': '28rem',
        '112': '31rem',
        '128': '32rem',
      },
      maxHeight: {
        '108': '28rem',
        '112': '31rem',
        '128': '32rem',
      },
      width: {
        '112': '31rem',
        '128': '32rem',
      },
      maxWidth: {
        '112': '31rem',
        '128': '32rem',
      },
      margin: {
        '68': '17rem',
      },
      zIndex: {
        '100': '100',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
