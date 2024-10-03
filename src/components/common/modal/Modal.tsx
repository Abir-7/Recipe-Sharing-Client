import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";

interface ModalProps {
  title: string;
  description?: string;
  children?: React.ReactNode; // Optional children prop
  btnText?: string;
  btnType?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null;
  icon?: ReactNode;
  btnCss?: string;
}

const Modal: React.FC<ModalProps> = ({
  btnType,
  title,
  btnText,
  description,
  children,
  icon,
  btnCss = "",
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={btnType} className={`${btnCss} duration-200`}>
          {btnText}
          {icon}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {children} {/* Render children elements if provided */}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
