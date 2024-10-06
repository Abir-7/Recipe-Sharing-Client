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
  const user = await getCurrentUser();

  // Allow access to /recipies for all users
  if (pathname === "/recipies") {
    return NextResponse.next();
  }

  // Restrict access to /recipies/:id for unauthenticated users
  if (pathname.startsWith("/recipies/") && !user) {
    return NextResponse.redirect(
      new URL(`/login-signup?redirects=${pathname}`, request.url)
    );
  }
  if (pathname.startsWith("/recipies/") && user) {
    return NextResponse.next();
  }

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
    "/recipies/:page*",
    "/user/dashboard",
    "/user/manage-profile",
    "/user/add-recipe",
    "/user/my-recipe",
    "/admin/dashboard",
    "/admin/add-admin",
    "/admin/all-admin",
    "/admin/manage-user-recipe",
    "/admin/manage-user",
  ],
};
