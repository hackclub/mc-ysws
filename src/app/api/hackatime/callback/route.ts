import { NextResponse } from "next/server";
import { exchangeCodeForToken } from "~/lib/api";

export async function GET(request: Request) {
  const code = new URL(request.url).searchParams.get("code");
  const response = NextResponse.redirect(`https://${process.env.URL || "hackcraft.hackclub.com"}/projects`);
  if (!code) return response;

  response.cookies.set("hackatime_access_token", await exchangeCodeForToken("hackatime", code), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 2592000,
    path: "/",
  });

  return response;
}
