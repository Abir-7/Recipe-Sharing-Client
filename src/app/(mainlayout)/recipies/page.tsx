import HeaderTitle from "@/components/common/HeaderTitle/HeaderTitle";
import React from "react";
import RecipeData from "./RecipeData";

const Recipies = () => {
  return (
    <>
      <div className="borer border-t">
        <HeaderTitle text="All Recipe"></HeaderTitle>

        <RecipeData></RecipeData>
      </div>
    </>
  );
};

export default Recipies;
