import Head from "next/head";
import {NextSeo} from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="旅行地点"
        description="I've created this page to visualize all the locations I've been so far."
        openGraph={{
          site_name: "旅行地点",
          title: "旅行地点",
          description:
            "I've created this page to visualize all the locations I've been so far.",
        }}
        twitter={{
          handle: "@yeyouchuan",
          site: "@yeyouchuan",
          cardType: "summary_large_image",
        }}
      />

      <div className="flex items-start justify-center w-full mb-10 overflow-hidden max-h-[60vh] md:max-h-[50vh]">
        <iframe 
          width="100%" 
          height="450" 
          frameborder="0" 
          title="Felt Map" 
          src="https://felt.com/embed/map/Untitled-Map-iFgSYPGyQgKKsXIqIOKmvA?lat=34.848678&lon=91.865855&zoom=3.401">
        </iframe>
      </div>

      <article className="w-full px-5 pb-10 overflow-y-auto max-w-[620px] mx-auto">
        <h2 className="mb-6 text-4xl font-bold md:text-5xl">旅行车</h2>
        <div className="post-content">
          <p className="text-lg text-gray-500 pt-6">
            欢迎来到我的旅行车，我创建了这个页面来记录我去过的地方。
          </p>
          <p>
            你可以点击地图上的点来查看我去过的地方。也可以点击 <button class="rounded-full text-green-800">Open Map</button> 按钮来获得更多的信息。
          </p>
        </div>
      </article>
    </>
  );
}
