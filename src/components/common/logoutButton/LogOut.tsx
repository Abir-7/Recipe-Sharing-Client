"use client";
import { Button } from "@/components/ui/button";
import { AuthContext } from "@/context/auth.provider";
import { config } from "@/middleware";
import { logOutUser } from "@/services/AuthService";
import { usePathname, useRouter } from "next/navigation";

import React, { useContext } from "react";

export const LogOut = () => {
  const router = useRouter();
  const pathName = usePathname();
  const authData = useContext(AuthContext);
  const handleLogout = async () => {
    await logOutUser();
    authData?.setUser(null);
    if (config.matcher.map((route) => pathName.match(route))) {
      router.push("/login-signup");
    }
  };
  console.log();
  return <Button onClick={handleLogout}>Logout</Button>;
};
