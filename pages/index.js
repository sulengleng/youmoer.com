import {Pause, Play, StarFour, ArrowUpRight, CheckSquareOffset, Spinner} from "@phosphor-icons/react";
import {motion, useMotionValue, useTransform, AnimatePresence} from 'framer-motion'
import React, {useRef, useState} from "react";
import YouTube from "react-youtube";
import {NextSeo} from "next-seo";

export default function Home() {

    const [isPlaying, setIsPlaying] = useState(false);

    const audioPlayer = useRef();

    const onPlayerReady = (event) => {
        audioPlayer.current = event.target
    }

    const opts = {
        height: "0",
        width: "0",
    }

    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
            audioPlayer.current.playVideo();
        } else {
            audioPlayer.current.pauseVideo();
        }
    }

    return (
        <motion.body className="select-none">
            <NextSeo
                title="你好，我是油墨儿！"
                description="欢迎来到油墨儿的个人网站"
                openGraph={{
                    site_name: "你好，我是油墨儿！",
                    title: "你好，我是油墨儿！",
                    description:
                        "欢迎来到油墨儿的个人网站",
                }}
                twitter={{
                    handle: "@2youmoer",
                    site: "@2youmoer",
                    cardType: "summary_large_image",
                }}
            />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.35, delay: 0.2 },
                }}
                className="page"
            >
                <div className="flex flex-col w-[350px] sm:w-[400px] lg:w-[850px] xl:w-[1000px] mx-auto pt-8">
                    <GradualSpacing/>
                    <BlurIn/>
                </div>
                <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 min-w-screen w-[350px] sm:w-[400px] lg:w-[850px] xl:w-[1000px] mx-auto my-8 ">
                    <div className="w-full flex flex-col h-[330px] bg-white dark:bg-gradient-to-tr dark:from-black dark:to-[#0f0f0f] border dark:border-none border-gray-100 drop-shadow rounded-2xl row-span-2">
                        <div className="flex my-6 ml-6 sm:mt-8 sm:mb-6 sm:ml-8 lg:my-6 lg:ml-6">
                            <CheckSquareOffset size={28} weight="fill" className="" />
                            <p className="font-bold ml-2 text-lg">长期目标</p>
                        </div>
                        <div className="w-[300px] sm:w-[330px] lg:w-[210px] xl:w-[260px] mx-auto border border-gray-300 dark:border-gray-700 h-16 rounded-lg mb-3 relative group overflow-hidden transition-all duration-500 hover:-translate-y-1 z-0 flex">
                            <div className="rounded-full h-8 w-8 mt-4 ml-4 bg-gradient-to-br from-yellow-200 via-pink-200 to-pink-400"></div>
                            <span className="absolute top-4 left-4 rounded-full bg-gradient-to-br from-yellow-200 via-pink-200 to-pink-400 h-8 w-8 z-10 transition-all duration-300 group-hover:scale-[20]"></span>
                            <Spinner size={24} className="absolute top-[20px] left-[20px] z-20 group-hover:text-black" />
                            <p className="mt-[19px] ml-3 lg:ml-1 xl:ml-3 font-medium z-20 group-hover:text-black">设计《中国传统美学》系列</p>
                        </div>
                        <div className="w-[300px] sm:w-[330px] lg:w-[210px] xl:w-[260px] mx-auto border border-gray-300 dark:border-gray-700 h-16 rounded-lg mb-3 relative group overflow-hidden transition-all duration-500 hover:-translate-y-1 z-0 flex">
                            <div className="rounded-full h-8 w-8 mt-4 ml-4 bg-gradient-to-tl from-rose-400 via-fuchsia-500 to-indigo-500"></div>
                            <span className="absolute top-4 left-4 rounded-full bg-gradient-to-tl from-rose-400 via-fuchsia-500 to-indigo-500 h-8 w-8 z-10 transition-all duration-300 group-hover:scale-[20]"></span>
                            <Spinner size={24} className="absolute top-[20px] left-[20px] z-20" />
                            <p className="mt-[19px] ml-3 lg:ml-1 xl:ml-3 font-medium z-20">16/40一年读书计划</p>
                        </div>
                        <div className="w-[300px] sm:w-[330px] lg:w-[210px] xl:w-[260px] mx-auto border border-gray-300 dark:border-gray-700 h-16 rounded-lg mb-3 relative group overflow-hidden transition-all duration-500 hover:-translate-y-1 z-0 flex">
                            <div className="rounded-full h-8 w-8 mt-4 ml-4 bg-gradient-to-tr from-emerald-400 via-teal-400 to-cyan-400"></div>
                            <span className="absolute top-4 left-4 rounded-full bg-gradient-to-tr from-emerald-400 via-teal-400 to-cyan-400 h-8 w-8 z-10 transition-all duration-300 group-hover:scale-[20]"></span>
                            <Spinner size={24} className="absolute top-[20px] left-[20px] z-20 group-hover:text-black" />
                            <p className="mt-[19px] ml-3 lg:ml-1 xl:ml-3 font-medium z-20 group-hover:text-black"> 思考中💭</p>
                        </div>
                    </div>
                    <div
                        className="w-full h-60 lg:h-44 group relative flex bg-light-board dark:bg-dark-board bg-cover border dark:border-none border-gray-100 drop-shadow rounded-2xl row-span-1"
                    >
                        <a 
                            className="absolute z-10 w-52 sm:w-48 lg:w-[65%] h-28 left-[20.3%] sm:left-[26%] md:left-[26%] lg:left-[17.5%] xl:left-[17.5%] place-self-center bg-line-light dark:bg-line-dark bg-cover rounded-lg group-hover:translate-x-4 group-hover:translate-y-4 group-hover:-rotate-3 duration-300 shadow-lg dark:shadow-md"
                            href="/2022"
                        ></a>
                        <a href="/2022" className="mx-auto flex z-0 w-52 sm:w-48 lg:w-[65%] h-28 place-self-center bg-blue-200/50 dark:bg-red-600/50 rounded-lg group-hover:-translate-x-4 group-hover:-translate-y-4 group-hover:rotate-3 duration-300 shadow-lg dark:shadow-md">
                            <a className="ml-4 mt-4 font-bold">油墨儿</a>
                        </a>
                    </div>
                    <div className="w-full h-[460px] dark:bg-gradient-to-tl dark:from-black dark:to-[#131414] border dark:border-none border-gray-100 drop-shadow rounded-2xl row-span-2 flex flex-col relative">
                        <a className="bg-black-star dark:bg-white-star bg-cover w-72 h-72 lg:w-60 lg:h-60 xl:w-72 xl:h-72 mx-auto mt-0 lg:mt-4 xl:mt-0 ml-2 sm:ml-12 md:ml-12 lg:ml-2"></a>
                        <div className="welcome text-4xl md:text-3xl lg:text-4xl text-black absolute top-80 md:top-80 lg:top-72 xl:top-80 left-14 sm:left-14 md:left-16 lg:left-10 font-tiejili invisible dark:visible">我的歌单</div>
                        <div className="text-4xl md:text-3xl lg:text-4xl text-black absolute top-80 md:top-48 lg:top-72 xl:top-80 left-14 md:left-7 lg:left-10 font-tiejili visible dark:invisible">我的歌单</div>
                        <div className="flex flex-row mt-0 md:mt-24 lg:mt-0 ml-5 md:ml-10 lg:ml-0">
                            <a
                                className="w-9 h-9 border border-gray-300 dark:border-gray-700 rounded-full mt-28 sm:mt-28 md:mt-4 lg:mt-28 ml-9 md:ml-6 lg:ml-9"
                            >
                                <StarFour size={22} color="#ffb41f" className="mx-auto mt-1.5" />
                            </a>
                            <a 
                                className="text-md font-semibold after:content-['↗'] border border-gray-300 dark:border-gray-700 px-3 py-1 ml-4 md:ml-6 lg:ml-4 mt-28 md:mt-4 lg:mt-28 w-fit rounded-full"
                                href="https://y.music.163.com/m/user?id=108144524&dlt=0846&app_version=8.10.60"
                                target="_blank"
                            >
                                点击收听
                            </a>
                        </div>
                    </div>
                    <div className="w-full h-32 bg-white dark:bg-gradient-to-bl dark:from-black dark:to-[#131414] border dark:border-none border-gray-100 drop-shadow rounded-2xl row-span-1 mt-0 lg:-mt-32">
                        <YouTube videoId="IIYmtIQyg54" opts={opts} onReady={onPlayerReady} className="hidden absolute" />
                        <div className="player select-none">
                            <div className="overflow-hidden">
                                <div className="flex">
                                    <div className="items-center">
                                        <a className="text-white"></a>
                                    </div>
                                    <div className="relative md:place-items-center z-0">
                                        <div className="absolute items-center justify-center ml-2">
                                            {isPlaying ? (
                                                <Pause size={32} className="opacity-50 ml-10 mt-12" color="#f6f5f6" onClick={togglePlayPause}/>
                                            ) : (
                                                <Play size={32} className="opacity-50 ml-10 mt-12" color="#f6f5f6" onClick={togglePlayPause}/>
                                            )}
                                        </div>
                                        <div className="h-28 w-28 p-4 mt-2 ml-2">
                                            <img className="h-20 w-20 rounded-md object-cover"
                                                 src="https://s2.loli.net/2023/09/03/2Ip7Dh4tHEKxr3Q.webp" alt="Music cover"/>
                                        </div>
                                    </div>
                                    <div className="place-self-center -ml-2 pr-8 py-2 mt-1 px-3 z-10">
                                        {isPlaying ? (
                                            <div className="flex">
                                          <span className="flex h-3 w-3 mt-0 xl:mt-1">
                                            <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-green-600 opacity-75"></span>
                                            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                                          </span>
                                                <div className="w-32 md:w-[87px] xl:w-28 ml-2 mb-1 text-sm md:text-xs xl:text-sm uppercase leading-3 dark:text-white break-normal">now playing</div>
                                            </div>
                                        ) : (
                                            <div className="flex">
                                          <span className="flex h-3 w-3 mt-0 xl:mt-1">
                                            <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
                                          </span>
                                                <div className="w-32 md:w-[86px] xl:w-24 ml-2 mb-1 text-sm md:text-xs xl:text-sm uppercase leading-3 dark:text-white break-normal">not playing</div>
                                            </div>
                                        )}
                                        <div className="flex flex-col">
                                            <div
                                                className="block text-lg font-semibold leading-tight dark:text-white">Think About You
                                            </div>
                                            <a className="mt-2 text-sm font-medium uppercase leading-3 tracking-wide text-gray-800 dark:text-gray-400">SAFIA</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                
                </div>
            </motion.div>
        </motion.body>
    );
}

export function GradualSpacing() {
    const text = "你好，我是油墨儿！";
    const gradual = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };
    return (
        <div className="flex space-x-0.5">
            <AnimatePresence>
                {text.split("").map((char, i) => (
                    <motion.h1
                        key={i}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={gradual}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="font-display text-3xl font-semibold tracking-[-0.02em] drop-shadow-sm md:text-3xl md:leading-[5rem]"
                    >
                        {char === " " ? <span>&nbsp;</span> : char}
                    </motion.h1>
                ))}
            </AnimatePresence>
        </div>
    );
}

export function BlurIn() {
    const variants1 = {
        hidden: { filter: "blur(10px)", opacity: 0 },
        visible: { filter: "blur(0px)", opacity: 1 },
    };
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
            variants={variants1}
            className="font-display text-md font-normal tracking-[-0.02em] drop-shadow-sm mt-4 md:mt-0 flex flex-col space-y-2"
        >
            <div className="p-2 rounded-t-xl rounded-bl-md rounded-br-xl bg-gray-100 dark:bg-gray-800 w-fit">欢迎👏来到油墨儿的博客</div>
            <div className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 w-fit">我是一名品牌设计师，平时比较喜欢逛博物馆，对于老物件儿，中国文化和艺术品感兴趣。我在 <a href="https://www.xiaohongshu.com/user/profile/5b31d7b4e8ac2b116f227bdc?xhsshare=CopyLink&appuid=5b31d7b4e8ac2b116f227bdc&apptime=1694014842" target="_blank" className="hover:underline text-red-500"> 小红书 </a>做了美学相关的内容，欢迎关注。</div>
            <div className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 w-fit">目前住在中国杭州，有机会可以一起认识下。</div>
            <div className="p-2 rounded-t-xl rounded-bl-md rounded-br-xl bg-gray-100 dark:bg-gray-800 w-fit max-w-[565px]">音乐 🎵 是万万缺不了的，我喜欢的风格比较多，电子/器乐/Pop/。 <a href="/music" className="hover:underline text-red-600">唱片库</a> 里会随缘插入我喜欢或者最近有感触的歌，欢迎收听。</div>
    
            <div className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 w-fit max-w-[565px]">有时间就会阅读，把ta当做工具，或者悦己都可以，你可以在 <a href="/reading" className="hover:underline text-emerald-500">阅读</a> 页面找到。</div>
            <div className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 w-fit">你可以在 <a href="https://okjk.co/bZhgzN" target="_blank" className="hover:underline text-yellow-300">即刻</a> 和 <a href="https://twitter.com/2youmoer" target="_blank" className="hover:underline text-blue-500"> X (Twitter) </a> 上找到我。</div>
            <div className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 w-fit">当然，你也可以通过 <a href="mailto:jiaxinsusu@gmail.com" target="_blank" className="hover:underline text-indigo-500">邮件</a> 联系我，我几乎每天都查看收件箱。</div>
            
             <div className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 w-fit">
                你也可以通过 <a href="/feed.xml哭，还在准备中" className="hover:underline">RSS</a> 方式来订阅我的博客。
            </div>
            <diV className="flex items-center space-x-2 pb-4">
               
            </diV>
        </motion.div>
    );
}

