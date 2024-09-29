import { Navbar } from "@/components/common/navbar/Navbar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
    </>
  );
};

export default layout;
