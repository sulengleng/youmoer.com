import {MusicList} from 'components'
import {getAllPosts} from "pages/api/music"
import {NextSeo} from "next-seo";

export default function Home({ allPosts }) {
  return (
    <>
      <NextSeo
        title="唱片库 - 油墨儿"
        description="欢迎来到油墨儿的个人网站，我是学生、创造者、设计师"
        openGraph={{
          site_name: "唱片库 - 油墨儿",
          title: "唱片库 - 油墨儿",
          description:
            "欢迎来到油墨儿的个人网站，我是学生、创造者、设计师",
        }}
        twitter={{
          handle: "@greyfomo",
          site: "@greyfomo",
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