import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IAuthUser } from "@/interface/auth.inteface";

import Link from "next/link";
import React from "react";
import { LogOut } from "../logoutButton/LogOut";

interface IProps {
  navLink: { name: string; url: string }[];
  user: IAuthUser | null;
  authLink: { name: string; url: string }[];
}
export const DropDown = ({ navLink, user, authLink }: IProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" bg-black text-white ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-4 md:hidden">
        {/* dynamic */}
        {user?.email && (
          <Avatar className=" outline-none ms-2">
            <AvatarImage
              src={
                user?.photo ||
                "https://static.vecteezy.com/system/resources/previews/029/156/453/original/admin-business-icon-businessman-business-people-male-avatar-profile-pictures-man-in-suit-for-your-web-site-design-logo-app-ui-solid-style-illustration-design-on-white-background-eps-10-vector.jpg"
              }
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        )}
        {navLink.map((item, i) => (
          <DropdownMenuItem key={i}>
            <Link href={item.url}>{item.name}</Link>
          </DropdownMenuItem>
        ))}
        {/* dynamic */}
        {user?.email ? (
          <>
            {authLink?.map((item, i) => (
              <DropdownMenuItem key={i}>
                <Link href={item.url}>{item.name}</Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem>
              <LogOut></LogOut>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem>
              <Link href={"/login-signup"}>
                <Button>Login</Button>
              </Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
