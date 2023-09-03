import {useEffect, useState} from 'react';
import Link from "next/link"
import { ArrowIcon } from "lib/icons";
import classnames from "classnames";
import {NextSeo} from "next-seo";

export default function Experiments() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true)
    }, 100)
  }, [])

  const LIST = [
    {
      title: "Splash Screen",
      url: "/experiments/splash-screen",
      description: "Splash Screen implementation on Web using Tailwind",
    },
    {
      title: "Modal",
      url: "/experiments/modal",
      description: "A very basic modal component in React",
    },
    {
      title: "Tailwind CSS Playground",
      url: "/experiments/tailwind-css-playground",
      description: "A playground for Tailwind CSS",
    },
    {
      title: "Homepage V1",
      url: "/experiments/homepage-v1",
      description: "The first version for my personal website",
    },
    {
      title: "Homepage V2",
      url: "/experiments/homepage-v2",
      description: "The second version for my personal website",
    },
    {
      title: "Homepage V3",
      url: "/experiments/homepage-v3",
      description: "The third version for my personal website",
    },
    {
      title: "Notion import API Test",
      url: "/experiments/notion-import-api-test",
      description: "A test for Notion import API",
    },
    {
      title: "Photo Wall",
      url: "/experiments/photo-wall",
      description: "A photo wall with CSS Grid",
    },
    {
      title: "Anyway.Now",
      url: "/experiments/anyway-now",
      description: "A simple website for Anyway.Now",
    },
    {
      title: "Product Overview",
      url: "/experiments/product-overview",
      description: "A product overview page with CSS Grid",
    },
    {
      title: "Project Filter",
      url: "/experiments/project-filter",
      description: "A project filter page with CSS Grid",
    },
    // {
    //   title: "Coming Soon",
    //   url: "/experiments",
    //   description: "There's always something cooking in here, stay tuned!",
    //   disabled: true
    // },
  ];

  return <>
    <NextSeo
      title="设计和代码实验室 - 油墨儿"
      description="A collection of design and code experiments, a college where student are ideas. Would the ideas graduate? Let's find out!"
      openGraph={{
        site_name: "Hi, 我是油墨儿！",
        title: "设计和代码实验室 - 油墨儿",
        description:
          "A collection of design and code experiments, a college where student are ideas. Would the ideas graduate? Let's find out!",
      }}
    />
    <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden antialiased">
      <div className="relative p-8 md:p-20 w-full max-w-[800px]">
        <div className="max-w-[620px] mx-auto">
            <div className="font-bold text-3xl mt-8">实验室</div>
            <p className="mt-8 text-lg text-gray-600 dark:text-gray-300">只要是我在 Readwise Reader 里读过并且高亮的文章都会出现在这里，通过 notion api 自动同步。</p>
            <div className=" w-full border-t mt-12 dark:border-gray-700"></div>
        </div>
        <div className="relative mt-12 md:-ml-6 lg:-ml-4">
          {LIST.map((item) => {
            return (
              (<Link
                key={item.url}
                href={item.url}
                className={classnames(
                  "flex flex-row py-4 duration-200 rounded-xl group ",
                  { "pointer-events-none opacity-30": item.disabled },
                  { "opacity-80 hover:opacity-100": !item.disabled }
                )}>

                <div className="hidden md:flex translate-x-[-20px] mt-px group-hover:translate-x-0 group-hover:opacity-100 duration-[250ms] opacity-0 ease-[cubic-bezier(.75,-0.5,0,1.75)]">
                  <div className="w-6 h-6">{ArrowIcon}</div>
                </div>
                <div className="flex flex-col pl-1">
                  <h2 className="flex items-center text-lg font-semibold text-gray-800 dark:text-white">
                    <span className="border-b border-gray-500 dark:border-gray-200 leading-none mb-1">
                      {item.title}
                    </span>
                  </h2>
                  <p className="text-base opacity-50 dark:opacity-60">
                    {item.description}
                  </p>
                </div>

              </Link>)
            );
          })}
        </div>
      </div>
    </div>
  </>;
}