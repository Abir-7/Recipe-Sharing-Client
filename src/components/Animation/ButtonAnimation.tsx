"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
const ButtonAnimation = ({ children }: { children: ReactNode }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="mt-5 py-2 rounded-lg font-medium bg-yellow-400 px-5 text-gray-950 hover:bg-yellow-500"
    >
      {children}
    </motion.button>
  );
};

export default ButtonAnimation;
