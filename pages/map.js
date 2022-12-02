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
        <h2 className="mb-6 text-4xl font-bold md:text-5xl">The Wanderland!</h2>
        <div className="post-content">
          <p className="text-lg text-gray-500">
            我喜欢旅行，我去过中国的大部分城市，
            也在欧洲旅行过一段时间，去过土耳其、奥地利、匈牙利、捷克、芬兰
            现在在英国一边旅行一边学习。
          </p>
          <p>
            The other aspect of travelling that I love is capturing moments, and
            that helped me up my photography game a bit. You can head over to my{" "}
            <a href="https://instagram.com/thelifeofrishi">Instagram</a> or{" "}
            <a href="http://unsplash.com/@rishi">Unsplash</a> to check some of
            the photos I've taken while exploring beautiful destinations. Lakes,
            the mountains, greenery and the clouds in the sky, scenes that you
            don't get to see on a regular day is what I like to capture.
          </p>
          <p>
            我创建了这个页面来记录我去过的所有地方。
          </p>
        </div>
      </article>
    </>
  );
}
