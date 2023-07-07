import {Disc, MusicNote, Pause, Play, Star} from "phosphor-react";
import {motion, useMotionValue, useTransform, AnimatePresence} from 'framer-motion'
import React, {useRef, useState} from "react";
import YouTube from "react-youtube";
import {NextSeo} from "next-seo";

export default function Home() {

    return (
        <motion.body className="select-none">
            <NextSeo
                title="你好，我是夜游船！"
                description="欢迎来到夜游船的个人网站，我是创造者"
                openGraph={{
                    site_name: "你好，我是夜游船！",
                    title: "你好，我是夜游船！",
                    description:
                        "欢迎来到夜游船的个人网站，我是创造者",
                }}
                twitter={{
                    handle: "@yeyouchuan",
                    site: "@yeyouchuan",
                    cardType: "summary_large_image",
                }}
            />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.35, delay: 0.2 },
                }}
                className="page"
            >
                <div className="flex flex-col w-[85%] md:w-[600px] lg:w-[850px] xl:w-[1000px] mx-auto mt-8">
                    <GradualSpacing/>
                    <BlurIn/>
                </div>
                <div className="flex flex-col md:grid md:grid-cols-3 gap-6 min-w-screen w-[90%] md:w-[600px] lg:w-[850px] xl:w-[1000px] mx-auto mt-8 ">
                    <div className="w-full h-[330px] bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#ff7571] via-[#ff89d0] to-[#ff8ad0] dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] dark:from-[#367d62] dark:via-[#538c72] dark:to-[#78c9a3] border dark:border-none border-gray-100 drop-shadow rounded-2xl row-span-2">
                        <div></div>
                    </div>
                    <div className="w-full h-44 bg-white dark:bg-[#16171a] border dark:border-none border-gray-100 drop-shadow rounded-2xl row-span-1"></div>
                    <div className="w-full h-[460px] bg-white dark:bg-[#16171a] border dark:border-none border-gray-100 drop-shadow rounded-2xl row-span-2"></div>
                    <div className="w-full h-32 bg-white dark:bg-[#16171a] border dark:border-none border-gray-100 drop-shadow rounded-2xl row-span-1 -mt-32"></div>
                    <div className="w-full h-[320px] bg-white dark:bg-[#16171a] border dark:border-none border-gray-100 drop-shadow rounded-2xl row-span-1 col-span-2 -mt-32"></div>
                    <div className="w-full h-48 bg-white dark:bg-[#16171a] border dark:border-none border-gray-100 drop-shadow rounded-2xl row-span-1"></div>
                </div>
            </motion.div>
        </motion.body>
    );
}

export function GradualSpacing() {
    const text = "你好，我是夜游船！";
    const gradual = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };
    return (
        <div className="flex space-x-0.5">
            <AnimatePresence>
                {text.split("").map((char, i) => (
                    <motion.h1
                        key={i}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={gradual}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="font-display text-3xl font-semibold tracking-[-0.02em] drop-shadow-sm md:text-3xl md:leading-[5rem]"
                    >
                        {char === " " ? <span>&nbsp;</span> : char}
                    </motion.h1>
                ))}
            </AnimatePresence>
        </div>
    );
}

export function BlurIn() {
    const variants1 = {
        hidden: { filter: "blur(10px)", opacity: 0 },
        visible: { filter: "blur(0px)", opacity: 1 },
    };
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
            variants={variants1}
            className="font-display text-md font-normal tracking-[-0.02em] drop-shadow-sm mt-4 md:mt-0 flex flex-col space-y-2"
        >
            <div className="p-2 rounded-t-xl rounded-bl-md rounded-br-xl bg-gray-100 w-fit">我的个人网站还在装修中，你可以随时看看其他页面~</div>
            <div className="p-2 rounded-xl bg-gray-100 w-fit">我目前在中国苏州，也是英国本科学生。</div>
            <diV className="flex items-center space-x-2">
                <img 
                    src="https://s2.loli.net/2023/07/07/Fgcf35yDCpM9vxL.png" 
                    alt="头像" 
                    className="w-7 h-7 rounded-full"
                >
                </img>
                <p className="text-[15px] text-gray-500">3m ago</p>
            </diV>
        </motion.div>
    );
}