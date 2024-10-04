import { Button } from "@/components/ui/button";
import envConfig from "@/config/envConfig";
import { IRecipeResponse } from "@/interface/recipe.interface";
import Link from "next/link";
import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Image from "next/image";
const TopRecipes = async () => {
  const response = await fetch(`${envConfig.baseApi}/recipe/top-recipe`, {
    cache: "no-store",
  });
  const { data } = await response.json();

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-5 mt-10">Top Recipes</h1>
      <div className="p-2 grid sm:grid-cols-2 md:grid-cols-3 gap-8 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
        {data?.map((item: IRecipeResponse, i: number) => (
          <div
            key={i}
            className=" w-64 border  p-4  shadow-md rounded-lg flex flex-col items-center  "
          >
            <div className="">
              <div className="w-full h-56 mb-2">
                <Image
                  className="w-full h-full object-cover"
                  height={400}
                  width={400}
                  src={item?.recipe?.photo}
                  alt=""
                ></Image>
              </div>
              <div className="min-h-24">
                <p className="text-xl font-semibold "> {item?.recipe?.title}</p>
                <p className=" font-semibold ">
                  <span className="text-green-500"> Category:</span>{" "}
                  {item?.recipe?.category}
                </p>
              </div>
              <Button className="w-full bg-yellow-400 text-gray-950 font-medium hover:text-white hover:bg-gray-950">
                <Link href={`/recipies/${item?._id}`}>View</Link>
              </Button>

              <div className="text-sm mt-1 grid">
                <span className="font-semibold">posted by:</span>{" "}
                <span>{item?.customer.email}</span>
              </div>
              <div className="flex justify-between mt-2 ">
                <div className="flex gap-2 text-green-500 items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path d="M1 8.25a1.25 1.25 0 1 1 2.5 0v7.5a1.25 1.25 0 1 1-2.5 0v-7.5ZM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0 1 14 3c0 .995-.182 1.948-.514 2.826-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 0 1-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 0 1-1.341-.317l-2.734-1.366A3 3 0 0 0 6.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 0 1 2.166-1.73c.432-.143.853-.386 1.011-.814.16-.432.248-.9.248-1.388Z" />
                  </svg>

                  {item?.recipe?.totalLikes}
                </div>
                <Rating
                  value={item?.recipe?.averageRating}
                  readOnly
                  style={{ maxWidth: 70 }}
                />
                <div className="flex gap-2 text-red-500 items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path d="M18.905 12.75a1.25 1.25 0 1 1-2.5 0v-7.5a1.25 1.25 0 0 1 2.5 0v7.5ZM8.905 17v1.3c0 .268-.14.526-.395.607A2 2 0 0 1 5.905 17c0-.995.182-1.948.514-2.826.204-.54-.166-1.174-.744-1.174h-2.52c-1.243 0-2.261-1.01-2.146-2.247.193-2.08.651-4.082 1.341-5.974C2.752 3.678 3.833 3 5.005 3h3.192a3 3 0 0 1 1.341.317l2.734 1.366A3 3 0 0 0 13.613 5h1.292v7h-.963c-.685 0-1.258.482-1.612 1.068a4.01 4.01 0 0 1-2.166 1.73c-.432.143-.853.386-1.011.814-.16.432-.248.9-.248 1.388Z" />
                  </svg>

                  {item?.recipe?.totalDislikes}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRecipes;
