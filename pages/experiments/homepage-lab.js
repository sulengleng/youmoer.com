import clsx from "clsx";
import Link from "next/link";
import {} from "phosphor-react";
import { motion } from 'framer-motion'

export default function Home() {
    return (
      <body className="selection:bg-[#3b818c]">
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
                <div class="w-10 h-10 bg-blue-500 rounded-xl">
                </div>
            </div>
        </motion.div>
    </body>
    );
}