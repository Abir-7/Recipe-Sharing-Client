"use client";
import { Button } from "@/components/ui/button";

const CButton = ({ cssClass, text }: { text: string; cssClass?: string }) => {
  return (
    <Button className={` ${cssClass}`} type="submit">
      {text}
    </Button>
  );
};

export default CButton;
