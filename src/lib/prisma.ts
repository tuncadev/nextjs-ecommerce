import { PrismaClient, Prisma } from "@prisma/client"

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export { prisma, Prisma }; // ✅ Export both prisma and Prisma
export default prisma;
