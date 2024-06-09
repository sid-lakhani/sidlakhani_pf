"use client";
import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";

const PageTransition = ({ children }: { children: ReactNode }) => {
  return (
    <AnimatePresence>
      <div>
        <motion.div
          initial={{ opactiy: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.2, duration: 0.8, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
