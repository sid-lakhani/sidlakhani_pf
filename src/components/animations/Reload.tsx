"use client";

import { animate, motion } from "framer-motion";

//variants
const reloadVariants = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Reload = () => {
  return (
    <motion.div variants={reloadVariants} initial="initial" animate="animate" className="h-full w-full relative" />
  );
};

export default Reload;
