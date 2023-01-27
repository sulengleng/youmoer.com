import {NextSeo} from "next-seo";
import {WorkList} from "components";
import { getAllPosts } from "pages/api/projects";

export default function Home({allPosts}) {
  return (
    <>
      <NextSeo
        title="Work – 夜游船"
        description="A list of my side-project"
        openGraph={{
          site_name: "项目 – 夜游船",
          title: "项目 – 夜游船",
          description:
            "A list of all my side-projects",
        }}
        twitter={{
          handle: "@yeyouchuan",
          site: "@yeyouchuan",
          cardType: "summary_large_image",
        }}
      />

      <WorkList allPosts={allPosts} />
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
    "content",
    "icon",
  ]);

  return {
    props: { allPosts },
  };
}