/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import HeaderTitle from "@/components/common/HeaderTitle/HeaderTitle";
import { Button } from "@/components/ui/button";
import { useGetMyRecipe } from "@/hooks/recipe.hook";
import React from "react";

const MyRecipe = () => {
  const { data } = useGetMyRecipe();

  return (
    <>
      <HeaderTitle text="My Recipe"></HeaderTitle>
      <div className="p-2">
        {data?.data?.map((item: any) => (
          // eslint-disable-next-line react/jsx-key
          <div className=" w-64 border  p-4  shadow-md rounded-lg flex flex-col items-center justify-center">
            <div className="">
              <div
                dangerouslySetInnerHTML={{
                  __html: (item.recipe as string).slice(0, 400) + "....",
                }}
                className="h-full"
              />{" "}
              <Button className="w-full bg-yellow-400 text-gray-950 font-medium hover:text-white hover:bg-gray-950">
                View
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyRecipe;
