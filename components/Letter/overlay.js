import React from "react";
import { motion } from "framer-motion";

export function Overlay({ children, close }) {
    const variants = {
        open: { backgroundColor: "rgba(0,0,0,0.6)" },
        closed: { backgroundColor: "rgba(0,0,0,0)" },
    };

    return (
        <motion.div
            className="overlay"
            backgroundColor="rgba(0,0,0,0.6)"
            onClick={close}
            variants={variants}
            initial={"closed"}
            animate={"open"}
            exit={"closed"}
            key="overlay"
        >
            {children}
        </motion.div>
    );
}