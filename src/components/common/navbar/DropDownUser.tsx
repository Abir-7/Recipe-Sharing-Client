import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { LogOut } from "../logoutButton/LogOut";
import { IAuthUser } from "@/interface/auth.inteface";
export const DropDownUser = ({
  authLink,
  user,
}: {
  user: IAuthUser | null;
  authLink: { name: string; url: string }[];
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="  outline-none">
        <Avatar className=" outline-none">
          <AvatarImage
            src={
              user?.photo ||
              "https://static.vecteezy.com/system/resources/previews/029/156/453/original/admin-business-icon-businessman-business-people-male-avatar-profile-pictures-man-in-suit-for-your-web-site-design-logo-app-ui-solid-style-illustration-design-on-white-background-eps-10-vector.jpg"
            }
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-4 me-5 font-medium ">
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
