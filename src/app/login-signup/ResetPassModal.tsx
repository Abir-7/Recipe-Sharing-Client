import Modal from "@/components/common/modal/Modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useResetPass } from "@/hooks/auth.hook";
import React, { useState } from "react";

export const ResetPassModal = () => {
  const { mutate: resetPassword } = useResetPass();
  const [email, setEmail] = useState(""); // State to hold the input value

  const handleSend = () => {
    resetPassword({ email: email });
    setEmail("");
  };

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
      <Button onClick={handleSend}>Send</Button>
    </Modal>
  );
};
