import { useState } from "react";
import Link from "next/link";
import { ArrowIcon } from "lib/icons";
import { NextSeo } from "next-seo";

export default function Experiments() {
return (
    <div className="flex-col">
        <div class="snap-mandatory snap-x bg-gradient-to-tr from-red-500 to-purple-400">
            <div class="mix-blend-overlay max-w-[80%] mx-auto md:max-w-2xl flex justify-center bg-[#821c20] rounded-xl shadow-lg overflow-hidden snap-center lg:max-w-[60%]">
            <div class="md:flex">
                <div class="md:shrink-0">
                    <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://files.catbox.moe/whnmix.png" alt="Modern building architecture"></img>
                </div>
                <div class="p-8">
                    <div class="uppercase tracking-wide text-sm text-[#166b41] dark:text-green-700 font-semibold">S.A.阿列克谢耶维奇</div>
                    <p class="mt-2 text-white">每个人都要做好自己的事。比如我自己的事就是写作，那就要写，要写下去，要找到一些答案，要帮助那些今天孤独的人，许多人都很迷茫，知识分子很迷茫，普通人就更迷茫了。所以，<a class="underline decoration-pink-500">应该做好自己的事</a>。</p>
                </div>
            </div>
            </div>
        </div>
    </div>
);
}