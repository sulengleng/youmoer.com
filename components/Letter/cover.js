import React from "react";
import { motion } from "framer-motion";
import { Envelope } from "phosphor-react";

export default function Cover ({ open }) {
  return (
    <motion.div
        className="rounded-lg h-48 md:h-full drop-shadow-md bg-gradient-to-br from-[#fdfbfb] to-[#ebedee]"
        onClick={open}
    >
        <div className="drop-shadow-lg border rounded-full bg-gray-600 w-12 h-4 pt-8 justify-center"></div>
        <a className="p-8 max-w-sm text-2xl font-black uppercase text-red-600 transform -rotate-6 mix-blend-overlay">Mail</a>
    </motion.div>
  );
}