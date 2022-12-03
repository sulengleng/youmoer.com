import {remark} from "remark";
import html from "remark-html";
import remarkOembed from "remark-oembed";
import remarkDirective from "remark-directive";
import remarkDirectiveToHtml from 'remark-directive-to-html'
import {unified} from 'unified'

export default async function md2html(markdown) {
  const result = await 
    remark()
      .use(html)
      .use(remarkOembed)
      .use(remarkDirectiveToHtml)
      .use(myRemarkPlugin)
      .process(markdown);
    unified()
      .use(remarkDirectiveToHtml)
      .use(myRemarkPlugin)
      .process(markdown);
  return result.toString();
}
