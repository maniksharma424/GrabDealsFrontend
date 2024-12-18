"use server";
import { cookies } from "next/headers";

export const setAccessToken = async (token: string) => {
  const cookieStore = await cookies();
  cookieStore.set("accessToken", token, {
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days in seconds
  });
};

export const isUserLoggedIn = async () => {
  const cookieStore = await cookies();

  return cookieStore.get("accessToken")?.value !== undefined;
};
