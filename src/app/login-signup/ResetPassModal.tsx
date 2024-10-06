import Modal from "@/components/common/modal/Modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useResetPass } from "@/hooks/auth.hook";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

export const ResetPassModal = () => {
  const { mutate: resetPassword, isPending, error } = useResetPass();
  const [email, setEmail] = useState(""); // State to hold the input value

  const handleSend = () => {
    resetPassword({ email: email });
    setEmail("");
  };

  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);

  return (
    <Modal
      btnType="link"
      btnText="forgot password?"
      description=""
      title="Reset password"
    >
      <Input
        placeholder="email"
        value={email} // Bind the input value to state
        onChange={(e) => setEmail(e.target.value)} // Update state on change
      />
      <Button
        disabled={isPending}
        onClick={() => {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          !isPending && handleSend();
        }}
      >
        Send
      </Button>
    </Modal>
  );
};
