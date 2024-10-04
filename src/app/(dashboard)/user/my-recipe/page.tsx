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

const MyRecipe = () => {
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<string>("averageRating");
  const [category, setCategory] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize] = useState<number>(1); // Set the number of items per page

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
      <div className="flex justify-between items-center p-4">
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
                  <div
                    key={i}
                    className="w-64  border p-4 shadow-md rounded-lg flex flex-col items-center"
                  >
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
                      <Button className="w-full bg-yellow-400 text-gray-950 font-medium hover:text-white hover:bg-gray-950">
                        <Link href={`/recipies/${item?._id}`}>View</Link>
                      </Button>
                      <DeleteModal recipeId={item?._id} />
                      <div className="text-sm mt-1">
                        <span className="font-semibold">Posted by:</span>{" "}
                        <span>{item?.customer.email}</span>
                      </div>
                      <div className="flex justify-between mt-1">
                        <div className="flex gap-2 items-center text-sm">
                          {/* Add your SVG content here */}
                          {item?.recipe?.totalLikes}
                        </div>
                        <Rating
                          value={item?.recipe?.averageRating}
                          readOnly
                          style={{ maxWidth: 70 }}
                        />
                        <div className="flex gap-2 items-center text-sm">
                          {/* Add your SVG content here */}
                          {item?.recipe?.totalDislikes}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                {" "}
                <div className="p-2 text-center text-xl font-bold">
                  You have not added any recipe
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
