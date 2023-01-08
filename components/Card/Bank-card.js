import React from "react";
import {motion, useMotionValue, useTransform} from "framer-motion";

export default function BankCard ({ open }) {
    const x = useMotionValue(200);
    const y = useMotionValue(200);

    const rotateX = useTransform(y, [0, 400], [45, -45]);
    const rotateY = useTransform(x, [0, 400], [-45, 45]);

    function handleMouse(event) {
        const rect = event.currentTarget.getBoundingClientRect();

        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
    }

    return (
        <motion.div
            className="max-w-[90%] mx-auto md:max-w-112 flex bg-grey rounded-lg drop-shadow-md overflow-hidden"
            onMouseMove={handleMouse}
        >
            <motion.div
                style={{rotateX: rotateX, rotateY: rotateY}}
                className="w-80 h-56 bg-white ml-20 justify-center items-center"
            />
        </motion.div>
    )
}