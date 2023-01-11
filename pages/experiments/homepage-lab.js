import Link from "next/link";
import {ArrowCircleRight, ArrowSquareOut, Pause, Play} from "phosphor-react";
import {motion, useMotionValue, useTransform} from 'framer-motion'
import React, {useRef, useState} from "react";
import YouTube from "react-youtube";
import { StrictMode } from "react";
import { Notebook } from "../../components/Notebook";
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

    const [active, setActive] = useState(false)

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
            <motion.div className="flex md:flex-row flex-col space-y-4">
                <motion.div className="basis-2/7">
                    <motion.div className="jike md:ml-4 mt-4 max-w-[90%] md:max-w-full mx-auto">
                        <div className="flex flex-col rounded-lg bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-black dark:via-[#756707] dark:to-[#ffdb01] drop-shadow-md">
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
                    </motion.div>

                    <motion.div className="flex flex-row space-x-4 md:ml-4 mt-4 max-w-[90%] md:max-w-full mx-auto h-48 md:h-56">
                        <div className="basis-1/2">
                            <Letter />
                        </div>
                        <motion.div className="basis-1/2">
                            <motion.div
                                className="small-card rounded-lg h-48 md:h-full drop-shadow-md bg-gradient-to-br from-[#fdfbfb] to-[#ebedee]"
                            >
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <div className="musicPlayer md:ml-4 mt-4 max-w-[90%] md:max-w-full mx-auto">
                        <YouTube videoId="xLu_r5FWAIo" opts={opts} onReady={onPlayerReady} className="hidden absolute" />
                        <div className="player select-none">
                            <div className="drop-shadow-md mx-auto max-w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-black dark:via-[#083517] dark:to-[#065321] md:max-w-sm">
                                <div className="flex">
                                    <div className="items-center">
                                        <a className="text-white"></a>
                                    </div>
                                    <div className="relative md:place-items-center">
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
                                    <div className="place-self-center py-6 px-3">
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
                                            className="mt-1 block text-lg font-semibold leading-tight dark:text-white">十万嬉皮 <a className="text-sm font-medium uppercase leading-3 tracking-wide text-gray-800 dark:text-gray-400">万能青年旅店</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="timeline relative max-w-[90%] md:max-w-full pt-6 mx-auto bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-black dark:via-[#2e2e2e] dark:to-[#434343] rounded-lg drop-shadow-md mt-4 md:ml-4 overflow-y-scroll h-88"
                    >
                        <div className="relative pl-8">
                            <div className="h-full w-[1px] bg-gray-200 dark:bg-gray-400 left-[20px] top-[5px] absolute"></div>
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
                </motion.div>

                <div className="basis-3/7">
                    <div className="flex bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-black dark:to-[#434343] max-w-[90%] md:max-w-fit h-52 mx-auto rounded-lg">
                        <div className="bg-camera-left bg-cover rounded-3xl h-32 w-32 ml-8 mr-6 mt-6"></div>
                        <div className="flex flex-col justify-items-center">
                            <div className="flex flex-row mx-auto z-0">
                                <div className="w-3 h-12 bg-[#c52e1a]"></div>
                                <div className="w-3 h-12 bg-[#eb9329]"></div>
                                <div className="w-3 h-12 bg-[#e4b021]"></div>
                                <div className="w-3 h-12 bg-[#7ea32c]"></div>
                                <div className="w-3 h-12 bg-[#4886ae]"></div>
                            </div>
                            <div className="bg-camera-center bg-cover rounded-full h-36 w-36 mx-auto -mt-4 z-10"></div>
                        </div>
                        <div className="bg-camera-right bg-cover rounded-3xl h-32 w-32 mr-8 ml-6 mt-6"></div>
                    </div>
                    <div className="container max-w-[90%] mx-4 mx-auto md:max-w-fit aspect-square overflow-x-scroll overflow-x-hidden scroll-smooth snap-x flex flex-row items-center bg-white dark:bg-black rounded-lg">
                        <img className="rounded-lg max-h-fit snap-center shadow-md" src="https://s2.loli.net/2022/12/09/SsfYR78lEVtbQ5N.png" alt="music"></img>
                        <img className="rounded-lg max-h-fit snap-center shadow-md" src="https://s2.loli.net/2022/12/05/WNq6OQ4aeThLnGR.png" alt="music"></img>
                        <img className="rounded-lg max-h-fit snap-center shadow-md" src="https://s2.loli.net/2022/12/09/aec74LltCOy6PnG.png" alt="music"></img>
                        <img className="rounded-lg max-h-fit snap-center shadow-md" src="https://files.catbox.moe/wjnod2.png" alt="music"></img>
                        <img className="rounded-lg max-h-fit snap-center shadow-md" src="https://files.catbox.moe/4oxz6p.png" alt="music"></img>
                        <img className="rounded-lg max-h-fit snap-center shadow-md" src="https://files.catbox.moe/7zwwqu.png" alt="music"></img>
                        <img className="rounded-lg max-h-fit snap-center shadow-md" src="https://files.catbox.moe/9i0d2g.png" alt="music"></img>
                        <img className="rounded-lg max-h-fit snap-center shadow-md" src="https://files.catbox.moe/ibe9j9.png" alt="music"></img>
                    </div>
                </div>
                <div className="basis-2/7">
                    <div className="rounded-lg aspect-square md:mr-4 max-w-[90%] md:max-w-full mx-auto mb-4">
                        <div className="drop-shadow-md rounded-lg bg-light-map dark:bg-dark-map h-80 max-w-full bg-cover bg-center"></div>
                    </div>
                    <motion.div
                        className="max-w-[90%] mx-auto md:max-w-full mb-4 mr-4 flex bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-black dark:via-[#2e2e2e] dark:to-[#434343] rounded-lg drop-shadow-md overflow-hidden"
                        onMouseMove={handleMouse}
                        style={{ height:168 }}
                    >
                        <motion.div
                            style={{rotateX: rotateX, rotateY: rotateY}}
                            className="w-44 h-[100px] flex bg-gradient-to-r from-stone-500 to-stone-700 dark:from-neutral-300 dark:to-stone-400 rounded-lg ml-6 mt-8 drop-shadow-md hover:drop-shadow-xl justify-center items-center"
                        >
                            <div className="-mt-2 -ml-2 text-clip max-h-[100px] overflow-clip text-9xl drop-shadow-md text-gray-400 dark:text-white">₿</div>
                            <div className="mt-12 ml-10 flex -space-x-3">
                                <div className="border border-white w-6 h-6 rounded-full bg-gray-800 z-0"></div>
                                <div className="border border-white w-6 h-6 rounded-full bg-gray-300 z-10"></div>
                            </div>
                        </motion.div>
                        <motion.div className="flex flex-col">
                            <a className="ml-2 mt-10 text-sm text-gray-600 dark:text-gray-300 font-bold text-center leading-4 font-mono max-w-20">if you like my work</a>
                            <a className="ml-2 mt-4 text-lg text-black dark:text-white font-bold text-center leading-4 uppercase font-mono max-w-20">buy me a coffee</a>
                        </motion.div>
                    </motion.div>
                    <div className="map invert dark:invert-0 drop-shadow-md rounded-lg max-w-[90%] md:max-w-full mx-auto">
                        <StrictMode>
                            <Notebook />
                        </StrictMode>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    </motion.body>
    );
}