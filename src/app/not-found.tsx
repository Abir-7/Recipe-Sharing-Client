import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex justify-center flex-col items-center h-screen w-full text-xl bg-gray-950">
      <p className="text-3xl text-yellow-400">404</p>
      <p className="text-white">Requested Page Not Found</p>
      <Link href="/" className="mt-2">
        <Button className=" text-yellow-400">Return Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
