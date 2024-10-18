"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
const CButton = ({
  cssClass,
  text,
  isPending,
}: {
  text: string;
  cssClass?: string;
  isPending: boolean;
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Button
        disabled={isPending}
        className={` w-full ${cssClass}`}
        type="submit"
      >
        {text}
      </Button>
    </motion.button>
  );
};

export default CButton;
