import { SessionOptions, getIronSession } from "iron-session";
import { cookies } from "next/headers";
 

export interface SessionData {
  userId?: string;
}

export const sessionOptions: SessionOptions = {
  cookieName: "iron_session",
  password: process.env.SESSION_SECRET as string,
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

export async function getSession() {
  const cookieStore = await cookies();
  return getIronSession<SessionData>(cookieStore, sessionOptions);
}