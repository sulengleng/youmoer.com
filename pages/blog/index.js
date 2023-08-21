import {BlogList} from 'components'
import {getAllPosts} from "pages/api/blog"
import {NextSeo} from "next-seo";

export default function Blog({ allPosts }) {
  return (
    <>
      <NextSeo
        title="Blog - 夜游船"
        description="欢迎来到夜游船的个人网站，我是学生、创造者、设计师"
        openGraph={{
          site_name: "Blog - 夜游船",
          title: "Blog - 夜游船",
          description:
            "欢迎来到夜游船的个人网站，我是学生、创造者、设计师",
        }}
        twitter={{
          handle: "@yeyouchuan",
          site: "@yeyouchuan",
          cardType: "summary_large_image",
        }}
      />

      <BlogList data={allPosts} />
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "image",
    "excerpt",
    "external"
  ]);

  return {
    props: { allPosts },
  };
}

import RSS from 'rss'

const getRSS = async () => {
  const feed = new RSS({
    title: "夜游船渡口",
    description: '随便写东西的地方',
    site_url: 'https://yeyouchuan.me/',
    feed_url: 'https://yeyouchuan.me/feed.xml',
    language: 'cn',
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, 夜游船`
  });

  const data = await fetchData() // 获取文章数据才能填充 RSS feed
  // 假设 data 是一个类型为文章的数组：
  data.forEach((post) => {
    feed.item({
      title: post.title, // 文章名
      guid: post.id, // 文章 ID
      url: `https://yeyouchuan.me/blog/${post.slug}`, // 文章的链接
      description: post.description, // 文章的介绍，如果有的话
      date: post.date// 文章的发布时间
    })
  })

  return new Response(feed.xml(), {
    headers: {
      'content-type': 'application/xml'
    }
  })
}
