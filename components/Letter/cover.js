import React from "react";
import { motion } from "framer-motion";
import { Envelope } from "phosphor-react";

export default function Cover () {
  return (
    <motion.div
        className="rounded-lg h-48 md:h-full drop-shadow-md bg-gradient-to-br from-[#fdfbfb] to-[#ebedee]"
        onClick={open}
        whileHover={{ scale: 1.1 }}
    >
        <Envelope size={52} />
    </motion.div>
  );
}