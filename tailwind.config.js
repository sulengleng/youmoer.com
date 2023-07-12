const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss");

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
        'gradient-conic': 'conic-gradient(var(--conic-position), var(--tw-gradient-stops))',
        "last-fm": "url('https://s2.loli.net/2023/01/22/9TJOuQkPseUNY25.png')",
        "apple-music": "url('https://s2.loli.net/2023/01/22/DHFc5qBmQMILf8t.png')",
        "obsidian-icon": "url('https://s2.loli.net/2023/01/17/gJhfbt5NCFSYLVj.png')",
        "obsidian-icon-white": "url('https://s2.loli.net/2023/01/19/nput4Jh5ProCljH.png')",
        "notion-icon": "url('https://s2.loli.net/2023/01/17/Y2tGjAv8PsxqBeW.png')",
        "discord-icon": "url('https://s2.loli.net/2023/01/17/eQx1i26rJFtSXN4.png')",
        "discord-icon-black": "url('https://s2.loli.net/2023/01/19/R1gdv5A6wO9kozs.png')",
        "zotero-icon": "url('https://s2.loli.net/2023/01/17/GupbZ9gQFRkJrEo.png')",
        "readwise-icon": "url('https://s2.loli.net/2023/01/17/rYfeF4aJO8gBAlK.png')",
        "readwise-icon-dark": "url('https://s2.loli.net/2023/01/19/JVYUhcwtvEA5mx3.png')",
        "github-icon": "url('https://s2.loli.net/2023/01/17/OJhVlYiXmHksyTr.png')",
        "figma-icon": "url('https://s2.loli.net/2023/01/19/z9vCyOjUK1BTakw.png')",
        "figma-icon-white": "url('https://s2.loli.net/2023/01/19/fh2r4SZUDlvcjIo.png')",
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
        "dark-cover": "url('https://s2.loli.net/2023/02/07/DaV2AxJ178cdjSL.png')",
        "light-cover": "url('https://s2.loli.net/2023/02/07/PylDRiS6h2d8sqX.png')",
        texture: 'url(https://thumbs.dreamstime.com/b/%E6%97%A7%E7%99%BD%E5%A2%99-%E6%97%A7%E7%9A%84%E7%99%BD%E5%A2%99%E3%80%81%E7%99%BD%E5%A2%99%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E7%BA%B9%E7%90%86-183179953.jpg)',
        "gradient-1":'url(https://s2.loli.net/2023/07/07/UKDQWpaNHbxqSAe.jpg)',
        "white-star":'url(https://s2.loli.net/2023/07/08/j3qRMCnYUfJGum7.png)',
        "black-star":'url(https://s2.loli.net/2023/07/08/zNB3VLQaDM7omcp.png)',
        "book-store":'url(https://s2.loli.net/2023/07/10/5qA2rgZ6WXT3Czc.png)',
        "dark-board":'url(https://s2.loli.net/2023/07/13/yAVbuhS7CO2oewx.png)',
      },
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      fontFamily: {
        'douyu': ['DOUYUFont', 'sans-serif'],
        'thunder': ['Thunder', 'sans-serif'],
        'tiejili': ['tiejili-regular', 'sans-serif']
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
