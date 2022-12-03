import clsx from "clsx";
import Link from "next/link";
import { MapPin, ArrowCircleRight, Camera, Star, Article, ArrowSquareOut, ThumbsUp} from "phosphor-react";
import { motion } from 'framer-motion'


const TIMELINE = [
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
    <body className="selection:bg-[#3b818c]">
      <div className="pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.35, delay: 0.2 },
          }}
        >
          <ContentWrapper
            width="700px"
            className="mx-auto relative grid grid-cols-1 gap-10 mt-10 md:mt-20"
          >
            <div className="">
              <h2 className="mb-6 text-3xl font-black md:text-4xl dark:text-white">
                <span className="text-gray-400 dark:text-gray-400">
                  Hi 👋, 我是{" "}
                </span>
                夜游船!
              </h2>
              <div className="">
                <ul className="" width="700px">
                  <li>🧠对精心设计的东西情有独钟</li>
                  <li>🤖克拉克、莱姆、阿西莫夫</li>
                  <li>🎸独立、另类、经典摇滚</li>
                  <li>📺喜欢动漫、美英剧</li>
                  <li>🏸喜欢羽毛球、排球</li>
                  <li>⌨️IM英本学生</li>
                  <br />
                  <p>
                    在即刻上比较活跃{" "}
                    <Link
                      href="https://okjk.co/DNyx7A"
                      target="_blank"
                      className=" dark:text-yellow-100 hover:text-[#ffe411] dark:hover:text-[#ffe411]"
                    >
                      @夜游船
                    </Link>
                  </p>
                  <br />
                  <p>
                    最后要感谢&nbsp;
                    <Link 
                      href="https://github.com/rishimohan" 
                      target="_blank" 
                      className=" dark:text-blue-100 hover:text-[#5196ec] dark:hover:text-[#5196ec]"
                    >
                      @rishimohan
                    </Link> 
                    &nbsp;给我提供的模板和一些细节上的帮助
                  </p>
                </ul>
              </div>
            </div>
          </ContentWrapper>
        </motion.div>

        <br></br>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.35, delay: 0.3 },
          }}
        >
          <ContentWrapper width="700px" className="ml-auto dark:border-gray-800">
            <h2 className="font-bold text-lg flex items-center">
            <Article size={20} className="mr-2 opacity-40" />
              封面短语
            </h2>
          </ContentWrapper>

          <br></br>

          <div class="snap-mandatory snap-x">
            <div class="max-w-[80%] mx-auto md:max-w-2xl flex justify-center bg-[#821c20] rounded-xl shadow-lg overflow-hidden snap-center lg:max-w-[60%]">
              <div class="md:flex">
                <div class="md:shrink-0">
                  <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://files.catbox.moe/whnmix.png" alt="Modern building architecture"></img>
                </div>
                <div class="p-8">
                  <div class="uppercase tracking-wide text-sm text-[#166b41] dark:text-green-700 font-semibold">S.A.阿列克谢耶维奇</div>
                  <p class="mt-2 text-white">每个人都要做好自己的事。比如我自己的事就是写作，那就要写，要写下去，要找到一些答案，要帮助那些今天孤独的人，许多人都很迷茫，知识分子很迷茫，普通人就更迷茫了。所以，<a class="underline decoration-pink-500">应该做好自己的事</a>。</p>
                </div>
              </div>
            </div>
          </div>

          <br></br>
          <br></br>

          <ContentWrapper width="700px" className="ml-auto dark:border-gray-800 sm:text-left">
            <h2 className="font-bold text-lg flex items-center">
              <Camera size={20} className="mr-2 opacity-40" />
              最近一些值得记录的照片
            </h2>
          </ContentWrapper>

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
                <div className="font-mono text-xs absolute bottom-[4%] left-[4%] inline-flex bg-white/90 backdrop-blur rounded-[10px] px-2 py-px items-center dark:text-black">
                  <MapPin size={14} className="mr-1" />
                  {item?.place}
                </div>
              </div>
            ))}
          </ContentWrapper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.35, delay: 0.4 },
          }}
        >
          <ContentWrapper width="700px" className="ml-auto mb-4 sm:text-left">
            <h2 className="font-bold text-lg flex items-center">
              <Star size={20} className="mr-2 opacity-40" />
              最近的一些动向
            </h2>
          </ContentWrapper>

          <br></br>

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

          <br></br>
          <br></br>

          <ContentWrapper width="700px" className="ml-auto mb-4 sm:text-left">
            <h2 className="font-bold text-lg flex items-center">
              <ThumbsUp size={20} className="mr-2 opacity-40" />
              你喜欢这个个人网站吗？
            </h2>
          </ContentWrapper>

          <br></br>

          <fieldset className="border dark:border-gray-800 mx-auto max-w-[85%] md:max-w-[58%] flex rounded-xl overflow-hidden p-4 bg-gray-50 dark:bg-gray-900">
            <div class="">
              <input id="unlike" class="peer/unlike" type="radio" name="status" checked />
              <label for="unlike" class="peer-checked/unlike:text-sky-500">&nbsp;💔不喜欢&nbsp;</label>

              <input id="like" class="peer/like" type="radio" name="status" />
              <label for="like" class="peer-checked/like:text-red-500">&nbsp;💓喜欢&nbsp;</label>

              <div class="hidden peer-checked/unlike:block pt-6" width="700px">欢迎下次再来，因为网站还会变得更好</div>
              <div class="hidden peer-checked/like:block pt-6" width="700px">谢谢喜欢，如果你也喜欢我的文字的话，可以订阅我的&nbsp;<Link href="https://yeyochuan.zhubai.love" target="_blank" className="hover:text-[#3b818c] dark:hover:text-[#3b818c]">newsletter</Link></div>
            </div>
          </fieldset>

          
<span id="badge-dismiss-default" class="inline-flex items-center py-1 px-2 mr-2 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-200 dark:text-blue-800">
  Default
  <button type="button" class="inline-flex items-center p-0.5 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-300 dark:hover:text-blue-900" data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
      <svg aria-hidden="true" class="w-3.5 h-3.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      <span class="sr-only">Remove badge</span>
  </button>
</span>
<span id="badge-dismiss-dark" class="inline-flex items-center py-1 px-2 mr-2 text-sm font-medium text-gray-800 bg-gray-100 rounded dark:bg-gray-200 dark:text-gray-800">
  Dark
  <button type="button" class="inline-flex items-center p-0.5 ml-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-300 dark:hover:text-gray-900" data-dismiss-target="#badge-dismiss-dark" aria-label="Remove">
      <svg aria-hidden="true" class="w-3.5 h-3.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      <span class="sr-only">Remove badge</span>
  </button>
</span>
<span id="badge-dismiss-red" class="inline-flex items-center py-1 px-2 mr-2 text-sm font-medium text-red-800 bg-red-100 rounded dark:bg-red-200 dark:text-red-800">
  Red
  <button type="button" class="inline-flex items-center p-0.5 ml-2 text-sm text-red-400 bg-transparent rounded-sm hover:bg-red-200 hover:text-red-900 dark:hover:bg-red-300 dark:hover:text-red-900" data-dismiss-target="#badge-dismiss-red" aria-label="Remove">
      <svg aria-hidden="true" class="w-3.5 h-3.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      <span class="sr-only">Remove badge</span>
  </button>
</span>
<span id="badge-dismiss-green" class="inline-flex items-center py-1 px-2 mr-2 text-sm font-medium text-green-800 bg-green-100 rounded dark:bg-green-200 dark:text-green-800">
  Green
  <button type="button" class="inline-flex items-center p-0.5 ml-2 text-sm text-green-400 bg-transparent rounded-sm hover:bg-green-200 hover:text-green-900 dark:hover:bg-green-300 dark:hover:text-green-900" data-dismiss-target="#badge-dismiss-green" aria-label="Remove">
      <svg aria-hidden="true" class="w-3.5 h-3.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      <span class="sr-only">Remove badge</span>
  </button>
</span>
<span id="badge-dismiss-yellow" class="inline-flex items-center py-1 px-2 mr-2 text-sm font-medium text-yellow-800 bg-yellow-100 rounded dark:bg-yellow-200 dark:text-yellow-800">
  Yellow
  <button type="button" class="inline-flex items-center p-0.5 ml-2 text-sm text-yellow-400 bg-transparent rounded-sm hover:bg-yellow-200 hover:text-yellow-900 dark:hover:bg-yellow-300 dark:hover:text-red-900" data-dismiss-target="#badge-dismiss-yellow" aria-label="Remove">
      <svg aria-hidden="true" class="w-3.5 h-3.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      <span class="sr-only">Remove badge</span>
  </button>
</span>
<span id="badge-dismiss-indigo" class="inline-flex items-center py-1 px-2 mr-2 text-sm font-medium text-indigo-800 bg-indigo-100 rounded dark:bg-indigo-200 dark:text-indigo-800">
  Indigo
  <button type="button" class="inline-flex items-center p-0.5 ml-2 text-sm text-indigo-400 bg-transparent rounded-sm hover:bg-indigo-200 hover:text-indigo-900 dark:hover:bg-indigo-300 dark:hover:text-indigo-900" data-dismiss-target="#badge-dismiss-indigo" aria-label="Remove">
      <svg aria-hidden="true" class="w-3.5 h-3.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      <span class="sr-only">Remove badge</span>
  </button>
</span>
<span id="badge-dismiss-purple" class="inline-flex items-center py-1 px-2 mr-2 text-sm font-medium text-purple-800 bg-purple-100 rounded dark:bg-purple-200 dark:text-purple-800">
  Purple
  <button type="button" class="inline-flex items-center p-0.5 ml-2 text-sm text-purple-400 bg-transparent rounded-sm hover:bg-purple-200 hover:text-purple-900 dark:hover:bg-purple-300 dark:hover:text-purple-900" data-dismiss-target="#badge-dismiss-purple" aria-label="Remove">
      <svg aria-hidden="true" class="w-3.5 h-3.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      <span class="sr-only">Remove badge</span>
  </button>
</span>
<span id="badge-dismiss-pink" class="inline-flex items-center py-1 px-2 mr-2 text-sm font-medium text-pink-800 bg-pink-100 rounded dark:bg-pink-200 dark:text-pink-800">
  Pink
  <button type="button" class="inline-flex items-center p-0.5 ml-2 text-sm text-pink-400 bg-transparent rounded-sm hover:bg-pink-200 dark:hover:bg-pink-300 dark:hover:text-pink-900" data-dismiss-target="#badge-dismiss-pink" aria-label="Remove">
      <svg aria-hidden="true" class="w-3.5 h-3.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      <span class="sr-only">Remove badge</span>
  </button>
</span>

        </motion.div>
      </div>
    </body>
  );
}
