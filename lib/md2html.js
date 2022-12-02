var md = window.markdownit({
  html: true, //可以识别html
  linkify: true,//自动检测像链接的文本
  breaks: true,//回车换行
  typographer: true,//优化排版，标点
  //代码高亮
  highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
          try {
              return '<pre class="hljs"><code>' +
                  hljs.highlight(lang, str, true).value +
                  '</code></pre>';
          } catch (__) {}
      }
      return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  }
})
.use(window.markdownitSub)
.use(window.markdownitSup)
.use(window.markdownitFootnote)
.use(window.markdownitDeflist)
.use(window.markdownitTaskLists)
.use(window.markdownitMark)
.use(window.markdownItAnchor, {
  permalink: false,
  permalinkBefore: false,
  permalinkSymbol: '#'
})
.use(window.markdownItTocDoneRight, {
  containerClass: 'toc',
  containerId: 'toc',
  listType: 'ul',
  listClass: 'listClass',
  itemClass: 'itemClass',
  linkClass: 'linkClass',
  callback: function (html, ast) {
  //把目录单独列出来
      left.innerHTML = html;
  }
});