var md = window.markdownit({
  html: true, //可以识别html
  linkify: true,//自动检测像链接的文本
  breaks: true,//回车换行
  typographer: true,//优化排版，标点
})