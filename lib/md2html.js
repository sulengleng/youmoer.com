import MarkdownIt from "markdown-it";

const md = new MarkdownIt({
  html: true,
  linkify: true,
  breaks: true,
  xhtmlOut: true,
  typographer: true,
});

export default async function md2html(markdown) {
  const result = await MarkdownIt.render().use(html).process(markdown);
  return result.toString();
}