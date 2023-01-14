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
            <div className="flex flex-row md:grid md:grid-cols-4 gap-4 min-w-screen">
                <motion.div className="jike relative md:ml-4 mt-4 max-w-[90%] md:max-w-fit xl:max-w-full mx-auto">
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
                <div className="relative flex flex-row bg-gradient-to-br mt-4 xl:mt-0 mx-4 from-[#fdfbfb] to-[#ebedee] max-w-[90%] w-auto md:w-max md:max-w-fit h-40 md:h-40 xl:h-36 mx-auto rounded-lg">
                    <img className="rounded-lg h-32 xl:h-28 w-auto mt-4 ml-4" src="https://s2.loli.net/2023/01/13/aFHc9f2Z7UG8uTd.png" alt="cover" />
                    <div className="flex flex-col">
                        <a className="text-lg font-bold mt-3 ml-4 bg-gradient-to-r from-red-300 to-sky-600 bg-clip-text text-transparent">孤独<a className="text-lg font-bold bg-gradient-to-r from-red-500 to-yellow-300 bg-clip-text text-transparent">摇滚</a></a>
                        <p className="text-[10px] md:text-xs font-medium mt-2 ml-4 mr-6 max-w-[220px] xl:max-w-[360px]">
                            2022年我的年度动画，看完之后很感动。不仅是故事本身的感动，还有对制作组的感动，厨力那么强的作品已经很难见到了！简直我我第二喜欢的作品《派对浪客诸葛孔明》的升级版本，对所有热爱动画的制作人员致以最高的敬意。
                        </p>
                    </div>
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
        </motion.body>
    );
}
