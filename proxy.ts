import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const USERNAME = "latelierdor";
const PASSWORD = "Kalolhater123!";
const REALM = "L'Atelier d'Or";

function unauthorized() {
  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": `Basic realm="${REALM}", charset="UTF-8"`,
      "Cache-Control": "no-store",
    },
  });
}

export function proxy(request: NextRequest) {
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
  matcher: [
    // Match everything except Next internals, static assets, and metadata files.
    "/((?!_next/static|_next/image|_next/data|favicon.ico|favicon-16x16.png|favicon-32x32.png|apple-touch-icon.png|android-chrome-192x192.png|android-chrome-512x512.png|site.webmanifest|robots.txt|sitemap.xml|og-image.jpg).*)",
  ],
};
