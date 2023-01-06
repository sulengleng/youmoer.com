import react from 'react'
import { XCircle } from "phosphor-react";
import { motion } from "framer-motion";
import "../../styles/styles.css";

export function letterExpand( close ) {

    const modalVariants = {
        open: {
            opacity: 1,
            transition: { staggerChildren: 0.5, delayChildren: 0.2 },
        },
        closed: { opacity: 0 },
    };

    return (
        <motion.div className="modal"
                    variants={modalVariants}
                    onClick={(e) => e.stopPropagation()}
        >
            <div className="prose dark:prose-invert prose-img:rounded-lg bg-white">
                <h2>来自夜游船的信件</h2>
                <p>见信好，

                    我是夜游船，暂时是国际高中的一名学生
                    专业方向是 Computer Science，立志成为一个不走寻常路的开发者和设计师
                    喜欢科技，喜欢摆弄各种有趣的产品
                    喜欢摇滚，喜欢科幻小说
                    对精心设计的东西情有独钟
                    若是你收到了这封欢迎信，说明你已经来到了我的世界
                    你可以进入 我的博客 浏览我的文章
                    你也可以订阅我的 Newsletter
                    若你打算一走了之，我依旧会在这里欢迎你的下次到来

                    By 𝖞𝖊𝖞𝖔𝖚𝖈𝖍𝖚𝖆𝖓</p>
            </div>
        </motion.div>
    )
}