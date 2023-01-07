import React from "react";
import { motion } from "framer-motion";
import { Envelope } from "phosphor-react";

export default function Cover ({ open }) {
  return (
    <motion.div
        className="rounded-lg h-48 md:h-full drop-shadow-md bg-gradient-to-br from-[#fdfbfb] to-[#ebedee]"
        onClick={open}
    >
        <div className="drop-shadow-lg border rounded-full bg-gray-800 w-20 h-8 mt-8 justify-center"></div>
    </motion.div>
  );
}