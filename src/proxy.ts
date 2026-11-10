import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const USERNAME = "latelierdor";
const PASSWORD = "Kalolhater123!";

function unauthorized() {
  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Site", charset="UTF-8"',
      "Cache-Control": "no-store",
    },
  });
}

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next/") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  ) {
    return NextResponse.next();
  }

  const header = request.headers.get("authorization");
  if (!header || !header.toLowerCase().startsWith("basic ")) {
    return unauthorized();
  }
  let decoded = "";
  try {
    decoded = atob(header.slice(6).trim());
  } catch {
    return unauthorized();
  }
  const idx = decoded.indexOf(":");
  if (idx < 0) return unauthorized();
  const user = decoded.slice(0, idx);
  const pass = decoded.slice(idx + 1);
  if (user !== USERNAME || pass !== PASSWORD) {
    return unauthorized();
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
