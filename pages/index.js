import {Disc, MusicNote, Pause, Play, Star} from "phosphor-react";
import {motion, useMotionValue, useTransform} from 'framer-motion'
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
                <div className="flex flex-col w-[90%] md:w-[600px] lg:w-[850px] xl:w-[1000px] mx-auto mt-8">
                    <p className="text-2xl">你好，我是<a className="bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent font-bold">夜游船</a>！</p>
                    <p className="text-base mt-4">新版的主页正在修缮中，请下次再来看看~</p>
                </div>
                <div className="flex flex-col md:grid md:grid-cols-3 gap-6 min-w-screen w-[90%] md:w-[600px] lg:w-[850px] xl:w-[1000px] mx-auto mt-8 ">
                    <div className="w-full h-[330px] bg-white dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#367d62] via-[#16171a] to-[#16171a] border border-gray-100 drop-shadow rounded-3xl row-span-2"></div>
                    <div className="w-full h-44 bg-white dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#367d62] via-[#16171a] to-[#16171a] border dark:border-none border-gray-100 drop-shadow rounded-3xl row-span-1"></div>
                    <div className="w-full h-[460px] bg-white dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#367d62] via-[#16171a] to-[#16171a] border dark:border-none border-gray-100 drop-shadow rounded-3xl row-span-2"></div>
                    <div className="w-full h-32 bg-white dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#367d62] via-[#16171a] to-[#16171a] border dark:border-none border-gray-100 drop-shadow rounded-3xl row-span-1 -mt-32"></div>
                    <div className="w-full h-[320px] bg-white dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#367d62] via-[#16171a] to-[#16171a] border dark:border-none border-gray-100 drop-shadow rounded-3xl row-span-1 col-span-2 -mt-32"></div>
                    <div className="w-full h-48 bg-white dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#367d62] via-[#16171a] to-[#16171a] border dark:border-none border-gray-100 drop-shadow rounded-3xl row-span-1"></div>
                </div>
            </motion.div>
        </motion.body>
    );
}
