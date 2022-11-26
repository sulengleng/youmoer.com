import {MusicList} from 'components'
import {getAllPosts} from "pages/api/music"
import {NextSeo} from "next-seo";

export default function Blog({ allPosts }) {
  return (
    <>
      <NextSeo
        title="音乐 - 夜游船"
        description="欢迎来到夜游船的个人网站，我是学生、创造者、设计师"
        openGraph={{
          site_name: "音乐 - 夜游船",
          title: "音乐 - 夜游船",
          description:
            "欢迎来到夜游船的个人网站，我是学生、创造者、设计师",
        }}
        twitter={{
          handle: "@yeyouchuan",
          site: "@yeyouchuan",
          cardType: "summary_large_image",
        }}
      />

      <MusicList data={allPosts} />
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