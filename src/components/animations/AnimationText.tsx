'use client';

import { motion } from "framer-motion";
import React from "react";

const AnimationText = ({ text }: { text: string }) => {
  const words = text.split(" ");
  const accentWords = ["Siddhesh", "Lakhani!"];
  const underlineWords = ["Full-Stack", "Engineer."];

  // Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 * i },
    }),
  };

  // Variants for each word.
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  // Helper function to determine if a sequence matches the underline phrase
  const isUnderlinePhrase = (index: number) => {
    const phraseLength = underlineWords.length;
    const phrase = words.slice(index, index + phraseLength).join(" ");
    return phrase === underlineWords.join(" ");
  };

  // Process words to combine underlined phrases
  const processedWords: React.ReactNode[] = [];
  for (let i = 0; i < words.length; i++) {
    if (isUnderlinePhrase(i)) {
      const underlinePhrase = words.slice(i, i + underlineWords.length).join(" ");
      processedWords.push(
        <motion.span
          key={i}
          variants={child}
          style={{ marginRight: "5px" }}
          className="underline"
        >
          {underlinePhrase}
        </motion.span>
      );
      i += underlineWords.length - 1;
    } else {
      processedWords.push(
        <motion.span
          key={i}
          variants={child}
          style={{ marginRight: "5px" }}
          className={accentWords.includes(words[i]) ? "text-accent" : ""}
        >
          {words[i]}
        </motion.span>
      );
    }
  }

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className="mb-4 text-2xl xl:text-4xl space-x-1"
    >
      {processedWords}
    </motion.div>
  );
};

export default AnimationText;
