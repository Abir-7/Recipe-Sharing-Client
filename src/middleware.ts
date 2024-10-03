import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCurrentUser } from "./services/AuthService";

const AuthRoutes = ["/login-signup"];
type Role = keyof typeof roleBasedRoutes;

const roleBasedRoutes = {
  superAdmin: [/^\/admin/],
  admin: [/^\/admin/],
  user: [/^\/user/],
};
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // if (pathname === "/recipies") {
  //   console.log(pathname);
  //   return NextResponse.next();
  // }
  const user = await getCurrentUser();

  if (!user) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(`/login-signup?redirects=${pathname}`, request.url)
      );
    }
  }

  if (user?.role && roleBasedRoutes[user?.role as Role]) {
    const routes = roleBasedRoutes[user?.role as Role];

    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    "/login-signup",
    "/admin/:page*",
    "/user/:page*",
    "/admin",
    "/user",
    "/user/manage-profile",
  ],
};
