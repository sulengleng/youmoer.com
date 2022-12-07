import { useState } from "react";
import Link from "next/link";
import { ArrowIcon } from "lib/icons";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import classnames from "classnames";
import 'flowbite';


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
            <div class="pt-8 snap-mandatory snap-x">
                <div class="max-w-[80%] mx-auto md:max-w-2xl flex justify-center bg-[#821c20] rounded-xl shadow-lg overflow-hidden snap-center lg:max-w-[60%]">
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
            <div class="min-h-screen flex flex-col items-center pt-4">
                <div class="relative w-full max-w-2xl h-auto bg-blue-500 rounded-xl bg-texture bg-cover bg-center bg-blend-color-burn">
                    <h1 class="p-8 max-w-2xl text-8xl font-black uppercase text-white transform -rotate-6 mix-blend-overlay">Tailwind css is super cool!</h1>
                </div>
            </div>  
            <div>
                <script src="../path/to/flowbite/dist/flowbite.js"></script>
                <p class="font-light text-gray-500 dark:text-gray-400">Due to its central geographic location in Southern Europe, <a href="#" class="text-blue-600 underline dark:text-blue-500 hover:no-underline" data-popover-target="popover-image">Italy</a> has historically been home to myriad peoples and cultures. In addition to the various ancient peoples dispersed throughout what is now modern-day Italy, the most predominant being the Indo-European Italic peoples who gave the peninsula its name, beginning from the classical era, Phoenicians and Carthaginians founded colonies mostly in insular Italy</p>
                <div data-popover id="popover-image" role="tooltip" class="absolute z-10 invisible inline-block text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-96 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600">
                    <div class="grid grid-cols-5">
                        <div class="col-span-3 p-3">
                            <div class="space-y-2">
                                <h3 class="font-semibold text-gray-900 dark:text-white">About Italy</h3>
                                <p>Italy is located in the middle of the Mediterranean Sea, in Southern Europe it is also considered part of Western Europe. A unitary parliamentary republic with Rome as its capital and largest city.</p>
                                <a href="#" class="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700">Read more <svg class="w-4 h-4 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a>
                            </div>
                        </div>
                        <img src="/docs/images/popovers/italy.png" class="h-full col-span-2" alt="Italy map" />
                    </div>
                    <div data-popper-arrow></div>
                </div>
            </div> 
        </div>
    </body>
);
}