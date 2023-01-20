import clsx from "clsx";
import Link from "next/link";
import {NextSeo} from "next-seo";
import {
    ArrowCircleRight,
    ArrowSquareOut,
    Star,
    AndroidLogo,
    Barbell,
    ShareNetwork,
    CloudMoon,
    SpotifyLogo, MapPin,
} from "phosphor-react";

const TIMELINE = [
    {
        data: 'Jan 19, 2023',
        title: '第三版主页上线',
        description: '第三版主页上线，网页正式告一段落',
    },
    {
        date: 'Nov 23, 2022',
        title: '个人网站开始上线',
        description: '也欢迎你来我之前的数字花园 https://yeyouchuan.top'
    },
    {
        date: 'Sep 28, 2022',
        title: '开始大学学习',
        description: '约克大学 Bsc Interactive Media'
    },
    {
        data: 'Jan 08, 2022',
        title: '告别2021',
        description: '去年年度总结~',
        link: 'https://yeyouchuan.zhubai.love/posts/2091618351985659904'
    }
]

const IMAGES = [
    {
        src: "https://s2.loli.net/2023/01/13/aFHc9f2Z7UG8uTd.png",
        place: "孤独摇滚",
        className: "rotate-[-2deg]",
    },
    {
        src: "https://s2.loli.net/2023/01/20/WQdIbuiUFcltMfh.png",
        place: "赛博朋克：边缘行者",
        className: "rotate-[2deg]",
    },
    {
        src: "https://s2.loli.net/2023/01/20/6rt1dvfkIJjMaoq.png",
        place: "派对浪客诸葛孔明",
        className: "rotate-[-2deg]",
    },
    {
        src: "https://s2.loli.net/2023/01/20/9Jm43sRdfQ76NBb.png",
        place: "莉可丽丝",
        className: "rotate-[2deg]",
    }
];

const ContentWrapper = ({ children, className, width }) => (
    <div
        style={{ maxWidth: `${width || '100%'}`}}
        className={clsx(
            "w-full px-5 mx-auto relative",
            className
        )}
    >
        {children}
    </div>
);

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
        <h2 className="mb-6 mt-12 text-3xl font-black md:text-4xl dark:text-white">仿生人夜游船(2022批次)使用手册</h2>

          <ContentWrapper width="700px" className="ml-auto mb-4 sm:text-left">
              <h2 className="font-bold text-lg flex items-center">
                  <Star size={20} className="mr-2 opacity-40" />
                  2022年时间线
              </h2>
          </ContentWrapper>

          <ContentWrapper
              width="700px"
              className="border dark:border-gray-800 pt-6 bg-gray-50 md:rounded-lg dark:bg-gray-900"
          >
              <div className="relative pl-8">
                  <div className="h-full w-[1px] bg-gray-200 dark:bg-gray-800 left-[10px] top-[5px] absolute"></div>
                  {TIMELINE?.map((item, index) => (
                      <div key={item.title + index} className="mb-10 relative">
                          <div className="w-3 h-3 rounded-full absolute left-[-30px] top-[16px]">
                              <ArrowCircleRight
                                  size={18}
                                  className="bg-white text-gray-400 dark:text-gray-400 dark:bg-gray-900 rounded-full"
                              />
                          </div>
                          <p className="opacity-40 text-xs">{item.date}</p>

                          <h3 className="leading-tight mb-1 font-semibold text-sm md:text-base inline-block">
                              <span className="">{item.title}</span>
                              {item?.link ? (
                                  <Link href={item.link} target="_blank">
                        <span className="inline-block ml-1 opacity-80">
                          <ArrowSquareOut size={12} />
                        </span>
                                  </Link>
                              ) : (
                                  ""
                              )}
                          </h3>
                          <p className="opacity-60 text-sm">{item.description}</p>
                      </div>
                  ))}
              </div>
          </ContentWrapper>

          <br/>

          <ContentWrapper width="700px" className="ml-auto mb-4 sm:text-left">
              <h2 className="font-bold text-lg flex items-center">
                  <CloudMoon size={20} className="mr-2 opacity-40" />
                  Philosophy
              </h2>
          </ContentWrapper>

          <br/>

          <ContentWrapper width="700px" className="ml-auto mb-4 sm:text-left">
              <h2 className="font-bold text-lg flex items-center">
                  <AndroidLogo size={20} className="mr-2 opacity-40" />
                  Personal System
              </h2>
          </ContentWrapper>

          <br/>

          <ContentWrapper width="700px" className="ml-auto mb-4 sm:text-left">
              <h2 className="font-bold text-lg flex items-center">
                  <Barbell size={20} className="mr-2 opacity-40" />
                  Work
              </h2>
          </ContentWrapper>

          <br/>

          <ContentWrapper width="700px" className="ml-auto mb-4 sm:text-left">
              <h2 className="font-bold text-lg flex items-center">
                  <ShareNetwork size={20} className="mr-2 opacity-40" />
                  Social
              </h2>
          </ContentWrapper>

          <br/>

          <ContentWrapper width="700px" className="ml-auto mb-4 sm:text-left">
              <h2 className="font-bold text-lg flex items-center">
                  <SpotifyLogo size={20} className="mr-2 opacity-40" />
                  What I see and hear
              </h2>
              <ContentWrapper className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 my-6 md:my-12 justify-center gap-5 md:gap-10 !max-w-[960px]">
                  {IMAGES?.map((item) => (
                      <div
                          key={item.src}
                          className={clsx(
                              item?.className,
                              "relative border p-[4px] shadow-[0_0_32px_rgba(0,0,0,0.1)] rounded-[12px] dark:border-gray-700"
                          )}
                      >
                          <img
                              src={item?.src}
                              alt={item?.place}
                              className="rounded-[9px]"
                              loading="lazy"
                          />
                          <div className="font-mono text-xs absolute bottom-[4%] left-[4%] inline-flex bg-white bg-opacity-50 bg-clip-padding backdrop-blur rounded-[10px] px-2 py-px items-center dark:text-black">
                              <MapPin size={14} className="mr-1" />
                              {item?.place}
                          </div>
                      </div>
                  ))}
              </ContentWrapper>
          </ContentWrapper>
      </article>
    </>
  );
}

