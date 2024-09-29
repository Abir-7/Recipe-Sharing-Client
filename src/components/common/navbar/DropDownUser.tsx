import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { LogOut } from "../logoutButton/LogOut";
export const DropDownUser = ({
  authLink,
}: {
  authLink: { name: string; url: string }[];
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="  outline-none">
        <Avatar className=" outline-none">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-4 font-medium ">
        {authLink?.map((item, i) => (
          <DropdownMenuItem key={i}>
            <Link href={item.url}>{item.name}</Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem>
          <LogOut></LogOut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
