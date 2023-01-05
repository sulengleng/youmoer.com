import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { itemData } from "../data/itemData";

export function afterClickComponent({ id }) {

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                style={{ pointerEvents: "auto" }}
                className="overlay"
            >
                <Link to="/" />
            </motion.div>
            <div className="card-content-container open">
                <motion.div className="card-content" layoutId={`card-container-${id}`}>
                    <motion.div
                        className="card-image-container"
                        layoutId={`card-image-container-${id}`}
                    >
                        <img className="card-image" src="https://s2.loli.net/2022/12/09/azhp6eCoq7sndj3.png" alt="" />
                    </motion.div>
                    <motion.div className="content-container" animate>
                        <p>shishisaujdhjksadhakjsdadasdwa</p>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
}
