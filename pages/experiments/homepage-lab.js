import clsx from "clsx";
import Link from "next/link";
import { MapPin, ArrowCircleRight, Camera, Star, Article, ArrowSquareOut, ThumbsUp} from "phosphor-react";
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
            <div class="min-h-screen flex flex-col items-center pt-4">
                <div class="relative w-full max-w-2xl h-auto bg-blue-500 rounded-xl bg-texture bg-cover bg-center bg-blend-color-burn">
                </div>
            </div>
        </motion.div>
    </body>
    );
}