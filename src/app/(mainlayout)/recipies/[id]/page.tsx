import envConfig from "@/config/envConfig";
import { IRecipeResponse } from "@/interface/recipe.interface";
import { cookies } from "next/headers";
import React from "react";
import RatingOperation from "./RatingOperation";
import UserFollow from "./UserFollow";
import Fiilter from "./Fiilter";

interface RecipeDetailsProps {
  params: {
    id: string;
  };
}

const RecipeDetails: React.FC<RecipeDetailsProps> = async ({ params }) => {
  const { id } = params;

  const token = cookies().get("accessToken")?.value;
  const response = await fetch(`${envConfig.baseApi}/recipe/${id}`, {
    headers: {
      Authorization: `${token}`,
    },
    next: { tags: ["recepe_details"] },
  });
  const { data }: { data: IRecipeResponse } = await response.json();

  return (
    <div className="container mx-auto h-full relative p-2">
      <Fiilter isPremium={data?.recipe?.isPremium}></Fiilter>
      <div key={data?._id}>
        <div className="relative w-full h-full ">
          <div
            dangerouslySetInnerHTML={{
              __html: data?.recipe ? (data?.recipe?.recipe as string) : "",
            }}
            className=" mt-5 mx-2 flex flex-col items-center"
          />
          <div className=" pb-5 flex justify-center gap-5">
            <span> Posted By: {data?.customer?.email}</span>{" "}
            <UserFollow
              userEmail={data?.customer?.email}
              isFollower={data?.isFollower ? data?.isFollower : false}
              userID={data?.customer?._id}
            ></UserFollow>
          </div>
        </div>

        <RatingOperation
          comments={data?.recipe?.comments}
          totalDislike={data?.recipe?.totalDislikes}
          totalLikes={data?.recipe?.totalLikes}
          recipeId={data?._id}
        ></RatingOperation>
      </div>
    </div>
  );
};

export default RecipeDetails;
