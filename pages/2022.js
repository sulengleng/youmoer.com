import clsx from "clsx";
import Link from "next/link";
import Head from "next/head";
import {NextSeo} from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="仿生人夜游船(2022批次)使用手册"
        description="2022年度总结"
        openGraph={{
          site_name: "仿生人夜游船(2022批次)使用手册",
          title: "仿生人夜游船(2022批次)使用手册",
          description:
            "2022年度总结",
        }}
        twitter={{
          handle: "@yeyouchuan",
          site: "@yeyouchuan",
          cardType: "summary_large_image",
        }}
      />

      <article className="w-full px-5 pb-10 overflow-y-auto max-w-[620px] mx-auto">
        <h2 className="mb-6 text-4xl font-bold md:text-5xl pt-14">仿生人夜游船(2022批次)使用手册</h2>
        <div className="post-content">
            
        </div>
      </article>
    </>
  );
}

