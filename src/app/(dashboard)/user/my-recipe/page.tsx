/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useGetMyRecipe } from "@/hooks/recipe.hook";
import React from "react";

const MyRecipe = () => {
  const { data } = useGetMyRecipe();
  console.log(data);
  return (
    <div>
      {data?.data?.map((itmem: any) => (
        // eslint-disable-next-line react/jsx-key
        <div className="overflow-y-auto w-64  flex flex-col items-center justify-center">
          <div dangerouslySetInnerHTML={{ __html: itmem.recipe }} />
        </div>
      ))}
    </div>
  );
};

export default MyRecipe;
