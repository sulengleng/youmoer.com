import {Disc, MusicNote, Pause, Play, Star} from "phosphor-react";
import {motion, useMotionValue, useTransform} from 'framer-motion'
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

    const x = useMotionValue(200);
    const y = useMotionValue(200);

    const rotateX = useTransform(y, [0, 400], [30, -15]);
    const rotateY = useTransform(x, [0, 400], [-30, 15]);

    function handleMouse(event) {
        const rect = event.currentTarget.getBoundingClientRect();

        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
    }

    return (
        <motion.body className="selection:bg-[#3b818c]">
            <NextSeo
                title="你好，我是夜游船！"
                description="欢迎来到夜游船的个人网站，我是学生、创造者、设计师"
                openGraph={{
                    site_name: "你好，我是夜游船！",
                    title: "你好，我是夜游船！",
                    description:
                        "欢迎来到夜游船的个人网站，我是学生、创造者、设计师",
                }}
                twitter={{
                    handle: "@yeyouchuan",
                    site: "@yeyouchuan",
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
                <div className="flex flex-col md:grid md:grid-cols-4 gap-4 min-w-screen mt-4 mx-4 ">
                    <div className="w-full h-72 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-gray-800 dark:via-gray-900 dark:to-black rounded-xl relative">
                        <div className="flex flex-row">
                            <img src="https://files.catbox.moe/5scrti.jpg" className="mx-4 mt-4 h-14 w-14 rounded-full"
                                 alt="jike header"/>
                            <div>
                                <a className="mt-6 block text-lg font-semibold leading-tight text-black dark:text-white"
                                   href="https://jike.city/yeyouchuan/"
                                   target="_blank"
                                >
                                    夜游船</a>
                                <a className="text-xs text-gray-600 dark:text-gray-300"
                                   href="https://jike.city/yeyouchuan/"
                                   target="_blank"
                                >
                                    @yeyouchuan</a>
                            </div>
                            <img src="https://s2.loli.net/2023/01/03/uCdbKpVMUs2vw17.png"
                                 className="absolute top-3 right-3 h-8 w-8 rounded-full" alt="jike logo"/>
                        </div>
                        <div>
                            <p className="ml-7 mt-2 text-sm leading-5">
                                04年出生于中国苏州 <br />
                                喜欢读欧美科幻作品 <br />
                                喜欢独立、另类摇滚 <br />
                                喜欢动漫、英美剧 <br />
                                喜欢羽毛球、排球 <br />
                                交互媒体英国本科
                            </p>
                            <p className="ml-7 mt-2 text-sm leading-5">
                                不喜欢只是成为技术的享受者 <br />
                                而是希望能创造一些东西
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-40 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-gray-800 dark:via-gray-900 dark:to-black rounded-xl flex flex-col relative">
                        <div className="flex flex-col">
                            <p className="mt-4 ml-5 md:ml-4 text-2xl font-semibold">10826</p>
                            <p className="-mt-1 ml-6 md:ml-5 text-sm text-gray-500">Scrobbles</p>
                        </div>
                        <img src="https://s2.loli.net/2023/01/16/cAOCi9IwasjXSHB.png"
                             className="absolute top-3 right-3 h-8 w-8 rounded-full" alt="Last.fm logo"/>
                        <div className="border-t mt-4 border-gray-300 dark:border-gray-600"></div>
                        <div className="flex flex-row mt-4 mx-5 md:mx-4">
                            <Star size={20} color="#f8d80d" />
                            <div className="flex flex-col ml-1 -mt-1 md:mt-0">
                                <p className="font-semibold">1132</p>
                                <p className="-mt-1 text-sm text-gray-500">Artists</p>
                            </div>
                            <Disc size={20} color="#6ed49f" className="ml-8 md:ml-3" />
                            <div className="flex flex-col ml-1 -mt-1 md:mt-0">
                                <p className="font-semibold">1969</p>
                                <p className="-mt-1 text-sm text-gray-500">Albums</p>
                            </div>
                            <MusicNote size={20} color="#548eab" className="ml-8 md:ml-3" />
                            <div className="flex flex-col ml-1 -mt-1 md:mt-0">
                                <p className="font-semibold">2889</p>
                                <p className="-mt-1 text-sm text-gray-500">Tracks</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-40 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-gray-800 dark:via-gray-900 dark:to-black rounded-xl flex flex-col relative">
                        <div className="flex flex-col">
                            <p className="mt-4 ml-4 text-sm text-gray-500">小宇宙</p>
                            <p className="ml-4 text-sm font-semibold">收听时长</p>
                        </div>
                        <img src="https://s2.loli.net/2023/01/16/4PhMLmkjT9SQUti.png"
                             className="absolute top-3 right-3 h-9 w-9 rounded-full border-[#34b6de]" alt="xyzfm logo"/>
                        <div className="flex flex-row">
                            <p className="mt-10 ml-4 text-4xl font-semibold">268</p>
                            <p className="mt-14 ml-1 text-sm text-gray-500">小时</p>
                            <p className="mt-10 ml-1 text-4xl font-semibold">48</p>
                            <p className="mt-14 ml-1 text-sm text-gray-500">分钟</p>
                        </div>
                    </div>
                    <div className="w-full h-40 md:h-56 flex flex-row md:flex-col bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-gray-800 dark:via-gray-900 dark:to-black rounded-xl">
                        <motion.div
                            className="mx-auto flex flex-col rounded-lg drop-shadow-md overflow-hidden relative ml-4 md:ml-0 w-full md:w-full"
                            onMouseMove={handleMouse}
                            style={{ height:177 }}
                        >
                            <div className="absolute -top-2 -left-4 md:top-4 md:left-6 w-20 h-20 md:h-10 md:w-10 xl:h-14 xl:w-14 scale-50 rounded-full bg-gradient-to-br from-red-300 via-pink-400 to-purple-200 sm:scale-100"></div>
                            <div className="absolute top-[70px] left-32 md:top-[100px] md:right-6 xl:top-[120px] xl:right-6 w-20 h-20 md:h-10 md:w-10 xl:h-14 xl:w-14 scale-50 rounded-full bg-gradient-to-tr from-red-300 via-pink-300 to-orange-100 sm:scale-100"></div>
                            <motion.div
                                style={{rotateX: rotateX, rotateY: rotateY}}
                                className="mask pointer-events-none relative z-10 w-40 xl:w-52 h-[100px] xl:h-[130px] mt-6 md:mt-8 ml-4 md:ml-8 xl:ml-10 select-none rounded-xl bg-[#262f70]/20 p-4 backdrop-blur-2xl after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-br after:from-white/80 after:via-white/10 after:to-white/80 after:p-px"
                            >
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 xl:h-10 xl:w-10 opacity-75 mt-3 xl:mt-6"
                                         viewBox="0 0 609.9 609.9">
                                        <path fill="#fff"
                                              d="M570.3 542.5H39.5A39.6 39.6 0 0 1 0 503v-396a39.6 39.6 0 0 1 39.5-39.5h530.6c22 0 39.7 17.8 39.7 39.6v395.9c0 21.9-17.7 39.6-39.5 39.6z"/>
                                        <path fill="#fff"
                                              d="M570.3 67.4H304.9v475.1h265.4c21.9 0 39.5-17.7 39.5-39.5V107a39.6 39.6 0 0 0-39.5-39.6z"/>
                                        <path fill="#CCC"
                                              d="M609.8 313.1v-16.3h-213v-72l55-55h158c0-5.7-.6-11.2-1.5-16.4h-160a8 8 0 0 0-5.7 2.5l-57.4 57.3h-72V67.4h-16.4v145.7h-71.2l-57.3-57.3a8.4 8.4 0 0 0-5.8-2.5H1.7C.7 158.6 0 164 0 169.6h159l54 54v73H0v16.3h213v73l-53.9 54.3H.1c0 5.6.6 11 1.6 16.3h160.9c2.1 0 4.3-1 5.8-2.5l57.3-57.3h71.2v145.7h16.3V396.7h72.1l57.4 57.3a8 8 0 0 0 5.7 2.5h160c1-5.3 1.5-10.8 1.5-16.3H451.6l-55-55v-72zm-229.4 67.3h-151v-151h150.9v151z"/>
                                        <path
                                            d="M609.8 313.1v-16.3h-213v-72l55-55h158c0-5.7-.6-11.2-1.5-16.4h-160a8 8 0 0 0-5.7 2.5l-57.4 57.3h-72V67.4h-8.3v162h75.5v151H305v162h8.2V396.7h72l57.5 57.3a8 8 0 0 0 5.7 2.5h160c1-5.3 1.5-10.7 1.5-16.3H451.6l-55-55v-72z"
                                            fill="#CCC"/>
                                    </svg>
                                </div>
                                <div className="mt-0 xl:mt-3 ml-[95px] xl:ml-36 flex -space-x-3">
                                    <div className="border border-white w-6 h-6 rounded-full bg-gray-800 z-0"></div>
                                    <div className="border border-white w-6 h-6 rounded-full bg-gray-300 z-10"></div>
                                </div>
                            </motion.div>
                        </motion.div>
                        <a className="text-sm mt-8 md:-mt-4 xl:mt-2  md:mr-0 mx-0 md:mx-auto w-24 md:w-40 uppercase font-semibold"
                           href="https://www.buymeacoffee.com/yeyouchuan"
                           target="_blank"
                        >
                            buy me a coffee ~</a>
                    </div>
                    <div className="w-full h-32 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-gray-800 dark:via-gray-900 dark:to-black rounded-xl">
                        <YouTube videoId="r6cXfBnxHI4" opts={opts} onReady={onPlayerReady} className="hidden absolute" />
                        <div className="player select-none">
                            <div className="overflow-hidden">
                                <div className="flex">
                                    <div className="items-center">
                                        <a className="text-white"></a>
                                    </div>
                                    <div className="relative md:place-items-center z-0">
                                        <div className="absolute items-center justify-center">
                                            {isPlaying ? (
                                                <Pause size={32} className="opacity-50 ml-10 mt-12" color="#f6f5f6" onClick={togglePlayPause}/>
                                            ) : (
                                                <Play size={32} className="opacity-50 ml-10 mt-12" color="#f6f5f6" onClick={togglePlayPause}/>
                                            )}
                                        </div>
                                        <img className="h-28 w-28 md:h-28 md:w-28 rounded-md object-cover p-6 xl:p-6 mt-2"
                                             src="https://s2.loli.net/2023/01/18/i6M1WQJg7PmErbO.png" alt="Music cover"/>
                                    </div>
                                    <div className="place-self-center -ml-4 pr-8 py-2 mt-1 px-3 z-10">
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
                                                className="block text-lg font-semibold leading-tight dark:text-white">山雀
                                            </div>
                                            <a className="mt-2 text-sm font-medium uppercase leading-3 tracking-wide text-gray-800 dark:text-gray-400">万能青年旅店</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-80 md:h-128 bg-question bg-cover rounded-xl animate-pulse dark:invert col-span-2 md:-mt-32"></div>
                    <div className="w-full h-72 md:h-108 relative flex flex-col bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-gray-800 dark:via-gray-900 dark:to-black rounded-xl md:-mt-16">
                        <div className="absolute mt-6 place-self-center text-lg font-semibold">我喜欢的产品</div>
                        <div className="grid grid-cols-3 md:grid-cols-2 xl:grid-cols-3 place-self-center ml-0 xl:ml-6 mt-20 md:mt-24 gap-y-6 gap-10">
                            <a className="h-20 w-20 ml-6 md:ml-8 -rotate-6 rounded-2xl bg-obsidian-icon-white dark:bg-obsidian-icon bg-cover" href="https://obsidian.md/" target="_blank"></a>
                            <a className="h-20 w-20 ml-3 md:ml-0 rotate-2 rounded-2xl bg-figma-icon-white dark:bg-figma-icon bg-cover" href="https://figma.com/" target="_blank"></a>
                            <a className="h-20 w-20 ml-0 md:ml-8 mt-0 md:mt-4 rotate-6 rounded-2xl bg-zotero-icon bg-cover" href="https://www.zotero.org/" target="_blank"></a>
                            <a className="h-20 w-20 ml-6 md:ml-0 mt-0 md:mt-4 -rotate-3 rounded-2xl bg-notion-icon bg-cover" href="https://notion.so/" target="_blank"></a>
                            <a className="h-20 w-20 ml-3 md:ml-8 mt-0 md:mt-4 -rotate-2 rounded-2xl bg-readwise-icon dark:bg-readwise-icon-dark bg-cover" href="https://readwise.io/read/" target="_blank"></a>
                            <a className="h-20 w-20 mt-0 md:mt-4 rotate-6 rounded-lg bg-discord-icon dark:bg-discord-icon-black bg-cover" href="https://discord.com/" target="_blank"></a>
                        </div>
                    </div>
                    <div className="w-full h-40 relative flex flex-col bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-gray-800 dark:via-gray-900 dark:to-black rounded-xl md:-mt-64">
                        <p className="mt-4 md:mt-2 ml-6 text-lg font-semibold">Powered by</p>
                        <p className="mt-3 ml-5 flex flex-col text-lg font-medium">
                            <span className="inline-flex items-baseline">
                              <img src="https://s2.loli.net/2023/01/19/BzxjDT9MdeuZEtQ.png" alt=""
                                   className="mx-1 mr-2 h-6 w-6 self-center rounded-md"/>
                              <a href="https://tailwindcss.com/">Tailwind CSS</a>
                            </span>
                            <span className="mt-1 -ml-[1px] inline-flex items-baseline">
                              <img src="https://s2.loli.net/2023/01/19/ON7aHI2CVqwFGrk.png" alt=""
                                   className="h-8 w-9 self-center"/>
                              <a href="https://www.github.com/" className="mt-[1px]">Github</a>
                            </span>
                            <span className="inline-flex items-baseline">
                              <img src="https://s2.loli.net/2023/01/19/4T7JjwE2bWXsCmc.png" alt=""
                                   className="mx-1 mr-2 h-6 w-6 self-center rounded-md"/>
                              <a href="https://www.Vercel.com/">Vercel</a>
                            </span>
                        </p>
                    </div>
                    <div className="w-full h-44 rounded-xl col-span-2 flex flex-row gap-4">
                        <div className="w-full md:w-2/3 h-40 md:h-44 relative flex flex-col rounded-xl bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-gray-800 dark:via-gray-900 dark:to-black">

                            <p className="mt-4 ml-4 xl:ml-6 text-xs md:text-sm max-w-[210px] md:max-w-[280px] xl:max-w-xs font-serif font-semibold text-justify">后来他说：“会传染。” 我说：“什么会传染？ 他说：“出海病。”
                                他说：“你望着海。你见有人从海上来，有人从海上行远。你听讲有人再不回头，在一处远得不可思议地方过活。一旦你开始细想那处远得不可思议地方、那种不可思议的远，你就感染出海病。” </p>
                            <div className="absolute bottom-3 right-5 md:right-4 xl:right-11 flex flex-row">
                                <p className="text-xs font-semibold">林棹</p>
                                <p className="ml-2 text-xs">潮汐图</p>
                            </div>
                        </div>
                        <div className="w-1/3 h-40 md:h-44 rounded-xl bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-gray-800 dark:via-gray-900 dark:to-black">
                            <img className="mx-auto my-auto mt-6 md:mt-4 mt-4 h-auto md:h-[85%] w-[95%] md:w-auto rounded-lg" src="https://s2.loli.net/2023/01/17/7lzrw29VK4SIokB.png" alt="book cover"></img>
                        </div>
                    </div>
                    <div className="w-full h-44 relative flex flex-col bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-gray-800 dark:via-gray-900 dark:to-black rounded-xl">
                        <a className="mt-4 place-self-center text-lg font-semibold hover:animate-bounce" href="mailto:yeyouchuan@gmail.com">Email me</a>
                        <div className="mt-4 mx-4 flex flex-col bg-white dark:bg-black h-24 w-[310px] md:w-52 xl:w-64 rounded-md">
                            <a className="mt-2 ml-2 text-sm font-semibold" href="mailto:yeyouchuan@gmail.com">To yeyouchuan@gmail.com</a>
                            <div className="border-t border-[#e5e5e5] dark:border-gray-700 mt-1 w-[93%] mx-auto"></div>
                            <p className="mt-1 ml-2 text-sm">Let's Chat</p>
                            <div className="border-t border-[#e5e5e5] dark:border-gray-700 mt-1 w-[93%] mx-auto"></div>
                            <p className="mt-1 ml-2 text-sm text-gray-600 dark:text-gray-400">Say hello</p>
                        </div>
                    </div>
                    <div className="w-full h-64 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-gray-800 dark:via-gray-900 dark:to-black rounded-xl md:-mt-68">
                        <div className="rounded-lg bg-light-map dark:bg-dark-map h-64 max-w-full bg-cover bg-center"></div>
                    </div>
                </div>
            </motion.div>
        </motion.body>
    );
}
