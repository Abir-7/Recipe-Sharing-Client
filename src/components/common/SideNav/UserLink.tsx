"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const UserLink = () => {
  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="flex flex-col p-4 space-y-4">
      <Link
        href="/user/dashboard"
        className={
          pathname == "/user/dashboard"
            ? "bg-yellow-400 px-4 py-1 rounded-xl border-2 border-white"
            : " w-full px-4 py-1 rounded-xl border border-yellow-400"
        }
      >
        User Dashboard
      </Link>
      <Link
        href="/user/manage-profile"
        className={
          pathname == "/user/edit-profile"
            ? "bg-yellow-400 px-4 py-1 rounded-xl border-2 text-gray-950 font-semibold border-white"
            : " w-full px-4 py-1 rounded-xl border font-semibold border-yellow-400"
        }
      >
        Manage Profile
      </Link>

      <div className="w-full grid gap-2">
        <p
          className={
            "w-full px-4 py-1 font-semibold rounded-xl border border-yellow-400"
          }
          onClick={toggleServices}
        >
          Manage Recipe
          <span>{isServicesOpen ? "-" : "+"}</span>
        </p>
        {isServicesOpen && (
          <div className="pl-4 grid gap-4 w-full">
            <Link
              href="/user/add-recipe"
              className={
                pathname == "/user/add-recipe"
                  ? "bg-yellow-400 px-4 text-gray-950 font-semibold py-1 rounded-xl border-2 border-white"
                  : " w-full px-4 py-1 font-semibold rounded-xl border border-yellow-400"
              }
            >
              Add Recipe
            </Link>
            <Link
              href="/user/my-recipe"
              className={
                pathname == "/user/my-recipe"
                  ? "bg-yellow-400 px-4 text-gray-950 font-semibold py-1 rounded-xl border-2 border-white"
                  : " w-full px-4 py-1 font-semibold rounded-xl border border-yellow-400"
              }
            >
              My Recipe
            </Link>
          </div>
        )}
      </div>
      <Link
        href="/"
        className={
          pathname == "/"
            ? "bg-yellow-400 px-4 py-1 text-gray-950 font-semibold rounded-xl border-2 border-white"
            : " w-full px-4 py-1 rounded-xl font-semibold border border-yellow-400"
        }
      >
        Home
      </Link>
    </nav>
  );
};

export default UserLink;
