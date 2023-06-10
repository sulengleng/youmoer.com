import RSS from 'rss'
import { getStaticProps } from "../blog/[slug]";

export async function GET() {
  const feed = new RSS({
    title: '夜游船的个人网站',
    description: '夜游船的个人网站',
    site_url: 'https://yeyouchuan.me', // 你的网站域名
    feed_url: 'https://yeyouchuan.com/feed.xml', // 尽可能用绝对 URL
    language: 'zh-CN', // 网站语言代码
    image_url: 'https://yourdomain.com/opengraph-image.png', // 放一个叫 opengraph-image.png 的1200x630尺寸的图片到你的 app 目录下即可
    generator: 'PHP 9.0', // 想写什么就写什么，也可以不提供
  })

  const data = await getStaticProps()
    data.forEach((post: any) => {
        feed.item({
            title: post.title,
            description: post.excerpt,
            url: post.slug,
            date: post.date,
        })
    })
 
  return new Response(feed.xml(), {
    headers: {
      'content-type': 'application/xml'
    }
  })
}