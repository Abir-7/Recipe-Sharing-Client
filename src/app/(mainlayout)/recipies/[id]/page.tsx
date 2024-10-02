import envConfig from "@/config/envConfig";
import { IRecipeWithRating } from "@/interface/recipe.interface";
import { cookies } from "next/headers";
import React from "react";
import RatingOperation from "./RatingOperation";

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
  const { data }: { data: IRecipeWithRating[] } = await response.json();
  console.log(data);
  return (
    <div className=" container mx-auto h-full">
      {data?.map((item) => {
        return (
          <div key={item._id}>
            <div className="relative w-full h-full">
              <div
                dangerouslySetInnerHTML={{
                  __html: item?.recipe && (item?.recipe as string),
                }}
                className="h-full mt-5 mx-2 flex flex-col items-center"
              />
            </div>
            <RatingOperation
              comments={item?.comments}
              totalDislike={item.totalDislikes}
              totalLikes={item.totalLikes}
              recipeId={item?._id}
            ></RatingOperation>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeDetails;
