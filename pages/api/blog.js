import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "data/blog");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
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
