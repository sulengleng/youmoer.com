import React from "react";
import {motion} from "framer-motion";

export default function Cover ({ open }) {

  return (
    <motion.div
        className="rounded-lg h-48 md:h-full drop-shadow-md bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] flex flex-col"
        onClick={open}
    >
        <a className="mt-32 p-8 max-w-sm text-4xl font-black uppercase text-red-800 transform rotate-90">Mail</a>
        <a className="mt-32 p-8 max-w-sm text-4xl font-black uppercase text-red-800 transform rotate-90">Box</a>
    </motion.div>
  );
}