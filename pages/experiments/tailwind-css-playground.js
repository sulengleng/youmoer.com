import React, { useState, react } from "react";
import Link from "next/link";
import { ArrowIcon } from "lib/icons";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import classnames from "classnames";
import { Container } from "postcss";


export default function Experiments() {
return (
    <body>
        <Link
                href="/experiments"
                className={classnames(
                "py-1 rounded-lg text-gray-500 dark:text-gray-500 shadow-gray-200/10 flex items-center ml-6 mt-6"
                )}>

                <span className="w-5 h-5 rotate-180">{ArrowIcon}</span>View all experiments
        </Link>
        <div className="flex-col">
            <div className="pt-8 snap-mandatory snap-x">
                <div className="max-w-[80%] mx-auto md:max-w-2xl flex justify-center bg-[#821c20] rounded-xl shadow-lg overflow-hidden snap-center lg:max-w-[60%]">
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://files.catbox.moe/whnmix.png" alt="Modern building architecture"></img>
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-[#166b41] dark:text-green-700 font-semibold">S.A.阿列克谢耶维奇</div>
                        <p className="mt-2 text-white">每个人都要做好自己的事。比如我自己的事就是写作，那就要写，要写下去，要找到一些答案，要帮助那些今天孤独的人，许多人都很迷茫，知识分子很迷茫，普通人就更迷茫了。所以，<a className="underline decoration-pink-500">应该做好自己的事</a>。</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="flex flex-col items-center pt-4">
                <div className="relative w-full max-w-2xl h-auto bg-blue-500 rounded-xl bg-texture bg-cover bg-center bg-blend-color-burn">
                    <h1 className="p-8 max-w-2xl text-8xl font-black uppercase text-white transform -rotate-6 mix-blend-overlay">Tailwind css is super cool!</h1>
                </div>
            </div>
            <div className="pt-8 snap-mandatory snap-x">
                <div className="max-w-[80%] mx-auto md:max-w-2xl flex justify-center bg-gradient-to-r from-purple-400 to-purple-700 rounded-xl shadow-lg overflow-hidden snap-center lg:max-w-[60%]">
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <motion.div
                            initial={{
                                borderRadius: "50%",
                            }}
                            whileHover={{
                                scale: 0.8,
                                rotate: 90,
                                delay: 0.5,
                            }}
                            whileTap={{
                                scale: 0.8,
                                rotate: -90,
                                borderRadius: "100%",
                            }}
                        >
                            <div className="flex flex-col items-center justify-center h-48 w-48 bg-pink-500">
                            </div>
                        </motion.div>
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-pink-500 dark:text-pink-400 font-semibold">ChatGPT</div>
                        <p className="mt-2 text-white">旋转跳跃，山月风卷，一场空中的狂欢。林鸟鱼花空中相随，像一道万紫千红的风景。云歌鱼跳月星日水，如梦如幻，不真实却又真实。山雪石石自在自由，令人心旷神怡。无限自在花鸟林间，让人快乐欢喜。</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="flex flex-col bg-gradient-to-br mx-4 from-[#fdfbfb] to-[#ebedee] dark:from-black dark:to-[#434343] max-w-[90%] w-auto md:w-max md:max-w-fit h-auto mx-auto rounded-lg">
                <div className="flex">
                    <div className="bg-camera-left bg-cover rounded-3xl h-28 w-28 ml-10 mr-8 mt-6"></div>
                    <div className="flex flex-col justify-items-center">
                        <div className="flex flex-row mx-auto z-0">
                            <div className="w-3 h-12 bg-[#c52e1a]"></div>
                            <div className="w-3 h-12 bg-[#eb9329]"></div>
                            <div className="w-3 h-12 bg-[#e4b021]"></div>
                            <div className="w-3 h-12 bg-[#7ea32c]"></div>
                            <div className="w-3 h-12 bg-[#4886ae]"></div>
                        </div>
                        <div className="bg-camera-center bg-cover rounded-full h-32 w-32 mx-auto -mt-6 z-10"></div>
                    </div>
                    <div className="bg-camera-right bg-cover rounded-3xl h-28 w-28 mr-10 ml-8 mt-6"></div>
                </div>
                <div className="w-64 h-6 mx-auto my-4 md:w-96 rounded-md drop-shadow-2xl bg-gray-700 border border-gray-800">
                    <div className="w-[80%] border mx-auto mt-2 mb-4 border-black"></div>
                </div>
            </div>
        </div>
    </body>
);
}