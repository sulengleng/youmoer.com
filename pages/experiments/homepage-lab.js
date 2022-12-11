import clsx from "clsx";
import Link from "next/link";
import {} from "phosphor-react";
import { motion } from 'framer-motion'
import {SpinnerIcon, ArrowIcon} from "lib/icons"
import classnames from "classnames";


export default function Home() {
    return (
    <body className="selection:bg-[#3b818c]">
        <Link
            href="/experiments"
            className={classnames(
            "py-1 rounded-lg text-gray-500 dark:text-gray-500 shadow-gray-200/10 flex items-center ml-6 mt-6"
            )}>

            <span className="w-5 h-5 rotate-180">{ArrowIcon}</span>View all experiments
        </Link>
        <div className="pb-20">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.35, delay: 0.2 },
            }}
            >
                <div className="container mt-8 max-w-[80%] mx-auto md:max-w-[70%] h-80 overflow-x-scroll overflow-x-hidden scroll-pl-6 scroll-smooth snap-x flex flex-row space-x-10 items-center bg-gradient-to-r from-gray-700 to-gray-900 rounded-md">
                    <img className="ml-10 rounded-lg max-h-56 snap-center shadow-md" src="https://s2.loli.net/2022/12/09/aec74LltCOy6PnG.png" alt="music"></img>
                    <img className="rounded-lg max-h-56 snap-center shadow-md" src="https://s2.loli.net/2022/12/09/SsfYR78lEVtbQ5N.png" alt="music"></img>
                    <img className="rounded-lg max-h-56 snap-center shadow-md" src="https://s2.loli.net/2022/12/05/WNq6OQ4aeThLnGR.png" alt="music"></img>
                    <img className="rounded-lg max-h-56 snap-center shadow-md" src="https://files.catbox.moe/wjnod2.png" alt="music"></img>
                    <img className="rounded-lg max-h-56 snap-center shadow-md" src="https://files.catbox.moe/4oxz6p.png" alt="music"></img>
                    <img className="rounded-lg max-h-56 snap-center shadow-md" src="https://files.catbox.moe/7zwwqu.png" alt="music"></img>
                    <img className="rounded-lg max-h-56 snap-center shadow-md" src="https://files.catbox.moe/9i0d2g.png" alt="music"></img>
                    <img className="pr-10 rounded-lg max-h-56 snap-center shadow-md" src="https://files.catbox.moe/ibe9j9.png" alt="music"></img>
                </div>
            </motion.div>
        </div>
    </body>
    );
}