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
                <div className="flex flex-col w-[85%] md:w-[600px] lg:w-[850px] xl:w-[1000px] mx-auto pt-8">
                    <GradualSpacing/>
                    <BlurIn/>
                </div>
                <div className="flex flex-col md:grid md:grid-cols-3 gap-6 min-w-screen w-[90%] md:w-[600px] lg:w-[850px] xl:w-[1000px] mx-auto my-8 ">
                    <div className="w-full h-[330px] bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#ff7571] via-[#ff89d0] to-[#ff8ad0] dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] dark:from-[#367d62] dark:via-[#538c72] dark:to-[#78c9a3] border dark:border-none border-gray-100 drop-shadow rounded-2xl row-span-2">
                        <div></div>
                    </div>
                    <div className="w-full h-44 bg-white dark:bg-gradient-to-tr dark:from-black dark:to-[#131414] border dark:border-none border-gray-100 drop-shadow rounded-2xl row-span-1"></div>
                    <div className="w-full h-[460px] bg-white dark:bg-gradient-to-tl dark:from-black dark:to-[#131414] border dark:border-none border-gray-100 drop-shadow rounded-2xl row-span-2"></div>
                    <div className="w-full h-32 bg-white dark:bg-gradient-to-bl dark:from-black dark:to-[#131414] border dark:border-none border-gray-100 drop-shadow rounded-2xl row-span-1 -mt-32"></div>
                    <div className="w-full h-[320px] bg-white dark:bg-gradient-to-br dark:from-black dark:to-[#131414] border dark:border-none border-gray-100 drop-shadow rounded-2xl row-span-1 col-span-2 -mt-32 md:mt-4">
                        <p className="md:text-2xl text-5xl font-bold max-w-[500px] leading-tight mx-auto my-16 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-100 via-blue-600 to-green-700 dark:bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] dark:from-yellow-200 dark:via-violet-100 dark:to-emerald-300 bg-clip-text text-transparent">
                            我这只是个测试，你可以试试更多可能，可以随时取消。
                        </p>
                    </div>
                    <div className="w-full h-48 bg-white dark:bg-gradient-to-br dark:from-black dark:to-[#131414] border dark:border-none border-gray-100 drop-shadow rounded-2xl row-span-1">
                        <p className="text-2xl font-bold leading-9 max-w-[220px] mx-auto my-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-orange-900 via-indigo-100 to-teal-700 bg-clip-text text-transparent">
                            我这只是个测试，你可以试试更多可能，可以随时取消。
                        </p>
                    </div>
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
            <div className="p-2 rounded-t-xl rounded-bl-md rounded-br-xl bg-gray-100 dark:bg-gray-800 w-fit">我的个人网站还在装修中，你可以随时看看其他页面~</div>
            <div className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 w-fit">我目前在中国苏州，也是英国本科学生。</div>
            <diV className="flex items-center space-x-2 pb-4">
                <img 
                    src="https://s2.loli.net/2023/07/07/Fgcf35yDCpM9vxL.png" 
                    alt="头像" 
                    className="w-7 h-7 rounded-full"
                >
                </img>
                <p className="text-[15px] text-gray-500 dark:text-gray-300">3m ago</p>
            </diV>
            <div className="p-2 rounded-t-xl rounded-bl-md rounded-br-xl bg-gray-100 dark:bg-gray-800 w-fit">我平时会看漫画和动漫，也对独立摇滚感兴趣。</div>
            <div className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 w-fit">羽毛球、排球每周没事都会打。</div>
            <div className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 w-fit">也喜欢科幻小说。</div>
            <div className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 w-fit">你可以在 <a href="https://jike.city/yeyouchuan/" target="_blank" className="hover:underline text-yellow-300">即刻</a> 和 <a href="https://twitter.com/yeyouchuan/" target="_blank" className="hover:underline text-blue-500">Twitter</a> 上找到我。请随时找我，我看到了就会回复 :）</div>
            <div className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 w-fit">当然，你也可以通过 <a href="mailto:yeyouchuan@gmail.com" target="_blank" className="hover:underline text-indigo-500">邮件</a> 联系我，我几乎每天都查看收件箱。</div>
            <diV className="flex items-center space-x-2 pb-4">
                <img 
                    src="https://s2.loli.net/2023/07/07/Fgcf35yDCpM9vxL.png" 
                    alt="头像" 
                    className="w-7 h-7 rounded-full"
                >
                </img>
                <p className="text-[15px] text-gray-500 dark:text-gray-300">1m ago</p>
            </diV>
        </motion.div>
    );
}

