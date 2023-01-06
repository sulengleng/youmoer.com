import React, { useState } from "react";
import { Overlay } from "./overlay";
import {AnimatePresence, motion} from "framer-motion";
import Cover from "./cover";
import "./modal.module.css";


export const Letter = () => {
    const [open, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
    };

    const modalVariants = {
        open: {
            opacity: 1,
            transition: { staggerChildren: 0.5, delayChildren: 0.2 },
        },
        closed: { opacity: 0 },
    };

    return (
        < >
        <Cover open={openModal} />
        <AnimatePresence>
            {open && (
                <Overlay close={closeModal} >
                    <motion.div className="modal"
                                variants={modalVariants}
                                onClick={(e) => e.stopPropagation()}
                    >
                        <div className="prose dark:prose-invert prose-img:rounded-lg max-w-[130px] md:max-w-[360px] rounded-lg pl-5">
                            <p>见信好， </p>
                            <br/>
                            <p>
                                我是夜游船，暂时是国际高中的一名学生
                                <br/>
                                专业方向是 Computer Science，立志成为一个不走寻常路的开发者和设计师
                                <br/>
                                喜欢科技，喜欢摆弄各种有趣的产品
                                <br/>
                                喜欢摇滚，喜欢科幻小说
                                <br/>
                                对精心设计的东西情有独钟
                                <br/>
                                若是你收到了这封欢迎信，说明你已经来到了我的世界
                                <br/>
                                你可以进入 我的博客 浏览我的文章
                                <br/>
                                你也可以订阅我的 Newsletter
                                <br/>
                                若你打算一走了之，我依旧会在这里欢迎你的下次到来
                            </p>
                            <br/>
                            <p>By 𝖞𝖊𝖞𝖔𝖚𝖈𝖍𝖚𝖆𝖓</p>
                        </div>
                    </motion.div>
                </Overlay>
            )}
        </AnimatePresence>
        </>
    );
}