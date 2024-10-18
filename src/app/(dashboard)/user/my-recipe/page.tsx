"use client";
import React, { useState } from "react";
import { useSingleUserRecipe } from "@/hooks/recipe.hook";
import HeaderTitle from "@/components/common/HeaderTitle/HeaderTitle";
import { Button } from "@/components/ui/button";
import DeleteModal from "./DeleteModal";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Link from "next/link";
import { IRecipeResponse } from "@/interface/recipe.interface";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useDebounce from "@/utils/useDebounce";
import AnimatedCard from "@/components/Animation/AnimatedCard";

const MyRecipe = () => {
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<string>("averageRating");
  const [category, setCategory] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize] = useState<number>(5); // Set the number of items per page

  const debouncedSearch = useDebounce(search, 500);

  const { data, isLoading } = useSingleUserRecipe(
    debouncedSearch,
    sort,
    category,
    currentPage,
    pageSize
  );

  const total = data?.data?.total || 0;
  const totalPages = Math.ceil(total / pageSize);

  // Handle page changes
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <HeaderTitle text="My Recipe" />

      {/* Search, Sort, and Filter Controls */}
      <div className="flex gap-4 items-center p-4">
        <Input
          type="text"
          className="border p-2 rounded-lg w-full max-w-md"
          placeholder="Search recipe"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Select onValueChange={(value) => setSort(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="-averageRating">Sort by Rating</SelectItem>
            <SelectItem value="-totalLikes">Sort by Likes</SelectItem>
          </SelectContent>
        </Select>

        <Select
          onValueChange={(value) => setCategory(value === "all" ? "" : value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Category</SelectItem>
            {data?.data?.allCategory.map((item: string) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {isLoading ? (
        <>
          <div className="flex h-[70vh] justify-center mt-10 text-2xl">
            <p>Loading....</p>
          </div>
        </>
      ) : (
        <div className="min-h-[70vh]">
          <div className="p-2  grid justify-items-center grid-cols-1 gap-5 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {data?.data?.recipe?.length > 0 ? (
              <>
                {" "}
                {data?.data?.recipe.map((item: IRecipeResponse, i: number) => (
                  <AnimatedCard key={i}>
                    {" "}
                    <div className="w-64  border p-4 shadow-md  flex flex-col items-center">
                      <div>
                        <div className="w-full h-56 mb-2">
                          <Image
                            className="w-full h-full object-cover"
                            height={400}
                            width={400}
                            src={item?.recipe?.photo}
                            alt={item?.recipe?.title}
                          />
                        </div>
                        <div className="min-h-20">
                          <p className="text-xl font-semibold">
                            {item?.recipe?.title}
                          </p>
                          <p className="font-semibold">
                            <span className="text-green-500">Category:</span>{" "}
                            {item?.recipe?.category}
                          </p>
                        </div>
                        <Link href={`/recipies/${item?._id}`}>
                          <Button className="w-full bg-yellow-400  font-medium text-white hover:bg-yellow-500">
                            View
                          </Button>
                        </Link>
                        <Link
                          className="w-full"
                          href={`/user/my-recipe/${item?._id}`}
                        >
                          <Button className=" bg-green-500 hover:bg-green-600 w-full mt-1">
                            Update
                          </Button>
                        </Link>
                        <DeleteModal recipeId={item?._id} />

                        <div className="flex justify-between mt-1">
                          <div className="flex gap-2 items-center text-sm text-green-500">
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
                          <div className="flex gap-2 items-center text-sm text-red-500">
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
                  </AnimatedCard>
                ))}
              </>
            ) : (
              <>
                {" "}
                <div className="p-2 text-center text-xl font-bold">
                  No Data Found
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center mt-6 ">
        <Button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="mr-4"
        >
          Previous
        </Button>
        <p className="text-lg font-bold">
          Page {currentPage} of {totalPages}
        </p>
        <Button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="ml-4"
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default MyRecipe;
