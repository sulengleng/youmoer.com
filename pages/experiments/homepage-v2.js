import Link from "next/link";
import {ArrowCircleRight, ArrowSquareOut, Pause, Play} from "phosphor-react";
import {motion, useMotionValue, useTransform} from 'framer-motion'
import React, {useRef, useState} from "react";
import YouTube from "react-youtube";
import { Letter } from "../../components/Letter/letter";
import classnames from "classnames";
import {ArrowIcon} from "../../lib/icons";

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
            <Link
                href="/experiments"
                className={classnames(
                    "py-1 rounded-lg text-gray-500 dark:text-gray-500 shadow-gray-200/10 flex items-center ml-6 mt-6"
                )}>

                <span className="w-5 h-5 rotate-180">{ArrowIcon}</span>View all experiments
            </Link>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.35, delay: 0.2 },
                }}
                className="page"
            >
                <motion.div className="flex md:flex-row flex-col space-y-4 max-w-full">
                    <motion.div className="basis-1/3 lg:basis-2/7">
                        <motion.div className="jike relative md:ml-4 mt-4 max-w-[90%] md:max-w-fit xl:max-w-full mx-auto">
                            <div className="flex flex-col rounded-lg bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-black dark:via-[#756707] dark:to-[#ffdb01] drop-shadow-md">
                                <div className="flex flex-row">
                                    <img src="https://files.catbox.moe/5scrti.jpg"
                                         className="mt-4 mx-4 rounded-full h-12 w-12" alt="jike header"/>
                                    <div>
                                        <a className="mt-5 block text-base font-semibold leading-tight text-black dark:text-white">油墨儿</a>
                                        <Link className="text-gray-600 dark:text-gray-300 text-xs" href="https://jike.city/yeyouchuan/">@2youmoer</Link>
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

                        <div
                            className="timeline relative max-w-[90%] md:max-w-fit xl:max-w-full pt-6 mx-auto bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-black dark:via-[#2e2e2e] dark:to-[#434343] rounded-lg drop-shadow-md mt-4 md:ml-4 overflow-y-scroll h-max md:h-64 xl:h-88"
                        >
                            <div className="relative md:pl-8">
                                <div className="h-full w-[1px] bg-gray-200 dark:bg-gray-400 left-[20px] top-[5px] absolute invisible md:visible"></div>
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

                    <div className="basis-1/3 lg:basis-3/7">
                        <div className="flex flex-col mx-4 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-black dark:to-[#434343] max-w-[90%] w-auto md:w-max md:max-w-fit h-auto mx-auto rounded-lg">
                            <div className="flex">
                                <div className="bg-camera-left bg-cover rounded-3xl h-16 w-16 xl:h-28 xl:w-28 ml-10 mr-8 mt-6"></div>
                                <div className="flex flex-col justify-items-center">
                                    <div className="flex flex-row mx-auto z-0">
                                        <div className="w-3 h-10 xl:h-12 bg-[#c52e1a]"></div>
                                        <div className="w-3 h-10 xl:h-12 bg-[#eb9329]"></div>
                                        <div className="w-3 h-10 xl:h-12 bg-[#e4b021]"></div>
                                        <div className="w-3 h-10 xl:h-12 bg-[#7ea32c]"></div>
                                        <div className="w-3 h-10 xl-h-12 bg-[#4886ae]"></div>
                                    </div>
                                    <div className="bg-camera-center bg-cover rounded-full h-24 w-24 xl:h-32 xl:w-32 mx-auto -mt-6 z-10"></div>
                                </div>
                                <div className="bg-camera-right bg-cover rounded-3xl h-16 w-16 xl:h-28 xl:w-28 mr-10 ml-8 mt-6"></div>
                            </div>
                            <div className="w-60 h-6 mx-auto mt-3 mb-3 xl:w-96 rounded-md drop-shadow-2xl bg-gray-600 border border-gray-800">
                                <div className="w-[80%] border mx-auto mt-2 mb-4 border-black"></div>
                            </div>
                        </div>
                        <div className="container w-auto max-w-[90%] mt-4 md:mx-4 mx-auto md:max-w-[370px] xl:max-w-full aspect-square overflow-x-scroll overflow-x-hidden scroll-smooth snap-x flex flex-row items-center bg-white dark:bg-black rounded-lg">
                            <img className="rounded-lg max-h-fit snap-center shadow-md" src="https://s2.loli.net/2022/12/09/SsfYR78lEVtbQ5N.png" alt="music"></img>
                            <img className="rounded-lg max-h-fit snap-center shadow-md" src="https://s2.loli.net/2022/12/05/WNq6OQ4aeThLnGR.png" alt="music"></img>
                            <img className="rounded-lg max-h-fit snap-center shadow-md" src="https://s2.loli.net/2022/12/09/aec74LltCOy6PnG.png" alt="music"></img>
                            <img className="rounded-lg max-h-fit snap-center shadow-md" src="https://files.catbox.moe/wjnod2.png" alt="music"></img>
                            <img className="rounded-lg max-h-fit snap-center shadow-md" src="https://files.catbox.moe/4oxz6p.png" alt="music"></img>
                            <img className="rounded-lg max-h-fit snap-center shadow-md" src="https://files.catbox.moe/7zwwqu.png" alt="music"></img>
                            <img className="rounded-lg max-h-fit snap-center shadow-md" src="https://files.catbox.moe/9i0d2g.png" alt="music"></img>
                            <img className="rounded-lg max-h-fit snap-center shadow-md" src="https://files.catbox.moe/ibe9j9.png" alt="music"></img>
                        </div>
                        <div className="relative flex flex-row bg-gradient-to-br mt-4 xl:mt-0 mx-4 from-[#fdfbfb] to-[#ebedee] max-w-[90%] w-auto md:w-max md:max-w-fit h-40 md:h-40 xl:h-36 mx-auto rounded-lg">
                            <img className="rounded-lg h-32 xl:h-28 w-auto mt-4 ml-4" src="https://s2.loli.net/2023/01/13/aFHc9f2Z7UG8uTd.png" alt="cover" />
                            <div className="flex flex-col">
                                <a className="text-lg font-bold mt-3 ml-4 bg-gradient-to-r from-red-300 to-sky-600 bg-clip-text text-transparent">孤独<a className="text-lg font-bold bg-gradient-to-r from-red-500 to-yellow-300 bg-clip-text text-transparent">摇滚</a></a>
                                <p className="text-[10px] md:text-xs font-medium mt-2 ml-4 mr-6 max-w-[220px] xl:max-w-[360px]">
                                    2022年我的年度动画，看完之后很感动。不仅是故事本身的感动，还有对制作组的感动，厨力那么强的作品已经很难见到了！简直我我第二喜欢的作品《派对浪客诸葛孔明》的升级版本，对所有热爱动画的制作人员致以最高的敬意。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/3 md:basis-2/7">
                        <div className="rounded-lg aspect-square md:mr-4 max-w-[90%] w-96 md:w-80 xl:w-96 md:max-w-md xl:max-w-full mx-auto mb-4">
                            <div className="drop-shadow-md rounded-lg bg-light-map dark:bg-dark-map h-80 max-w-full bg-cover bg-center"></div>
                        </div>
                        <motion.div
                            className="max-w-[90%] mx-auto md:max-w-md xl:max-w-full w-96 md:w-80 xl:w-96 mb-4 md:mr-4 flex bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-black dark:via-[#2e2e2e] dark:to-[#434343] rounded-lg drop-shadow-md overflow-hidden"
                            onMouseMove={handleMouse}
                            style={{ height:168 }}
                        >
                            <motion.div
                                style={{rotateX: rotateX, rotateY: rotateY}}
                                className="w-36 xl:w-44 h-[100px] flex bg-gradient-to-r from-stone-500 to-stone-700 dark:from-neutral-300 dark:to-stone-400 rounded-lg ml-6 mt-8 drop-shadow-md hover:drop-shadow-xl justify-center items-center"
                            >
                                <div className="-mt-2 -ml-2 text-clip max-h-[100px] overflow-clip text-8xl xl:text-9xl drop-shadow-md text-gray-400 dark:text-white">₿</div>
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
                        <diV className="max-w-[90%] h-56 xl:h-[360px] mx-auto md:max-w-md xl:max-w-full w-96 md:w-80 xl:w-96 mb-4 md:mr-4 flex bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-black dark:via-[#2e2e2e] dark:to-[#434343] rounded-lg drop-shadow-md">

                        </diV>
                    </div>
                </motion.div>
            </motion.div>
        </motion.body>
    );
}
