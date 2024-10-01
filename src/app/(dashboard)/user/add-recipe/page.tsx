import HeaderTitle from "@/components/common/HeaderTitle/HeaderTitle";
import React from "react";
import RichTextEditor from "./RichTextEditor";

const AddRecipe = () => {
  return (
    <div>
      <HeaderTitle text="Add Recipe"></HeaderTitle>
      <div>
        <RichTextEditor></RichTextEditor>
      </div>
    </div>
  );
};

export default AddRecipe;
