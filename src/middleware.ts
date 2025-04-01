import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  console.log(path, "this is path from middleware");

  const isPublicPath = path === "/" || path === "/signup";
  console.log(isPublicPath, "this is public path");
  const token = request.cookies.get("token")?.value || "";
  if (isPublicPath && token) {
    return NextResponse.redirect(
      new URL("/movies", request.nextUrl.origin).toString()
    );
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(
      new URL("/", request.nextUrl.origin).toString()
    );
  }
}

export const config = {
  matcher: ["/", "/movies", "/movies/:path*", "/signup"],
};
