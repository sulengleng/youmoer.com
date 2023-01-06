import React, { useState } from "react";
import { letterExpand } from "./letter-expand";
import { Overlay } from "./overlay";
import {AnimatePresence, motion} from "framer-motion";
import Cover from "./cover";


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
        <Cover open={openModal} />
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