import React from "react";
import {motion, useMotionValue, useTransform} from "framer-motion";

export default function Cover ({ open }) {
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
        className="rounded-lg h-48 md:h-full drop-shadow-md bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] flex flex-col"
        onClick={open}
        onMouseMove={handleMouse}
        style={{ rotateX: rotateX, rotateY: rotateY}}
    >
        <a className="mt-32 p-8 max-w-sm text-4xl font-black uppercase text-red-800 transform rotate-90">Mail</a>
        <a className="mt-32 p-8 max-w-sm text-4xl font-black uppercase text-red-800 transform rotate-90">Box</a>
    </motion.div>
  );
}