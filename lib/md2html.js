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
      .use(remarkDirective)
      .use(myRemarkPlugin)
      .process(markdown);
    unified()
      .use(remarkDirectiveToHtml)
      .use(myRemarkPlugin)
      .use(remarkDirective)
      .process(markdown);
  return result.toString();
}

import function myRemarkPlugin() {
  return (tree, file) => {
    visit(tree, (node) => {
      if (
        node.type === 'textDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'containerDirective'
      ) {
        if (node.name !== 'applemusic') return

        const data = node.data || (node.data = {})
        const attributes = node.attributes || {}
        const id = attributes.id

        if (node.type === 'textDirective') file.fail('Text directives for `apple music` not supported', node)
        if (!id) file.fail('Missing album id', node)

        data.hName = 'iframe'
        data.hProperties = {
          src: 'https://embed.music.apple.com/gb/album/' + id,
          height: 450,
          frameBorder: 0,
          allow: "autoplay *; encrypted-media *; fullscreen *; clipboard-write",
          style:"width:100%; max-width:660px; overflow:hidden; background:transparent;",
          sandbox:"allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        }
      }
    })
  }
}