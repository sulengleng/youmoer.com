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
                <div>
                    <p>
                        test
                    </p>
                </div>
            </motion.div>
        </div>
        <motion.div
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%"
            }}
        >
            <div class="">
                <div class="items-center w-48 h-48 bg-blue-500 rounded-xl">
                </div>
            </div>
        </motion.div>
    </body>
    );
}