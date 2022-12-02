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
        <h2 className="mb-6 text-4xl font-bold md:text-5xl pt-14">The Wanderland!</h2>
        <div className="post-content">
          <p className="text-lg text-gray-500">
            I didn't know I would love travelling so much until back in 2017
            December when I first decided to do a solo to Udaipur. It was my
            first time out alone and god I felt scared but excited at the same
            time. After that trip to Udaipur I realized how travelling can add
            to your life in terms of knowledge, meeting new people and
            perspective. You meet people, talk to them and share experiences,
            cultures, ideas which is a big thing.
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
            I've created this page to visualize all the locations I've been so
            far.
          </p>
        </div>
      </article>
    </>
  );
}

