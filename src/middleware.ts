import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("aarna_auth_token")?.value;
  const { pathname } = request.nextUrl;

  const isAuthRoute = pathname.startsWith("/login");
  const isDashboardRoute =
    pathname.startsWith("/overview") ||
    pathname.startsWith("/pos") ||
    pathname.startsWith("/management");

  if (isDashboardRoute) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (isAuthRoute) {
    if (token) {
      return NextResponse.redirect(new URL("/pos", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login",
    "/overview/:path*",
    "/pos/:path*",
    "/management/:path*",
  ],
};
