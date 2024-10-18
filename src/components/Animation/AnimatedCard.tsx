"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const AnimatedCard = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.01,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      }}
      transition={{ duration: 0.3 }}
      className="rounded-lg"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
