import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const getParentCategories = async () => {
  try {
    const categories = await prisma.portfolioCategory.findMany({
      where: {
        parentId: null,
      },
      include: {
        subcategories: true,
      },
    });
    return categories;
  } catch (error) {
    throw error;
  }
};
