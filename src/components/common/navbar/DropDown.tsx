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
        Open
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-4 md:hidden">
        {/* dynamic */}
        {user?.email && (
          <Avatar className=" outline-none ms-2">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
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
