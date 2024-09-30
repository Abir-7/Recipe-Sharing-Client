import Sidebar from "@/components/common/SideNav/Sidebar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <Sidebar>{children}</Sidebar>
    </div>
  );
};

export default layout;
