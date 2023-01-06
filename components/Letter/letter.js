import React, { useState } from "react";
import { letterExpand } from "./letter-expand";
import { Overlay } from "./overlay";
import { AnimatePresence } from "framer-motion";
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
                <Overlay
                    key="overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    onClick={closeModal}
                />
            )}
        </AnimatePresence>
        </>
    );
}