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

export const getAllCategories = async () => {
  try {
    const categories = await prisma.portfolioCategory.findMany({
      include: {
        subcategories: {
          include: {
            projects: true,
          },
        },
      },
    });
    return categories;
  } catch (error) {
    throw error;
  }
};

export const getCategoriesBySlug = async (slug) => {
  try {
    // Fetch the category by slug and include related projects
    const category = await prisma.portfolioCategory.findUnique({
      where: { slug: slug },
      include: {
        subcategories: {
          include: {
            projects: true,
          },
        },
      },
    });
    return category;
  } catch (error) {
    console.error("Error fetching category:", error);
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
