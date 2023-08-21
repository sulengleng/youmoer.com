import { writeFileSync } from "fs";
import {getAllPosts} from "pages/api/blog";
import RSS from "rss";
export default async function getRSS() {
  const siteURL = "https://yeyouchuan.me";
  const allBlogs = getAllPosts();

  const feed = new RSS({
    title: "夜游船渡口",
    description: "your description",
    site_url: siteURL,
    feed_url: `${siteURL}/feed.xml`,
    language: "en",
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Your Name`,
  });

  allBlogs.map((post) => {
    feed.item({
      title: post.title,
      url: `${siteURL}/blog/${post.slug}`,
      date: post.date,
      description: post.excerpt,
    });
  });

  writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
}
