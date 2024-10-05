/* eslint-disable @next/next/no-img-element */
import React from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="rounded-lg shadow bg-gray-950 mt-5">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse ">
            <Image
              width={100}
              height={100}
              src={logo}
              className="w-10 h-10 object-cover"
              alt="Flowbite Logo"
            />

            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Recipe World
            </span>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 text-white">
            <li>
              <Link href="/about-us" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6  sm:mx-auto border-yellow-400 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
