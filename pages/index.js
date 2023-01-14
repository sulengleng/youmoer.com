import Link from "next/link";
import {ArrowCircleRight, ArrowSquareOut, Pause, Play} from "phosphor-react";
import {motion, useMotionValue, useTransform} from 'framer-motion'
import React, {useRef, useState} from "react";
import YouTube from "react-youtube";
import { Letter } from "../components/Letter/letter";

export default function Home() {
    const TIMELINE = [
        {
            date: 'Jan 1, 2023',
            title: '新的开始',
            description: '祝所有人新年快乐！',
        },
        {
            date: 'Dec 31, 2022',
            title: '非常快乐的一年!',
            description: '今年对我来做是非常有意义的一年，感觉个人的边界比以前提升了10倍',
        },
        {
            date: 'Nov 23, 2022',
            title: '个人网站开始上线',
            description: '也欢迎你来我之前的数字花园 https://yeyouchuan.top',
            link: 'https://yeyouchuan.top'
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
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.35, delay: 0.2 },
                }}
                className="page"
            >
                <div className="grid grid-rows-4 grid-flow-col gap-4 max-w-full">
                    <motion.div className="jike relative mt-4 max-w-[90%] md:max-w-fit xl:max-w-full mx-auto">
                        <div className="flex flex-col rounded-lg bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-black dark:via-[#756707] dark:to-[#ffdb01] drop-shadow-md">
                            <div className="flex flex-row">
                                <img src="https://files.catbox.moe/5scrti.jpg"
                                     className="mt-4 mx-4 rounded-full h-12 w-12" alt="jike header"/>
                                <div>
                                    <a className="mt-5 block text-base font-semibold leading-tight text-black dark:text-white">夜游船</a>
                                    <Link className="text-gray-600 dark:text-gray-300 text-xs" href="https://jike.city/yeyouchuan/">@yeyouchuan</Link>
                                </div>
                                <img src="https://s2.loli.net/2023/01/03/uCdbKpVMUs2vw17.png"
                                     className="w-8 h-8 rounded-full absolute top-2.5 right-2.5" alt="jike logo"/>
                            </div>
                            <div className="flex flex-row space-x-2 mb-4 mt-4">
                                <button className="shadow-sm text-sm bg-white dark:bg-grey-800 w-10 h-10 rounded-full ml-5"
                                        type="button"
                                        onClick="href='https://m.okjike.com/users/E590A8B2-6A76-455D-BCA7-199A5AE43C7E'">🎉
                                </button>
                                <button className="shadow-sm text-sm text-black font-semibold bg-yellow-300 rounded-full w-60 lg:w-60 md:w-48 h-10 pr-4"
                                        type="button"
                                        onClick="href='https://m.okjike.com/users/E590A8B2-6A76-455D-BCA7-199A5AE43C7E'">+关注
                                </button>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className="flex flex-row space-x-4 md:ml-4 mt-4 max-w-[90%] md:max-w-full xl:max-w-full mx-auto h-48 xl:h-56">
                        <div className="basis-1/2">
                            <Letter>
                                <div className="absolute top-8 left-8 w-24 h-24 md:h-20 md:w-20 xl:w-24 xl:h-24 bg-dash-board bg-cover"></div>
                            </Letter>
                        </div>
                        <motion.div className="basis-1/2">
                            <motion.div
                                className="small-card relative rounded-lg h-48 md:h-full max-w-full md:max-w-full xl:max-w-full drop-shadow-md bg-gradient-to-br from-[#fdfbfb] to-[#ebedee]"
                            >
                                <div className="absolute top-8 left-8 w-24 h-24 md:h-20 md:w-20 xl:w-20 xl:h-20 bg-braun-dot bg-cover"></div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <div className="musicPlayer md:ml-4 mt-4 max-w-[90%] md:max-w-fit xl:max-w-full mx-auto">
                        <YouTube videoId="xLu_r5FWAIo" opts={opts} onReady={onPlayerReady} className="hidden absolute" />
                        <div className="player select-none">
                            <div className="drop-shadow-md mx-auto max-w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-black dark:via-[#083517] dark:to-[#065321] md:max-w-sm">
                                <div className="flex">
                                    <div className="items-center">
                                        <a className="text-white"></a>
                                    </div>
                                    <div className="relative md:place-items-center z-0">
                                        <div className="absolute items-center justify-center">
                                            {isPlaying ? (
                                                <Pause size={32} className="opacity-50 ml-10 mt-10" color="#f6f5f6" onClick={togglePlayPause}/>
                                            ) : (
                                                <Play size={32} className="opacity-50 ml-10 mt-10" color="#f6f5f6" onClick={togglePlayPause}/>
                                            )}
                                        </div>
                                        <img className="h-28 w-28 md:h-28 md:w-28 rounded-md object-cover p-6"
                                             src="https://files.catbox.moe/9i0d2g.png" alt="Music cover"/>
                                    </div>
                                    <div className="place-self-center -ml-4 pr-8 py-1 xl:pr-0 xl:-ml-0 xl:py-6 px-3 z-10">
                                        {isPlaying ? (
                                            <div className="flex">
                                          <span className="flex h-3 w-3">
                                            <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-green-600 opacity-75"></span>
                                            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                                          </span>
                                                <div className="ml-2 mb-2 text-sm uppercase leading-3 dark:text-white">now playing</div>
                                            </div>
                                        ) : (
                                            <div className="flex">
                                          <span className="flex h-3 w-3">
                                            <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
                                          </span>
                                                <div className="ml-2 mb-2 text-sm uppercase leading-3 dark:text-white">not playing</div>
                                            </div>
                                        )}
                                        <div
                                            className="mt-1 block text-lg font-semibold leading-tight dark:text-white">十万嬉皮 <a className="text-sm xl:ml-0 font-medium uppercase leading-3 tracking-wide text-gray-800 dark:text-gray-400">万能青年旅店</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.body>
    )
}