import clsx from "clsx";
import Link from "next/link";
import {NextSeo} from "next-seo";
import {
    ArrowCircleRight,
    ArrowSquareOut,
    Star,
    AndroidLogo,
    ShareNetwork,
    CloudMoon,
    SpotifyLogo, MapPin, CaretDown, CalendarCheck, Camera,
} from "phosphor-react";
import React from "react";

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
        src: "/images/pages/Statue-and-Dove.png",
        place: "Bristol",
        className: "rotate-[-2deg]",
    },
    {
        src: "/images/pages/Street.png",
        place: "York",
        className: "rotate-[2deg]",
    },
    {
        src: "/images/pages/dali.png",
        place: "Dali",
        className: "rotate-[-2deg]",
    },
    {
        src: "/images/pages/pine-and-stone.png",
        place: "Suzhou",
        className: "rotate-[2deg]",
    }
];

const SERIES = [
    {
        src: "https://s2.loli.net/2023/01/13/aFHc9f2Z7UG8uTd.png",
        place: "孤独摇滚",
        className: "rotate-[-2deg]",
    },
    {
        src: "https://s2.loli.net/2023/01/20/WQdIbuiUFcltMfh.png",
        place: "赛博朋克边缘行者",
        className: "rotate-[2deg]",
    },
    {
        src: "https://s2.loli.net/2023/01/20/6rt1dvfkIJjMaoq.png",
        place: "派对浪客诸葛孔明",
        className: "rotate-[-2deg]",
    },
    {
        src: "https://s2.loli.net/2023/01/20/XfxICHPwAjYGUVe.png",
        place: "辉夜大小姐想让我告白",
        className: "rotate-[2deg]"
    },
    {
        src: "https://s2.loli.net/2023/01/20/9Jm43sRdfQ76NBb.png",
        place: "莉可丽丝",
        className: "rotate-[2deg]",
    },
    {
        src: "https://s2.loli.net/2023/01/20/OVgcfs1tl6XpRCB.png",
        place: "水星的魔女",
        className: "rotate-[2deg]",
    },
    {
        src: "https://s2.loli.net/2023/01/20/yfLtPTlKz47RNni.png",
        place: "灵能百分百",
        className: "rotate-[2deg]",
    },
    {
        src: "https://s2.loli.net/2023/01/20/DIxJdGzHOBju7oW.png",
        place: "间谍过家家",
        className: "rotate-[2deg]"
    },
    {
        src: "https://s2.loli.net/2023/01/20/bUQ6fHtqjEXkg4B.png",
        place: "爱死机",
        className: "rotate-[-2deg]",
    },
    {
        src: "https://s2.loli.net/2023/01/20/VYLC12bASJuyEQ4.png",
        place: "龙之家族",
        className: "rotate-[2deg]",
    },
];

const  ALBUMS = [
    {
        src: "https://s2.loli.net/2023/01/18/i6M1WQJg7PmErbO.png",
        name: "冀西南林路行",
        className: "rotate-[2deg]",
    },
    {
        src: "https://files.catbox.moe/9i0d2g.png",
        name: "万能青年旅店",
        className: "rotate-[-2deg]",
    },
    {
        src: "https://s2.loli.net/2023/01/23/9IaHsRlUGSxWziL.png",
        name: "Interstellar",
        className: "rotate-[2deg]",
    },
    {
        src: "https://files.catbox.moe/4oxz6p.png",
        name: "醜奴兒",
        className: "rotate-[-2deg]",
    },
    {
        src: "https://files.catbox.moe/ic8v2r.png",
        name: "Back in Black",
        className: "rotate-[2deg]",
    },
    {
        src: "https://s2.loli.net/2023/01/23/zDFUx9maJ7tehPT.png",
        name: "The Bends",
        className: "rotate-[-2deg]",
    },
    {
        src: "https://s2.loli.net/2023/01/23/yEL7P5ufF4eV2kM.png",
        name: "勝訴ストリップ",
        className: "rotate-[2deg]",
    },
    {
        src: "https://files.catbox.moe/ibe9j9.png",
        name: "Vox Low",
        className: "rotate-[-2deg]",
    },
    {
        src: "https://s2.loli.net/2022/12/05/WNq6OQ4aeThLnGR.png",
        name: "AM",
        className: "rotate-[2deg]"
    },
    {
        src: "https://s2.loli.net/2023/01/23/RcPoKb5QALgXuCU.png",
        name: "One Last Kiss",
        className: "rotate-[-2deg]",
    },
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

      <article className="w-full px-5 pb-10 overflow-y-auto max-w-[620px] md:max-w-[900px] mx-auto">
        <h2 className="mb-12 mt-12 md:mx-36 text-3xl font-black md:text-4xl dark:text-white">仿生人夜游船(2022批次)使用手册</h2>

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
              <div className="mt-4 prose prose-gray dark:prose-zinc dark:text-gray-200 mx-auto lg:prose-lg">
                  <p>
                      2022年居然过去的如此快，今年好像没有什么「一年」的概念，感觉已经做了许多事，又感觉才刚刚开始。
                      如果用一个成语总结辞旧迎新的感觉，那我觉得是「无精打采」，因为今年已经经历过太多辞旧迎新的时刻，仿佛新年只是其中并不算重要的一个罢了。
                  </p>
                  <p>
                      但是，我不打算用这样悲观的情绪来总结我的2022年，因为这一年对我来说很有意义，新朋友、新环境、新目标。只要这样继续的走下去就行了，不是吗？
                  </p>
                  <figure>
                      <img src="https://s2.loli.net/2023/01/21/fPqhZvTcRwe5NA2.png" alt="" />
                      <figcaption>拿今年画的《群山图》作为文章配图吧~</figcaption>
                  </figure>
                  <ul>
                      <li>
                          <p><strong className="text-black dark:text-white">也许「正确」的坚持更重要</strong></p>
                          <p>
                              书上说，坚持就一定会成功。但是从我的观察来看不总是会这样：时间总是有限，坚持做一件事就意味着放弃坚持做另一件事。
                              现在我更想把坚持定义为稳定创造的能力，我们更需要的是从整体视角更好的规划我们自己的生活方式；更重要的是，坚持的东西需要是可持续发展的。
                          </p>
                          <p>
                              我们没必要为了一件对自己并不是很有意义的事情扰乱我们原本坚持的整个系统，专注到那些真正必须做的事情上去吧~
                          </p>
                      </li>
                      <li>
                          <p><strong  className="text-black dark:text-white">成年可能需要开始面对责任了</strong></p>
                          <p>
                              今年18岁了，成年的那一刻是在前往异国他乡的飞机上度过的。成年之后确实需要面对不少新环境：大学、职场、社团，越来越多需要和别人合作的场景。
                              慢慢适应这些新的环境对我来说是具有挑战性的，因为开始需要为越来越多的事情负责 —— 这是我在国内，甚至是国际学校，都不太熟悉的事情。
                          </p>
                          <p>
                              今年和别人的交流比以往的任何时间都多，我也意识到了自己的每一句话对于别人有什么意义，也许这么说有点夸张了，但是对于能接纳其他人观点的人来说，也许会潜移默化收到影响。
                              从需要被关照的人到需要做好自己的事并且帮助别人的人，心理上会有不少的转变，希望我新一年能做的更好。
                          </p>
                      </li>
                      <li>
                          <p><strong className="text-black dark:text-white">阅读很重要，选择阅读更重要</strong></p>
                          <p>
                              当然不只是年岁或者环境的变化。今年的阅读量和信息源相比之前有大幅提升，所以能看到更多的观点，也有思考更多的事情。
                              我不觉得我从前是被困在「信息茧房」里了，因为信息本来就不会自己来找你，有价值的信息是需要通过手段寻找的。
                          </p>
                          <p>
                              实习的工作和高质量社区有关，所以每天需要阅读的文章会非常多，我自己也会有一些自己的信息源需要阅读。
                              但是我很快就会发现这样很累，虽然我阅读的很多文章都是我感兴趣的领域，但是过度重复的信息只会打乱我思考的节奏。
                          </p>
                          <p>
                              新的一年，我需要每隔两个月评估一次我的信息流，在重复的信息里保留更优质的信息，也许可以通过写作来把筛选的过程记录下来。
                          </p>
                      </li>
                      <li>
                          <p><strong className="text-black dark:text-white">不要再视别人的经验为行动的方法了</strong></p>
                          <p>
                              经验是非常好的老师，它把别人的目标变成了可操作的步骤，仿佛是走在了正确的路上就能到达同样的终点。
                              别人的经验事实上是一个损坏的压缩包，里面有太多的细节是你根本无从得知的，而且你也根本还原不了。
                          </p>
                          <p>
                              别人的经验依旧还被推崇的原因因为大多数人根本不会去实践，只是以为自己受益匪浅；
                              而那些真正去实践的人难免遇到了困难，但是看到大多数人给出的好评，他们会以为只是他们自己能力的不足。
                          </p>
                          <p>
                              这是我年末学习到的一点，还有一个相似的经济学理论就是「
                              <a className="dark:text-gray-200" href="https://wiki.mbalib.com/wiki/%E5%90%8E%E5%8F%91%E5%8A%A3%E5%8A%BF" target="_blank">后发劣势</a>
                              」，简单来说就是后来者对前人技术的模仿会留下不少的隐患，如果要举一个例子的话就是全世界很多企业对 Netflix 管理模式模仿的失败。
                          </p>
                      </li>
                  </ul>
              </div>
          </ContentWrapper>

          <br/>

          <ContentWrapper width="700px" className="ml-auto mb-4 sm:text-left">
              <h2 className="font-bold text-lg flex items-center">
                  <AndroidLogo size={20} className="mr-2 opacity-40" />
                  Personal System
              </h2>
              <div className="mt-4 prose prose-gray dark:prose-zinc dark:text-gray-200 mx-auto lg:prose-lg">
                  <p>
                      个人系统今年与去年相比确实有不少不同，具体体现在软件和工作流的区别，下面我来分别讲讲：
                  </p>
              </div>
              <ContentWrapper
                  width="700px"
                  className="border relative group relative shadow-lg cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-gray-800 mt-6 bg-gray-50 md:rounded-lg dark:bg-gray-900"
              >
                  <div className="flex gap-6">
                      <div className="rounded-xl rotate-3 mt-2 h-20 w-20 bg-readwise-icon bg-cover dark:bg-readwise-icon-dark z-10" />
                      <span className="absolute top-6 left-8 bg-[#eceefb] dark:bg-[#191f2f] rounded-xl rotate-3 h-14 w-14 z-0 transition-all duration-300 group-hover:scale-[50]"></span>
                      <p className="text-xl font-semibold mt-8 transition-all z-10">Readwise Reader</p>
                  </div>
                  <div className="mt-2 mb-4 prose prose-gray dark:prose-zinc dark:text-gray-200 mx-auto lg:prose-lg transition-all relative z-10">
                      <p>
                          今年阅读量的增加其实挺靠 Readwise Reader 的，今年在 Reader 上阅读了超过了 2000 篇文章，创建了 1768 个高亮和笔记。
                          创建高亮最多的一篇文章是
                          <a className="dark:text-white transition-all" href="https://foresightnews.pro/article/detail/6630">
                              详解 Y Combinator 发家史与投资组合演变：如何创造 6000 亿美元总价值？
                          </a>,
                          一共43个高亮~
                      </p>
                      <p>
                          不谈那些最优秀的阅读软件的特点，我觉得最打动我的几点分别是：阅读光标、高亮兼容性、文章分类。
                      </p>
                  </div>
              </ContentWrapper>
              <ContentWrapper
                  width="700px"
                  className="border relative group relative shadow-lg cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-gray-800 mt-6 bg-gray-50 md:rounded-lg dark:bg-gray-900"
              >
                  <div className="flex gap-1 md:gap-6 mt-2 md:mt-4">
                      <div className="rounded-xl min-w- -rotate-3 mt-2 min-w-[56px] h-14 w-14 md:h-20 md:w-20 bg-obsidian-icon-white bg-cover dark:bg-obsidian-icon z-10" />
                      <span className="absolute top-6 md:top-8 left-8 bg-[#eeeeee] dark:bg-[#020127] rounded-xl -rotate-3 h-6 w-6 md:h-14 md:w-14 z-0 transition-all duration-300 group-hover:scale-[70]"></span>
                      <div className="rounded-xl rotate-3 mt-2 min-w-[56px] h-14 w-14 md:h-20 md:w-20 bg-notion-icon bg-cover z-10" />
                      <p className="text-xl font-semibold ml-4 md:ml-0 mt-2 md:mt-8 transition-all z-10">Obsidian + Notion</p>
                  </div>
                  <div className="mt-2 mb-4 prose prose-gray dark:prose-zinc dark:text-gray-200 mx-auto lg:prose-lg transition-all relative z-10">
                      <p>
                          Obsidian 和 Notion 是我今年主要用的笔记软件。
                      </p>
                      <p>
                          Obsidian 最大的特点是插件非常丰富，估计超过 1000 个，几乎能覆盖到所有的笔记场景。而且可以自己写插件自定义功能，这点非常棒。
                      </p>
                      <p>
                          得益于插件的丰富，Obsidian 可以连接并收集我任何地方记录的笔记，并且能让我进一步的思考笔记的意义。
                      </p>
                      <p>
                          除此之外，Obsidian 是我用过的写作体验最好的笔记软件，当然前提是需要用插件调试一些细节。
                      </p>
                      <p>
                          Notion 我主要用来做一些协作方面的笔记，例如社团的数据库，我参加的「灵感买家俱乐部」的大部分活动也都会依靠 Notion 来一起玩。
                      </p>
                  </div>
              </ContentWrapper>
              <ContentWrapper
                  width="700px"
                  className="border relative group relative shadow-lg cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-gray-800 mt-6 bg-gray-50 md:rounded-lg dark:bg-gray-900"
              >
                  <div className="flex gap-6">
                      <div className="rounded-xl rotate-3 mt-2 h-20 w-20 bg-figma-icon-white bg-cover dark:bg-figma-icon z-10" />
                      <span className="absolute top-6 left-8 bg-gradient-to-b from-rose-100 to-teal-100 dark:from-green-300 dark:via-blue-500 dark:to-purple-600 rounded-xl rotate-3 h-14 w-14 z-0 transition-all duration-300 group-hover:scale-[23]"></span>
                      <p className="text-xl font-semibold mt-8 transition-all z-10">Figma</p>
                  </div>
                  <div className="mt-2 mb-4 prose prose-gray dark:prose-zinc dark:text-gray-200 mx-auto lg:prose-lg transition-all relative z-10">
                      <p>
                          我设计这个网站的时候所有的素材都是通过 Figma 来设计的，有的时候也会用 Figma 来做画一些流程图。
                          是 2022 年使用次数相当多的软件了，不得不说 Software is Art。
                      </p>
                  </div>
              </ContentWrapper>
              <ContentWrapper
                  width="700px"
                  className="border relative group relative shadow-lg cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-gray-800 mt-6 bg-gray-50 md:rounded-lg dark:bg-gray-900"
              >
                  <div className="flex gap-1 md:gap-6 mt-2 md:mt-4">
                      <div className="rounded-xl min-w- -rotate-3 mt-2 min-w-[56px] h-14 w-14 md:h-20 md:w-20 bg-apple-music bg-cover z-10" />
                      <span className="absolute top-6 md:top-8 left-8 bg-[#fa4358] dark:bg-[#fa4358] rounded-xl -rotate-3 h-6 w-6 md:h-14 md:w-14 z-0 transition-all duration-300 group-hover:scale-[70]"></span>
                      <div className="rounded-xl rotate-3 mt-2 min-w-[56px] h-14 w-14 md:h-20 md:w-20 bg-last-fm bg-cover z-10" />
                      <p className="text-xl font-semibold ml-4 md:ml-0 mt-2 md:mt-8 transition-all z-10">Apple Music + Last.fm</p>
                  </div>
                  <div className="mt-2 mb-4 prose prose-gray dark:prose-zinc dark:text-gray-200 mx-auto lg:prose-lg transition-all relative z-10">
                      <p>
                      今年用的听音乐软件无疑是口碑非常不错的 Apple Music 美区。
                      </p>
                      <p>
                      因为总是想记录自己听的歌，所以我也会用 Last.fm 来记录一下我听过的专辑，Last.fm 是一个非常老的网站了，可能好多人都惊讶它还活着~
                      </p>
                  </div>
              </ContentWrapper>
          </ContentWrapper>

          <br/>


          <ContentWrapper width="700px" className="ml-auto mb-4 sm:text-left">
              <h2 className="font-bold text-lg flex items-center">
                  <ShareNetwork size={20} className="mr-2 opacity-40" />
                  Social
              </h2>
              <div className="mt-4 prose prose-gray dark:prose-zinc dark:text-gray-200 mx-auto lg:prose-lg">
                  <p>
                    今年交到了好多新朋友，也见识了各个领域优秀的长辈和同龄人，真的非常感谢大家在一年里的陪伴。
                  </p>
                  <ul>
                      <li>首先要感谢我的家人们，爸爸、妈妈、妹妹，有了你们我才能勇敢的面对这个美妙的世界</li>
                      <li>我想感谢🔧ℹ️💰💻⚛️🧪的同学们，2022年能和大家交流非常开心</li>
                      <li>
                          我想感谢<a className="dark:text-white" href="https://club.q24.io/" target="_blank">灵感买家俱乐部</a>的大家，和大家一起做事的每分每秒我都充满力量，也认识了不少新朋友。
                          想到 2023 年还能和大家在一起，就觉得这是非常非常有希望的一年!
                      </li>
                      <li>我还想感谢 2022 年所有对我抱有善意的陌生人们，你们的存在让我觉得 2022 年是美好又缤纷的一年。</li>
                  </ul>
                  <p>最后我要感谢我自己，今年的进步很大，每一个大大小小的决策和想法是我面对世界的全部意义，希望新的一年继续做自己~</p>
              </div>
          </ContentWrapper>

          <br/>

          <ContentWrapper width="700px" className="ml-auto mb-4 sm:text-left">
              <h2 className="font-bold text-lg flex items-center">
                  <SpotifyLogo size={20} className="mr-2 opacity-40" />
                  What I see and hear
              </h2>
              <div className="py-0 md:py-5 mt-5 md:mt-0">
                  <details className="group max-w-[625px] mx-auto">
                      <summary className="flex cursor-pointer list-none md:justify-between font-medium">
                          <span className="my-4 text-lg font-semibold bg-gradient-to-r from-orange-500 to-indigo-500 bg-clip-text text-transparent">
                              年度最喜欢的十部剧集
                          </span>
                          <span className="my-4 mr-4 transition group-open:rotate-180 collapse md:visible">
                            <CaretDown size={24} />
                          </span>
                      </summary>
                      <div className="mx-4 grid grid-cols-3 lg:grid-cols-5 my-0 md:my-4 md:justify-center gap-5 md:gap-10 !max-w-[260px] md:!max-w-[580px] h-0 md:h-fit">
                          {SERIES?.map((item) => (
                              <div
                                  key={item.src}
                                  className={clsx(
                                      item?.className,
                                      "h-0 md:h-fit relative border-0 p-[4px] max-w-[110px] md:max-w-fit shadow-[0_0_32px_rgba(0,0,0,0.1)] rounded-[12px] md:border md:dark:border-gray-700"
                                  )}
                              >
                                  <img
                                      src={item?.src}
                                      alt={item?.place}
                                      className="rounded-[9px]"
                                      loading="lazy"
                                  />
                                  <div className="h-0 md:h-fit font-mono text-xs absolute bottom-[4%] left-[4%] inline-flex bg-white invisible md:visible bg-opacity-50 bg-clip-padding backdrop-blur rounded-[10px] px-2 py-px items-center dark:text-black">
                                      <MapPin size={14} className="mr-1" />
                                      {item?.place}
                                  </div>
                              </div>
                          ))}
                      </div>
                      <div className="mt-64 md:mt-4 prose prose-gray dark:prose-zinc dark:text-gray-200 mx-auto lg:prose-lg">
                          <ul className="mx-4 visible md:hidden">
                              <li>孤独摇滚</li>
                              <li>赛博朋克：边缘行者</li>
                              <li>派对浪客诸葛孔明</li>
                              <li>辉夜大小姐想让我告白：究极浪漫</li>
                              <li>莉可丽丝</li>
                              <li>机动战士高达 水星的魔女</li>
                              <li>灵能百分百 第三季</li>
                              <li>间谍过家家</li>
                              <li>爱·死亡与机器人</li>
                              <li>龙之家族</li>
                          </ul>
                      </div>
                  </details>
              </div>
              <div className="mt-4 prose prose-gray dark:prose-zinc dark:text-gray-200 mx-auto lg:prose-lg">
                  <p>
                      今年的影视作品真的都非常的强，我也是纠结了好久才选出的这 10 个最带给我感动和欢乐的剧集，
                      如果大家感兴趣的话，非常推荐去看看~
                  </p>
              </div>
              <div className="py-0 md:py-5 mt-5 md:mt-0">
                  <details className="group max-w-[625px] mx-auto">
                      <summary className="flex cursor-pointer list-none md:justify-between font-medium">
                          <span className="my-4 text-lg font-semibold bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent">
                              年度最喜欢的十张专辑
                          </span>
                          <span className="my-4 mr-4 transition group-open:rotate-180 collapse md:visible">
                            <CaretDown size={24} />
                          </span>
                      </summary>
                      <div className="mx-4 grid grid-cols-3 lg:grid-cols-5 my-0 md:my-4 md:justify-center gap-5 md:gap-10 !max-w-[260px] md:!max-w-[580px] h-0 md:h-fit xl:gap-24">
                          {ALBUMS?.map((item) => (
                              <div
                                  key={item.src}
                                  className={clsx(
                                      item?.className,
                                      "h-0 md:h-fit relative border-0 p-[4px] max-w-[110px] md:max-w-fit shadow-[0_0_32px_rgba(0,0,0,0.1)] rounded-[12px] md:border md:dark:border-gray-700"
                                  )}
                              >
                                  <img
                                      src={item?.src}
                                      alt={item?.name}
                                      className="rounded-[9px]"
                                      loading="lazy"
                                  />
                                  <div className="h-0 md:h-fit font-mono text-xs absolute bottom-[4%] left-[4%] inline-flex bg-white invisible md:visible bg-opacity-50 bg-clip-padding backdrop-blur rounded-[10px] px-2 py-px items-center dark:text-black">
                                      <MapPin size={14} className="mr-1" />
                                      {item?.name}
                                  </div>
                              </div>
                          ))}
                      </div>
                      <div className="mt-52 md:mt-4 prose prose-gray dark:prose-zinc dark:text-gray-200 mx-auto lg:prose-lg">
                          <ul className="mx-4 visible md:hidden">
                              <li>万能青年旅店 - 万青</li>
                              <li>冀西南林路行 - 万青</li>
                              <li>Interstellar - Hans Zimmer</li>
                              <li>醜奴兒 - 草东没有派对</li>
                              <li>Back in Black - AC/DC</li>
                              <li>The Bends - Radiohead</li>
                              <li>勝訴ストリップ - 椎名林檎</li>
                              <li>Vox Low - Vox Low</li>
                              <li>AM - Arctic Monkeys</li>
                              <li>One Last Kiss - 宇多田光</li>
                          </ul>
                      </div>
                  </details>
              </div>
              <div className="mt-4 prose prose-gray dark:prose-zinc dark:text-gray-200 mx-auto lg:prose-lg">
                  <p>
                      以上是今年最喜欢的 10 张专辑，今年听独立摇滚和 J-pop 比较多，我也会在
                      <a className="dark:text-white" href="https://yeyouchuan.me/music/" target="_blank">唱片库</a>
                      里持续更新我喜欢的专辑，
                  </p>
                  <p>
                      我发现大家现在都不怎么以专辑为单位去听歌了，其实我感觉这样会失去很多体验，因为有些专辑的排布其实是有设计在里面的。
                      意识到这一点，2022 年我会更多的完整听专辑。
                  </p>
                  <p>
                      这点其实还是个人喜好的问题，如果特别喜欢一首单曲，我其实还是很推荐去把这首歌在的完整专辑去欣赏一遍~
                  </p>
              </div>
              <div className="py-0 md:py-5 mt-5 md:mt-0">
                  <details className="group max-w-[625px] mx-auto">
                      <summary className="flex cursor-pointer list-none md:justify-between font-medium">
                          <span className="my-4 text-lg font-semibold bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">
                              年度播客总结
                          </span>
                          <span className="my-4 mr-4 transition group-open:rotate-180 collapse md:visible">
                            <CaretDown size={24} />
                          </span>
                      </summary>
                      <img className="w-full h-auto" src="https://s2.loli.net/2023/01/23/ctWn7DTakVYCSMj.png" alt=""/>
                  </details>
              </div>
              <div className="mt-4 prose prose-gray dark:prose-zinc dark:text-gray-200 mx-auto lg:prose-lg">
                  <p>
                      今年开始听播客了，大部分播客都是在小宇宙上听的，所以直接拿小宇宙官方的年度总结来做一个记录吧。
                  </p>
                  <p>
                      英文播客听的不算多，明年会多听一些优质的英文播客。这里说一下我用来听英文播客的软件 —— Snipd，
                      做可以把播客精彩的部分切出来做笔记，也方便导入到 Obsidian 之类的软件里。
                  </p>
                  <p>
                      今年还参加了 DC 和 灵感买家俱乐部举办的 Pod Jam，让我了解了不少制作播客的流程，也认识了非常专业和耐心的队友~ （这里手动@Lauren.Q、随易还有Jack）
                      这里要感谢布兰德游记主播 DC 还有鲍勃，这真的是非常完美的体验，期待下一期🙋🏻
                  </p>
                  <p>
                      Pod Jam 让我萌生了自己做播客的想法，现在已经找好的伙伴，希望 2023 年3-4月份能开始录制⛽
                  </p>
              </div>
          </ContentWrapper>
          <ContentWrapper width="700px" className="ml-auto mb-4 sm:text-left">
              <h2 className="font-bold text-lg flex items-center photos-year">
                  <Camera size={20} className="mr-2 opacity-40" />
                  Photos of the Year
              </h2>
              <div className="relative flex-col">
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
                                  <a href="#modal"
                                     target="_self"
                                  >
                                      {item?.place}
                                  </a>
                              </div>
                          </div>
                      ))}
                  </ContentWrapper>
              </div>
              <div
                  className="group invisible relative z-10 opacity-0 transition-all duration-300 target:visible target:opacity-100"
                  aria-labelledby="modal-title" role="dialog" aria-modal="true" id="modal">
                  <div className="fixed inset-0 z-10 overflow-y-auto">
                      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                          <a href="#photos-year" target="_self"
                             className="fixed inset-0 block cursor-default bg-black/50 bg-opacity-75 transition-opacity"><span
                              className="sr-only">Close Modal</span></a>

                          <div
                              className="relative scale-90 transform overflow-hidden rounded-lg bg-white text-left opacity-0 shadow-xl transition-all duration-300 group-target:scale-100 group-target:opacity-100 sm:my-8 sm:w-full sm:max-w-lg">
                              <div className="bg-white px-4 mb-16 sm:mb-0 pt-5 pb-4 sm:p-6 sm:pb-4">
                                  <div className="sm:flex sm:items-start">
                                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                          <h3 className="text-lg font-medium leading-6 text-gray-900"
                                              id="modal-title">这些图片代表什么？</h3>
                                          <div className="mt-2">
                                              <p className="text-sm text-gray-500">
                                                  第一张图片代表
                                              </p>
                                              <p className="text-sm text-gray-500">
                                                  第二张图片代表
                                              </p>
                                              <p className="text-sm text-gray-500">
                                                  第三张图片代表
                                              </p>
                                              <p className="text-sm text-gray-500">
                                                  第四张图片代表
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                  <a href="#photos-year" target="_self"
                                     className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                      关闭
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </ContentWrapper>
          <ContentWrapper width="700px" className="ml-auto mb-4 sm:text-left">
              <h2 className="font-bold text-lg flex items-center">
                <CalendarCheck size={20} className="mr-2 opacity-40" />
                  The overview of the year
              </h2>
          </ContentWrapper>
      </article>
    </>
  );
}

