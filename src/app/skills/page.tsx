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
    <main className="h-max min-h-[600px] md:col-span-4 flex-col items-center justify-between mt-16">
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
            transition={{ duration: 0.5 }}
          >
            <Button
              className="p-4 py-4 mt-4 mb-[-20px] text-2xl rounded-3xl border-2 border-white"
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
