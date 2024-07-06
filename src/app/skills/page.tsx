"use client";

import SoftSkills from "@/components/SoftSkills";
import TechnicalSkills from "@/components/TechnicalSkills";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";

export default function Skills() {
  const [showTechnicalSkills, setShowTechnicalSkills] = useState(true);

  const toggleSkills = () => {
    setShowTechnicalSkills((prev) => !prev);
  };

  return (
    <main className="h-max md:col-span-4 items-center justify-between mt-10 xl:mt-20">
      <div className="flex flex-col items-center">
        <AnimatePresence mode="wait">
          {showTechnicalSkills ? (
            <motion.div
              key="technical"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <TechnicalSkills />
            </motion.div>
          ) : (
            <motion.div
              key="soft"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <SoftSkills />
            </motion.div>
          )}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              className="p-4 mb-12 xl:mt-4 text-2xl rounded-3xl border-2 border-white"
              onClick={toggleSkills}
            >
              {showTechnicalSkills ? <FaArrowDown /> : <FaArrowUp />}
            </Button>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
