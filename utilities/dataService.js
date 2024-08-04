import prisma from "@/lib/prismaClient";
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

export const getCategoriesBySlug = async (slug) => {
  try {
    const categories = await prisma.portfolioCategory.findUnique({
      where: { slug: slug },
      include: {
        subcategories: true,
        projects: true,
      },
    });
    return categories;
  } catch (error) {
    throw error;
  }
};

export const getProjects = async () => {
  try {
    const projects = await prisma.project.findMany();
    return projects;
  } catch (error) {
    throw error;
  }
};
