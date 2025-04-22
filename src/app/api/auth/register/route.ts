import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";

export async function POST(req: Request) {
  const { email, username, password } = await req.json();

  const existingUser = await prisma.user.findFirst({
    where: { OR: [{ email }, { username }] },
  });

  if (existingUser) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const passwordHash = await hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      username,
      passwordHash,
      role: "user",
      dateCreated: new Date(),
    },
  });

  const session = await getSession();
  session.userId = user.id;
  await session.save();

  return NextResponse.json({ ok: true });
}
