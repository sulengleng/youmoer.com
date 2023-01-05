import React from "react";
import { itemData } from "../data/itemData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Card({ id, theme }) {
    return (
        <li className={`card ${theme}`}>
            <div className="card-content-container">
                <motion.div className="card-content" layoutId={`card-container-${id}`}>
                    <motion.div
                        className="card-image-container"
                        layoutId={`card-image-container-${id}`}
                    >
                        <img className="card-image" src="https://s2.loli.net/2022/12/09/azhp6eCoq7sndj3.png" alt="" />
                    </motion.div>
                </motion.div>
            </div>
            <Link to={id} className={`card-open-link`} />
        </li>
    );
}

export function clickComponent({ selectedId }) {
    return (
        <div>
            {itemData.map(card => (
                <Card key={card.id} {...card} isSelected={card.id === selectedId} />
            ))}
        </div>
    );
}
