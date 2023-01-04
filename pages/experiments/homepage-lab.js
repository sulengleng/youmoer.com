import clsx from "clsx";
import Link from "next/link";
import {ArrowCircleRight, ArrowSquareOut, Pause, Play} from "phosphor-react";
import { motion } from 'framer-motion'
import React, {useRef, useState} from "react";
import YouTube from "react-youtube";


export default function Home() {
    const TIMELINE = [
        {
            date: "Jan 4 2023",
            title: "The first day of the new year",
            description: "lalala",
        },
        {
            date: "Jan 5 2023",
            title: "The second day of the new year",
            description: "lalala",
        },
        {
            date: "Jan 6 2023",
            title: "The third day of the new year",
            description: "lalala",
        },
        {
            date: "Jan 7 2023",
            title: "The fourth day of the new year",
            description: "lalala",
        },
        {
            date: "Jan 8 2023",
            title: "The fifth day of the new year",
            description: "lalala",
        },
        {
            date: "Jan 9 2023",
            title: "The sixth day of the new year",
            description: "lalala",
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
    ]

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
                <div className="flex md:flex-row flex-col space-y-4">
                    <div className="basis-2/7">
                        <div className="jike md:ml-4 mt-4 max-w-[90%] md:max-w-full mx-auto">
                            <div className="flex flex-col rounded-lg bg-gray-100 dark:bg-black drop-shadow-md">
                                <div className="flex flex-row">
                                    <img src="https://files.catbox.moe/5scrti.jpg"
                                         className="mt-4 mx-4 rounded-full h-12 w-12" alt="jike header"/>
                                    <div>
                                        <a className="mt-5 block text-base font-semibold leading-tight text-black dark:text-white">夜游船</a>
                                        <Link className="text-gray-600 dark:text-gray-300 text-xs" href="https://jike.city/yeyouchuan/">@yeyouchuan</Link>
                                    </div>
                                    <img src="https://s2.loli.net/2023/01/03/uCdbKpVMUs2vw17.png"
                                         className="w-8 h-8 mt-4 ml-28 rounded-full" alt="jike logo"/>
                                </div>
                                <div className="flex flex-row space-x-2 mb-4 mt-4">
                                    <button className="shadow-sm text-sm bg-white dark:bg-grey-800 w-10 h-10 rounded-full ml-5"
                                            type="button"
                                            onClick="location.href='https://m.okjike.com/users/E590A8B2-6A76-455D-BCA7-199A5AE43C7E'">🎉
                                    </button>
                                    <button className="shadow-sm text-sm text-black font-semibold bg-yellow-300 rounded-full w-60 h-10 mr-4"
                                            type="button"
                                            onClick="location.href='https://m.okjike.com/users/E590A8B2-6A76-455D-BCA7-199A5AE43C7E'">+关注
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="md:ml-4 mt-4 max-w-[90%] md:max-w-full mx-auto">
                            <YouTube videoId="xLu_r5FWAIo" opts={opts} onReady={onPlayerReady} className="hidden absolute" />
                            <div className="player select-none">
                                <div className="drop-shadow-md mx-auto max-w-full overflow-hidden rounded-xl bg-gradient-to-r from-black via-[#083517] to-[#065321] shadow-md md:max-w-sm">
                                    <div className="flex">
                                        <div className="items-center">
                                            <a className="text-white"></a>
                                        </div>
                                        <div className="relative md:place-items-center">
                                            <div className="absolute items-center justify-center">
                                                {isPlaying ? (
                                                    <Pause size={32} className="opacity-50 ml-10 mt-10 md:ml-10 md:mt-10" color="#f6f5f6" onClick={togglePlayPause}/>
                                                ) : (
                                                    <Play size={32} className="opacity-50 ml-10 mt-10 md:ml-10 md:mt-10" color="#f6f5f6" onClick={togglePlayPause}/>
                                                )}
                                            </div>
                                            <img className="h-28 w-28 md:h-28 md:w-28 rounded-md object-cover p-6"
                                                 src="https://files.catbox.moe/9i0d2g.png" alt="Music cover"/>
                                        </div>
                                        <div className="place-self-center py-6 px-3">
                                            {isPlaying ? (
                                                <div className="flex">
                                          <span className="flex h-3 w-3">
                                            <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-green-600 opacity-75"></span>
                                            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                                          </span>
                                                    <div className="ml-2 mb-2 text-sm uppercase leading-3 text-white">now playing</div>
                                                </div>
                                            ) : (
                                                <div className="flex">
                                          <span className="flex h-3 w-3">
                                            <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-red-600 opacity-75"></span>
                                            <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
                                          </span>
                                                    <div className="ml-2 mb-2 text-sm uppercase leading-3 text-white">not playing</div>
                                                </div>
                                            )}
                                            <div
                                                className="mt-1 block text-lg font-semibold leading-tight text-white">十万嬉皮 <a className="text-sm font-medium uppercase leading-3 tracking-wide text-gray-400">万能青年旅店</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="max-w-[90%] md:max-w-full mx-auto pt-6 bg-gray-100 rounded-lg drop-shadow-md dark:bg-gray-900 mt-4 md:ml-4 overflow-y-scroll h-96"
                        >
                            <div className="bg-gray-100/80 h-8 rounded-t-lg fixed top-0 left-0 right-0"></div>
                            <div className="relative pl-8">
                                <div className="h-full w-[1px] bg-gray-200 dark:bg-gray-800 left-[20px] top-[5px] absolute"></div>
                                {TIMELINE?.map((item, index) => (
                                    <div key={item.title + index} className="mb-10 relative">
                                        <div className="w-3 h-3 rounded-full absolute left-[-20px] top-[16px]">
                                            <ArrowCircleRight
                                                size={18}
                                                className="bg-white text-gray-400 dark:text-gray-400 dark:bg-gray-900 rounded-full"
                                            />
                                        </div>
                                        <p className="opacity-40 text-xs ml-2">{item.date}</p>

                                        <h3 className="leading-tight mb-1 font-semibold text-sm md:text-base inline-block">
                                            <span className="ml-2">{item.title}</span>
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
                                        <p className="opacity-60 text-sm ml-2">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="basis-3/7">
                        <div className="container max-w-[90%] mx-auto md:w-112 aspect-square overflow-x-scroll overflow-x-hidden scroll-smooth snap-x flex flex-row items-center bg-white dark:bg-black rounded-lg">
                            <img className="rounded-lg max-h-112 snap-center shadow-md" src="https://s2.loli.net/2022/12/09/aec74LltCOy6PnG.png" alt="music"></img>
                            <img className="rounded-lg max-h-112 snap-center shadow-md" src="https://s2.loli.net/2022/12/09/SsfYR78lEVtbQ5N.png" alt="music"></img>
                            <img className="rounded-lg max-h-112 snap-center shadow-md" src="https://s2.loli.net/2022/12/05/WNq6OQ4aeThLnGR.png" alt="music"></img>
                            <img className="rounded-lg max-h-112 snap-center shadow-md" src="https://files.catbox.moe/wjnod2.png" alt="music"></img>
                            <img className="rounded-lg max-h-112 snap-center shadow-md" src="https://files.catbox.moe/4oxz6p.png" alt="music"></img>
                            <img className="rounded-lg max-h-112 snap-center shadow-md" src="https://files.catbox.moe/7zwwqu.png" alt="music"></img>
                            <img className="rounded-lg max-h-112 snap-center shadow-md" src="https://files.catbox.moe/9i0d2g.png" alt="music"></img>
                            <img className="rounded-lg max-h-112 snap-center shadow-md" src="https://files.catbox.moe/ibe9j9.png" alt="music"></img>
                        </div>
                    </div>
                    <div className="basis-2/7">
                        <div className="border-2 rounded-md aspect-square h-80 md:mr-4 max-w-[90%] md:max-w-full mx-auto bg-light-map dark:bg-dark-map">
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    </body>
    );
}