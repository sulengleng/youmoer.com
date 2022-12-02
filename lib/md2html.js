import {remark} from "remark";
import html from "remark-html";
import codeExtra from "remark-code-extra";

export default async function md2html(markdown) {
  const result = await 
    remark()
    .use(html)
    .process(markdown)
    .use(codeExtra, {
      transform: node => node.meta ? ({
        after: [
          {
            type: 'element',
            tagName: 'a',
            properties: {
              href: node.meta
            },
            children: [{
              type: 'text',
              value: 'View on Stack Overflow'
            }]
          }
        ]
      }) : null
    })
  return result.toString();
}