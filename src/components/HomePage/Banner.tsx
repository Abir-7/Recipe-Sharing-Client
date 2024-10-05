/* eslint-disable @next/next/no-img-element */
import React from "react";
import banner1 from "@/public/banner.jpg";
import Image from "next/image";

import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-gray-950 before:opacity-5 before:z-10">
      <Image
        src={banner1} // Adjust this path according to your folder structure
        alt="Banner Image"
        layout="fill" // Use 'fill' for absolute positioning
        className="absolute inset-0 w-full h-full object-cover" // These classes can be used with the div to ensure proper styling
        priority // Optional: Use for important images to load them early
      />

      <div className="min-h-[550px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 className="sm:text-4xl text-2xl font-bold mb-6">
          Explore the World of Recipe
        </h2>
        <p className="sm:text-lg text-base text-center text-gray-200">
          Embark on unforgettable journeys. Book your dream vacation today!
        </p>

        <Link
          href={"/recipies"}
          className="mt-5 py-2 rounded-lg font-medium bg-yellow-400 px-5 text-gray-950 hover:bg-yellow-500"
        >
          Explore Now
        </Link>
      </div>
    </div>
  );
};

export default Banner;
