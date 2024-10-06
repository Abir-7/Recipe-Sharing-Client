"use client";
import { Button } from "@/components/ui/button";

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
    <Button disabled={isPending} className={` ${cssClass}`} type="submit">
      {text}
    </Button>
  );
};

export default CButton;
