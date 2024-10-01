"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const AdminLink = () => {
  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="flex flex-col p-4 space-y-4">
      <Link
        href="/admin/dashboard"
        className={
          pathname == "/user/dashboard"
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
                pathname == "/user/about"
                  ? "bg-yellow-400 px-4 text-gray-950 font-semibold py-1 rounded-xl border-2 border-white"
                  : " w-full px-4 py-1 font-semibold rounded-xl border border-yellow-400"
              }
            >
              Manage User
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
