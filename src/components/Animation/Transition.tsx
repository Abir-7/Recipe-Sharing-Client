"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
const Transition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Transition;
