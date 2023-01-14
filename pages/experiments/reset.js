import Link from "next/link";
import {ArrowCircleRight, ArrowSquareOut, Pause, Play} from "phosphor-react";
import {motion, useMotionValue, useTransform} from 'framer-motion'
import React, {useRef, useState} from "react";
import YouTube from "react-youtube";
import { Letter } from "../../components/Letter/letter";

export default function Home() {
    return (
        <motion.body className="selection:bg-[#3b818c]">
            <div className="grid grid-cols-4 gap-4 min-w-screen">
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
