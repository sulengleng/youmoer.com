import clsx from "clsx";
import Link from "next/link";
import {Pause, Play} from "phosphor-react";
import { motion } from 'framer-motion'
import {SpinnerIcon, ArrowIcon} from "lib/icons"
import classnames from "classnames";
import React, {useRef, useState} from "react";
import YouTube from "react-youtube";


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
                <div className="flex flex-row space-y-4">
                    <div className="basis-2/7">
                        <div className="ml-4">
                            <YouTube videoId="xLu_r5FWAIo" opts={opts} onReady={onPlayerReady} className="hidden absolute" />
                            <div className="player mt-4 select-none">
                                <div className="mx-auto max-w-full overflow-hidden rounded-xl bg-gradient-to-r from-black via-[#083517] to-[#065321] shadow-md md:max-w-sm">
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
                                                className="mt-1 block text-lg font-semibold leading-tight text-white hover:underline">十万嬉皮 <a className="text-sm font-medium uppercase leading-3 tracking-wide text-gray-400">万能青年旅店</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="basis-3/7">
                        <div className="container mt-4 max-w-full mx-auto md:max-w-[90%] h-96 overflow-x-scroll overflow-x-hidden scroll-pl-6 scroll-smooth snap-x flex flex-row space-x-10 items-center bg-gradient-to-r from-gray-700 to-gray-900 rounded-md">
                            <img className="ml-10 rounded-lg max-h-56 snap-center shadow-md" src="https://s2.loli.net/2022/12/09/aec74LltCOy6PnG.png" alt="music"></img>
                            <img className="rounded-lg max-h-56 snap-center shadow-md" src="https://s2.loli.net/2022/12/09/SsfYR78lEVtbQ5N.png" alt="music"></img>
                            <img className="rounded-lg max-h-56 snap-center shadow-md" src="https://s2.loli.net/2022/12/05/WNq6OQ4aeThLnGR.png" alt="music"></img>
                            <img className="rounded-lg max-h-56 snap-center shadow-md" src="https://files.catbox.moe/wjnod2.png" alt="music"></img>
                            <img className="rounded-lg max-h-56 snap-center shadow-md" src="https://files.catbox.moe/4oxz6p.png" alt="music"></img>
                            <img className="rounded-lg max-h-56 snap-center shadow-md" src="https://files.catbox.moe/7zwwqu.png" alt="music"></img>
                            <img className="rounded-lg max-h-56 snap-center shadow-md" src="https://files.catbox.moe/9i0d2g.png" alt="music"></img>
                            <img className="pr-10 rounded-lg max-h-56 snap-center shadow-md" src="https://files.catbox.moe/ibe9j9.png" alt="music"></img>
                        </div>
                    </div>
                    <div className="basis-2/7">
                        <div className="border-2 rounded-md h-96 mt-4 mr-4 "></div>
                    </div>
                </div>
            </motion.div>
        </div>
    </body>
    );
}