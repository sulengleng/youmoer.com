import {remark} from "remark";
import html from "remark-html";
import remarkOembed from "remark-oembed";


export default async function md2html(markdown) {
  const result = await 
    remark()
      .use(html)
      .use(remarkOembed)
      .process(markdown);
  return result.toString();
}