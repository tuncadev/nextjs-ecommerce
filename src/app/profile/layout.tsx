import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import SideBar from "@/app/components/profile/SideBar";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();

  if (!session.userId) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: { id: session.userId },
    select: {
      id: true,
      email: true,
      username: true,
      role: true,
    },
  });

  if (!user) {
    redirect("/login");
  }

  // If user exists, continue rendering
  return (
    <section className="container !p-0 flex flex-col sm:flex-row  justify-between">
      <SideBar />
      <div className="sm:pl-4 w-full ">
        {children}
      </div>
    </section>
  );
}
