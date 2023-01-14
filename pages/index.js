import Link from "next/link";
import {ArrowCircleRight, ArrowSquareOut, Pause, Play} from "phosphor-react";
import {motion, useMotionValue, useTransform} from 'framer-motion'
import React, {useRef, useState} from "react";
import YouTube from "react-youtube";
import { Letter } from "../components/Letter/letter";

export default function Home() {

    return (
        <motion.body className="selection:bg-[#3b818c]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.35, delay: 0.2 },
                }}
            >
                <div className="grid grid-cols-4 gap-4 mt-4 mx-4">
                    <div className="w-80 h-80 bg-purple-300 row-span-6">01</div>
                    <div className="w-80 h-40 bg-slate-100 row-span-3">02</div>
                    <div className="w-80 h-40 bg-red-100 row-span-3">03</div>
                    <div className="w-80 h-56 bg-orange-200 row-span-4">04</div>
                    <div className="w-full h-96 bg-orange-200 row-span-6 col-span-2">05</div>
                    <div className="w-full h-24 bg-orange-200 row-span-2 -mt-4">06</div>
                    <div className="w-full h-40 bg-orange-200 row-span-3 -mt-14">07</div>
                    <div className="w-full h-24 bg-orange-200 row-span-2 -mt-8">08</div>
                    <div className="w-full h-56 bg-orange-200 row-span-4 -mt-8">09</div>
                    <div className="w-full h-48 bg-orange-200 row-span-4 -mt-16">10</div>
                    <div className="w-full h-32 bg-orange-200 row-span-3">11</div>
                    <div className="w-full h-32 bg-orange-200 row-span-3">12</div>
                </div>
            </motion.div>
        </motion.body>
    )
}