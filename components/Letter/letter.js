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
                    <motion.div className="bg-gray-200 max-w-[130px] md:max-w-[360px] rounded-lg pl-5"
                                variants={modalVariants}
                                onClick={(e) => e.stopPropagation()}
                    >
                        <div className="ml-5 mt-8">
                            <a className="uppercase text-lg text-black mt-8 underline underline-offset-[12px] decoration-gray-500">about me</a>
                            <p className="text-gray-500 mt-2"> </p>
                            <br/>
                            
                            <br/>
                            <p className="mb-8">By 𝖞𝖊𝖞𝖔𝖚𝖈𝖍𝖚𝖆𝖓</p>
                        </div>
                    </motion.div>
                </Overlay>
            )}
        </AnimatePresence>
        </>
    );
}