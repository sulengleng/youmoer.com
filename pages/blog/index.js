import {BlogList} from 'components'
import {getAllPosts} from "pages/api/blog"
import {NextSeo} from "next-seo";

export default function Blog({ allPosts }) {
  return (
    <>
      <NextSeo
        title="Blog - 油墨儿"
        description="欢迎来到油墨儿的个人网站"
        openGraph={{
          site_name: "Blog - 油墨儿",
          title: "Blog - 油墨儿",
          description:
            "欢迎来到油墨儿的个人网站",
        }}
        twitter={{
          handle: "@2youmoer",
          site: "@2youmoer",
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

