import { useState, react } from "react";
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
                        <p className="mt-2 text-white">每个人都要做好自己的事。比如我自己的事就是写作，那就要写，要写下去，要找到一些答案，要帮助那些今天孤独的人，许多人都很迷茫，知识分子很迷茫，普通人就更迷茫了。所以，<a class="underline decoration-pink-500">应该做好自己的事</a>。</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="flex flex-col items-center pt-4">
                <div className="relative w-full max-w-2xl h-auto bg-blue-500 rounded-xl bg-texture bg-cover bg-center bg-blend-color-burn">
                    <h1 className="p-8 max-w-2xl text-8xl font-black uppercase text-white transform -rotate-6 mix-blend-overlay">Tailwind css is super cool!</h1>
                </div>
            </div>  
        </div>
        <div className="p-6">
            <motion.div
                animate={{ 
                    x: 300,
                    opacity: 0.2,
                    }}
                initial={{
                    opacity: 1,
                    x: 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 15,
                }}
            >
                <div className="flex flex-col items-center justify-center h-48 w-48 rounded-md bg-blue-600">
                </div>
            </motion.div>
        </div>
        <div className="p-6 h-48 w-48">
            <motion.div
                whileHover={{
                    scale: 1.2,
                    rotate: 90,
                }}
                whileTap={{
                    scale: 0.8,
                    rotate: -90,
                    borderRadius: "100%",
                }}
            >
                <div className="flex flex-col items-center justify-center h-48 w-48 rounded-md bg-blue-600">
                </div>
            </motion.div>
        </div>
    </body>
);
}