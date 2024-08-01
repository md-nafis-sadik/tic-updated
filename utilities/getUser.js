import { verifyAuth } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";
export async function getUser(userId) {
  const prisma = new PrismaClient();

  if (!userId) {
    return;
  }
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  return user;
}
