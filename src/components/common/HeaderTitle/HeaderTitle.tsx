import React from "react";

const HeaderTitle = ({ text }: { text: string }) => {
  return (
    <div className="h-20 flex justify-center items-center bg-gray-950 text-white font-semibold text-2xl ">
      <p className=""> {text}</p>
    </div>
  );
};

export default HeaderTitle;
