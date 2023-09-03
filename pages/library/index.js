import {MusicList} from 'components'
import {getAllPosts} from "pages/api/music"
import {NextSeo} from "next-seo";

export default function Home({ allPosts }) {
  return (
    <>
      <NextSeo
        title="书 - 油墨儿"
        description="欢迎来到油墨儿的个人网站"
        openGraph={{
          site_name: "书 - 油墨儿",
          title: "书 - 油墨儿",
          description:
            "欢迎来到油墨儿的个人网站",
        }}
        twitter={{
          handle: "@2youmoer",
          site: "@2youmoer",
          cardType: "summary_large_image",
        }}
      />

      <MusicList allPosts={allPosts} />
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
    "icon",
    "content",
  ]);

  return {
    props: { allPosts },
  };
}