import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const response = NextResponse.redirect(`https://${process.env.URL || "hackcraft.hackclub.com"}`);
  response.cookies.set("hca_access_token", "", {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 0,
    path: "/",
  });
  response.cookies.set("hackatime_access_token", "", {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 0,
    path: "/",
  });

  return response;
}
