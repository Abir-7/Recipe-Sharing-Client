"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const AdminLink = () => {
  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };
  const toggleServices2 = () => {
    setIsServicesOpen2(!isServicesOpen2);
  };
  const toggleServices3 = () => {
    setIsServicesOpen3(!isServicesOpen3);
  };

  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServicesOpen2, setIsServicesOpen2] = useState(false);
  const [isServicesOpen3, setIsServicesOpen3] = useState(false);
  return (
    <nav className="flex flex-col p-4 space-y-4">
      <Link
        href="/admin/dashboard"
        className={
          pathname == "/admin/dashboard"
            ? "bg-yellow-400 px-4 py-1 rounded-xl border-2 border-white"
            : " w-full px-4 py-1 rounded-xl border border-yellow-400"
        }
      >
        Admin Dashboard
      </Link>

      <div className="w-full grid gap-2">
        <p
          className={
            "w-full px-4 py-1 font-semibold rounded-xl border border-yellow-400"
          }
          onClick={toggleServices2}
        >
          Manage Admin
          <span>{isServicesOpen2 ? "-" : "+"}</span>
        </p>
        {isServicesOpen2 && (
          <div className="pl-4 grid gap-4 w-full">
            <Link
              href="/admin/add-admin"
              className={
                pathname == "/admin/add-admin"
                  ? "bg-yellow-400 px-4 text-gray-950 font-semibold py-1 rounded-xl border-2 border-white"
                  : " w-full px-4 py-1 font-semibold rounded-xl border border-yellow-400"
              }
            >
              Add Admin
            </Link>
            <Link
              href="/admin/all-admin"
              className={
                pathname == "/admin/all-admin"
                  ? "bg-yellow-400 px-4 text-gray-950 font-semibold py-1 rounded-xl border-2 border-white"
                  : " w-full px-4 py-1 font-semibold rounded-xl border border-yellow-400"
              }
            >
              All Admin
            </Link>
          </div>
        )}
      </div>
      <div className="w-full grid gap-2">
        <p
          className={
            "w-full px-4 py-1 font-semibold rounded-xl border border-yellow-400"
          }
          onClick={toggleServices3}
        >
          Manage User Recipe
          <span>{isServicesOpen2 ? "-" : "+"}</span>
        </p>
        {isServicesOpen3 && (
          <div className="pl-4 grid gap-4 w-full">
            <Link
              href="/admin/manage-user-recipe"
              className={
                pathname == "/admin/manage-user-recipe"
                  ? "bg-yellow-400 px-4 text-gray-950 font-semibold py-1 rounded-xl border-2 border-white"
                  : " w-full px-4 py-1 font-semibold rounded-xl border border-yellow-400"
              }
            >
              RecipeManage
            </Link>
          </div>
        )}
      </div>
      <div className="w-full grid gap-2">
        <p
          className={
            "w-full px-4 py-1 font-semibold rounded-xl border border-yellow-400"
          }
          onClick={toggleServices}
        >
          Manage User
          <span>{isServicesOpen ? "-" : "+"}</span>
        </p>
        {isServicesOpen && (
          <div className="pl-4 grid gap-4 w-full">
            <Link
              href="/admin/manage-user"
              className={
                pathname == "/admin/manage-user"
                  ? "bg-yellow-400 px-4 text-gray-950 font-semibold py-1 rounded-xl border-2 border-white"
                  : " w-full px-4 py-1 font-semibold rounded-xl border border-yellow-400"
              }
            >
              All User
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

export default AdminLink;
