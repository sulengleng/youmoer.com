import React, { useState } from "react";
import { letterExpand } from "./letter-expand";
import { Overlay } from "./overlay";
import {AnimatePresence, motion} from "framer-motion";


export const Letter = () => {
    const [open, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
    };

    return (
        <>
        <div
            className="rounded-lg h-48 md:h-full drop-shadow-md bg-gradient-to-br from-[#fdfbfb] to-[#ebedee]"
            open={openModal}
        >
        </div>
        <AnimatePresence>
            {open && (
                <Overlay close={closeModal}>
                    <letterExpand close={closeModal}/>
                </Overlay>
            )}
        </AnimatePresence>
        </>
    );
}