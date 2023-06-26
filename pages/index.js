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
            </motion.div>
        </motion.body>
    );
}
