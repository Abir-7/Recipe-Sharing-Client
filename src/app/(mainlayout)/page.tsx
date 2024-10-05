import Banner from "@/components/HomePage/Banner";
import TopRecipes from "@/components/HomePage/TopRecipes/TopRecipes";
import TopUser from "@/components/HomePage/TopUser/TopUser";
import React from "react";

function page() {
  return (
    <div>
      <Banner></Banner>
      <TopRecipes></TopRecipes>
      <TopUser></TopUser>
    </div>
  );
}

export default page;
