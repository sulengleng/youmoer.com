import React from "react";
import {motion} from "framer-motion";

export default function Cover ({ open }) {

  return (
    <motion.div
        className="rounded-lg h-48 md:h-full drop-shadow-md bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] flex flex-col"
        onClick={open}
    >
      <div className="absolute top-8 left-8 h-20 w-20 bg-dash-board bg-cover"></div>
    </motion.div>
  );
}