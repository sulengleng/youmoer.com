import Link from "next/link";
import {ArrowCircleRight, ArrowSquareOut, Pause, Play} from "phosphor-react";
import {motion, useMotionValue, useTransform} from 'framer-motion'
import React, {useRef, useState} from "react";
import YouTube from "react-youtube";
import { Letter } from "../components/Letter/letter";

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
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.35, delay: 0.2 },
                }}
                className="page"
            >
                <div className="grid grid-rows-4 grid-flow-col gap-4 mt-4 mx-4 max-w-full">
                    <div className="w-full h-64 bg-purple-300"></div>
                    <div className="w-full h-64 bg-purple-300"></div>
                    <div className="w-full h-64 bg-purple-300"></div>
                    <div className="w-full h-64 bg-purple-300"></div>
                    <div className="w-full h-64 bg-purple-300"></div>
                    <div className="w-full h-64 bg-purple-300"></div>
                    <div className="w-full h-64 bg-purple-300"></div>
                    <div className="w-full h-64 bg-purple-300"></div>
                </div>
            </motion.div>
        </motion.body>
    )
}