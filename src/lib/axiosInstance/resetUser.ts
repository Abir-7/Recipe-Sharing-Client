"use client";
import { AuthContext } from "@/context/auth.provider";
import { config } from "@/middleware";
import { logOutUser } from "@/services/AuthService";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";

export async function useResetUser() {
  await logOutUser();
  const authData = useContext(AuthContext);
  const pathName = usePathname();
  const router = useRouter();
  if (
    config.matcher.some((route) => {
      return pathName.match(route);
    })
  ) {
    router.push("/login-signup");
  }
  authData?.setUser(null);
}
