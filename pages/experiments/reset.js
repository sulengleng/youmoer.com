import Link from "next/link";
import {ArrowCircleRight, ArrowSquareOut, Pause, Play} from "phosphor-react";
import {motion, useMotionValue, useTransform} from 'framer-motion'
import React, {useRef, useState} from "react";
import YouTube from "react-youtube";
import { Letter } from "../../components/Letter/letter";

export default function Home() {
    return (
        <motion.body className="selection:bg-[#3b818c]">
            <div className="columns-4 gap-4 space-y-4 mx-4 mt-4">
                <div className="bg-red-400 w-full h-96"></div>
                <div className="bg-blue-400 w-full h-96"></div>
                <div className="bg-green-400 w-full h-96"></div>
            </div>
        </motion.body>
    );
}
