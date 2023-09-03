import {useRouter} from 'next/router';
import { getPostBySlug, getAllPosts } from "pages/api/blog";
import md2html from "lib/md2html";
import { BlogList, PostContent } from 'components';
import { NextSeo } from "next-seo";

export default function Post({ allPosts, post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <div>Error</div>;
  }

  return (
    <div className="flex w-full">
      <NextSeo
        title={`${post.title} - 油墨儿`}
        description={post.excerpt || post.content.slice(0, 200) || ""}
        openGraph={{
          site_name: `${post.title} - 油墨儿`,
          title: `${post.title} - 油墨儿`,
          description: post.excerpt || post.content.slice(0, 200) || "",
          images: [
            {
              url: post.ogImage ?? "https://s2.loli.net/2023/07/10/5qA2rgZ6WXT3Czc.png",
              width: 800,
              height: 600,
              alt: "油墨儿 for Twitter",
            },
          ],
        }}
        twitter={{
          handle: "@2youmoer",
          site: "@2youmoer",
          cardType: "summary_large_image",
        }}
      />
      <BlogList data={allPosts} activeSlug={post?.slug} />
      <PostContent post={post} slug={post?.slug} />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "image",
    "excerpt",
    "content",
    "link",
    "ogImage"
  ]);

  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "image",
    "content",
    "excerpt",
    "link",
    "ogImage"
  ]);

  const content = await md2html(post.content || post.excerpt || "");

  return {
    props: {
      allPosts,
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "image",
    "excerpt",
    "content",
    "ogImage",
  ]);
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          allPosts,
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
