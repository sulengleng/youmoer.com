import React from "react";
import { motion } from "framer-motion";
import { Envelope } from "phosphor-react";

export default function Cover ({ open }) {
  return (
    <motion.div
        className="rounded-lg h-48 md:h-full drop-shadow-md bg-gradient-to-br from-[#fdfbfb] to-[#ebedee]"
        onClick={open}
    >
        <Envelope size={52} className="ml-28 mt-60" />
    </motion.div>
  );
}