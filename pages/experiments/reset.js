import Link from "next/link";
import {ArrowCircleRight, ArrowSquareOut, Pause, Play} from "phosphor-react";
import {motion, useMotionValue, useTransform} from 'framer-motion'
import React, {useRef, useState} from "react";
import YouTube from "react-youtube";
import { Letter } from "../../components/Letter/letter";

export default function Home() {
    return (
        <motion.body className="selection:bg-[#3b818c]">
            <div className="grid grid-cols-4 gap-4 mt-4 mx-auto max-h-screen w-screen">
                <div className="w-64 h-40 bg-purple-300">01</div>
                <div className="w-64 h-40 bg-slate-100">02</div>
                <div className="w-64 h-40 bg-red-100">03</div>
                <div className="w-64 h-40 bg-orange-200">04</div>
                <div className="w-64 h-40 bg-orange-200">05</div>
                <div className="w-64 h-40 bg-orange-200">06</div>
                <div className="w-64 h-40 bg-orange-200">07</div>
                <div className="w-64 h-40 bg-orange-200">08</div>
                <div className="w-64 h-40 bg-orange-200">09</div>
                <div className="w-64 h-40 bg-orange-200">10</div>
                <div className="w-64 h-40 bg-orange-200">11</div>
                <div className="w-64 h-40 bg-orange-200">12</div>
            </div>
        </motion.body>
    );
}
