import Transition from "@/components/Animation/Transition";
import Footer from "@/components/common/Footer/Footer";
import { Navbar } from "@/components/common/navbar/Navbar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-[90vh]">
        <Transition>{children}</Transition>
      </div>
      <Footer></Footer>
    </>
  );
};

export default layout;
