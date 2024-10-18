"use client";
import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      className="bg-black h-screen flex items-center justify-center"
    >
      <motion.span
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="text-white text-2xl"
      >
        loading
      </motion.span>
    </motion.div>
  );
};

export default Loading;
