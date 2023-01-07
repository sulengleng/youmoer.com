import React from "react";
import { motion } from "framer-motion";
import { Envelope } from "phosphor-react";

export default function Cover ({ open }) {
  return (
    <motion.div
        className="rounded-lg h-48 md:h-full drop-shadow-md bg-gradient-to-br from-[#fdfbfb] to-[#ebedee]"
        onClick={open}
    >
        <div className="drop-shadow-lg border rounded-t-lg rounded-b-md bg-gray-700 w-6/12 h-2 pt-4 ml-4 justify-center"></div>
        <a className="mt-32 p-8 max-w-sm text-4xl font-black uppercase text-red-800 transform -rotate-6 mix-blend-overlay">Mail</a>
    </motion.div>
  );
}