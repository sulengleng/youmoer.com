import Link from "next/link";
import {ArrowCircleRight, ArrowSquareOut, Pause, Play} from "phosphor-react";
import {motion, useMotionValue, useTransform} from 'framer-motion'
import React, {useRef, useState} from "react";
import YouTube from "react-youtube";
import { Letter } from "../../components/Letter/letter";

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
            <div className="flex flex-row md:grid md:grid-cols-4 gap-4 min-w-screen mt-4 mx-4 ">
                <div className="w-full h-72 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-black dark:via-[#2e2e2e] dark:to-[#434343] rounded-xl"></div>
                <div className="w-full h-40 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-black dark:via-[#2e2e2e] dark:to-[#434343] rounded-xl"></div>
                <div className="w-full h-40 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-black dark:via-[#2e2e2e] dark:to-[#434343] rounded-xl"></div>
                <div className="w-full h-56 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-black dark:via-[#2e2e2e] dark:to-[#434343] rounded-xl">
                    <motion.div
                        className="max-w-[90%] mx-auto flex rounded-lg drop-shadow-md overflow-hidden"
                        onMouseMove={handleMouse}
                        style={{ height:168 }}
                    >
                        <motion.div
                            style={{rotateX: rotateX, rotateY: rotateY}}
                            className="w-40 xl:w-52 md:h-[100px] xl:h-[130px] bg-gradient-to-r from-stone-500 to-stone-700 dark:from-neutral-300 dark:to-stone-400 rounded-lg ml-6 mt-8 drop-shadow-md hover:drop-shadow-xl justify-center items-center"
                        >
                            <div className="-mt-1 ml-2 text-clip max-h-[130px] overflow-clip text-8xl xl:text-9xl drop-shadow-md text-gray-400 dark:text-white">₿</div>
                            <div className="-mt-8 ml-[115px] xl:ml-40 flex -space-x-3">
                                <div className="border border-white w-6 h-6 rounded-full bg-gray-800 z-0"></div>
                                <div className="border border-white w-6 h-6 rounded-full bg-gray-300 z-10"></div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
                <div className="w-full h-32 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-black dark:via-[#2e2e2e] dark:to-[#434343] rounded-xl">
                    <YouTube videoId="xLu_r5FWAIo" opts={opts} onReady={onPlayerReady} className="hidden absolute" />
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
                                    <img className="h-28 w-28 md:h-28 md:w-28 rounded-md object-cover p-6 mt-2"
                                         src="https://files.catbox.moe/9i0d2g.png" alt="Music cover"/>
                                </div>
                                <div className="place-self-center -ml-4 pr-8 py-2 mt-1 px-3 z-10">
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
                                    <div className="flex flex-col">
                                        <div
                                            className="block text-lg font-semibold leading-tight dark:text-white">十万嬉皮
                                        </div>
                                        <a className="mt-2 text-sm font-medium uppercase leading-3 tracking-wide text-gray-800 dark:text-gray-400">万能青年旅店</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-128 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-black dark:via-[#2e2e2e] dark:to-[#434343] rounded-xl col-span-2 -mt-32"></div>
                <div className="w-full h-108 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-black dark:via-[#2e2e2e] dark:to-[#434343] rounded-xl -mt-16"></div>
                <div className="w-full h-40 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-black dark:via-[#2e2e2e] dark:to-[#434343] rounded-xl -mt-64"></div>
                <div className="w-full h-44 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-black dark:via-[#2e2e2e] dark:to-[#434343] rounded-xl"></div>
                <div className="w-full h-44 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-black dark:via-[#2e2e2e] dark:to-[#434343] rounded-xl col-span-2"></div>
                <div className="w-full h-64 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-black dark:via-[#2e2e2e] dark:to-[#434343] rounded-xl -mt-68"></div>
            </div>
        </motion.body>
    );
}
