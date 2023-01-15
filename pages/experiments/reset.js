import Link from "next/link";
import {ArrowCircleRight, ArrowSquareOut, Disc, MusicNote, Pause, Play, Star} from "phosphor-react";
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
                <div className="w-full h-72 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-black dark:via-[#2e2e2e] dark:to-[#434343] rounded-xl relative">
                    <div className="flex flex-row">
                        <img src="https://files.catbox.moe/5scrti.jpg" className="mx-4 mt-4 h-14 w-14 rounded-full"
                             alt="jike header"/>
                        <div>
                            <a className="mt-6 block text-lg font-semibold leading-tight text-black dark:text-white">夜游船</a>
                            <a className="text-xs text-gray-600 dark:text-gray-300"
                               href="https://jike.city/yeyouchuan/">@yeyouchuan</a>
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
                <div className="w-full h-40 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-black dark:via-[#2e2e2e] dark:to-[#434343] rounded-xl flex flex-col relative">
                    <div className="flex flex-col">
                        <a className="mt-4 ml-5 md:ml-4 text-2xl font-semibold">10380</a>
                        <a className="-mt-1 ml-6 md:ml-5 text-sm text-gray-500">Scrobbles</a>
                    </div>
                    <img src="https://s2.loli.net/2023/01/16/cAOCi9IwasjXSHB.png"
                         className="absolute top-3 right-3 h-8 w-8 rounded-full" alt="Last.fm logo"/>
                    <div className="border-t mt-4 border-gray-300 dark:border-gray-600"></div>
                    <div className="flex flex-row mt-4 mx-5 md:mx-4">
                        <Star size={20} color="#f8d80d" />
                        <div className="flex flex-col ml-1 -mt-1 md:mt-0">
                            <a className="font-semibold">1125</a>
                            <a className="-mt-1 text-sm text-gray-500">Artists</a>
                        </div>
                        <Disc size={20} color="#6ed49f" className="ml-8 md:ml-3" />
                        <div className="flex flex-col ml-1 -mt-1 md:mt-0">
                            <a className="font-semibold">1942</a>
                            <a className="-mt-1 text-sm text-gray-500">Albums</a>
                        </div>
                        <MusicNote size={20} color="#548eab" className="ml-8 md:ml-3" />
                        <div className="flex flex-col ml-1 -mt-1 md:mt-0">
                            <a className="font-semibold">2851</a>
                            <a className="-mt-1 text-sm text-gray-500">Tracks</a>
                        </div>
                    </div>
                </div>
                <div className="w-full h-40 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-black dark:via-[#2e2e2e] dark:to-[#434343] rounded-xl flex flex-col relative">
                    <div className="flex flex-col">
                        <a className="mt-4 ml-4 text-sm text-gray-500">小宇宙</a>
                        <a className="ml-4 text-sm font-semibold">收听时长</a>
                    </div>
                    <img src="https://s2.loli.net/2023/01/16/4PhMLmkjT9SQUti.png"
                         className="absolute top-3 right-3 h-8 w-8 rounded-full" alt="xyzfm logo"/>
                    <div className="flex flex-row">
                        <a className="mt-10 ml-4 text-4xl font-semibold">241</a>
                        <a className="mt-14 ml-1 text-sm text-gray-500">小时</a>
                        <a className="mt-10 ml-1 text-4xl font-semibold">15</a>
                        <a className="mt-14 ml-1 text-sm text-gray-500">分钟</a>
                    </div>
                </div>
                <div className="w-full h-40 md:h-56 flex flex-row md:flex-col bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-black dark:via-[#2e2e2e] dark:to-[#434343] rounded-xl">
                    <motion.div
                        className="mx-auto flex flex-col rounded-lg drop-shadow-md overflow-hidden"
                        onMouseMove={handleMouse}
                        style={{ height:168 }}
                    >
                        <motion.div
                            style={{rotateX: rotateX, rotateY: rotateY}}
                            className="w-40 xl:w-52 h-[100px] xl:h-[130px] mt-6 md:mt-8 ml-0 md:ml-0 bg-gradient-to-r from-stone-500 to-stone-700 dark:from-neutral-300 dark:to-stone-400 rounded-lg drop-shadow-md hover:drop-shadow-xl justify-center items-center"
                        >
                            <div className="-mt-1 ml-2 text-clip max-h-[130px] overflow-clip text-8xl xl:text-9xl drop-shadow-md text-gray-400 dark:text-white">₿</div>
                            <div className="-mt-8 ml-[115px] xl:ml-40 flex -space-x-3">
                                <div className="border border-white w-6 h-6 rounded-full bg-gray-800 z-0"></div>
                                <div className="border border-white w-6 h-6 rounded-full bg-gray-300 z-10"></div>
                            </div>
                        </motion.div>
                    </motion.div>
                    <a className="text-sm mt-14 md:-mt-4 xl:mt-2 ml-2 md:ml-14 xl:ml-20 mr-6 md:mr-0 w-20 md:w-40 uppercase font-semibold">buy me a coffee</a>
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
                                    <img className="h-28 w-28 md:h-28 md:w-28 rounded-md object-cover p-6 xl:p-6 mt-2"
                                         src="https://files.catbox.moe/9i0d2g.png" alt="Music cover"/>
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
                                            className="block text-lg font-semibold leading-tight dark:text-white">十万嬉皮
                                        </div>
                                        <a className="mt-2 text-sm font-medium uppercase leading-3 tracking-wide text-gray-800 dark:text-gray-400">万能青年旅店</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-128 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-black dark:via-[#2e2e2e] dark:to-[#434343] rounded-xl col-span-2 md:-mt-32"></div>
                <div className="w-full h-108 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-black dark:via-[#2e2e2e] dark:to-[#434343] rounded-xl md:-mt-16"></div>
                <div className="w-full h-40 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-black dark:via-[#2e2e2e] dark:to-[#434343] rounded-xl md:-mt-64"></div>
                <div className="w-full h-44 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-black dark:via-[#2e2e2e] dark:to-[#434343] rounded-xl col-span-2"></div>
                <div className="w-full h-44 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-black dark:via-[#2e2e2e] dark:to-[#434343] rounded-xl"></div>
                <div className="w-full h-64 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-black dark:via-[#2e2e2e] dark:to-[#434343] rounded-xl md:-mt-68"></div>
            </div>
            </motion.div>
        </motion.body>
    );
}
