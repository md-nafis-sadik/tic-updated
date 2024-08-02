"use server";

import { uploadImage } from "@/lib/cloudnary";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export const addCategory = async (prevState, formData) => {
  const categoryName = formData.get("name");
  const parentCategory = formData.get("parentCategory");
  const priority = formData.get("priority");
  const image = formData.get("image");

  let errors = {};

  if (!categoryName) errors.categoryName = "Category Name is required";

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }

  let imageUrl = null;
  try {
    if (image && image.size > 0) {
      imageUrl = await uploadImage(image);
      console.log("imageUrl", imageUrl);
    }

    const newCategory = await prisma.portfolioCategory.create({
      data: {
        name: categoryName,
        imgUrl: imageUrl,
        slug: categoryName.toLowerCase().replace(/ /g, "-"),
        priority: priority ? parseInt(priority) : null,
        parentId: parentCategory ? parseInt(parentCategory) : null,
      },
    });

    redirect("./category");
  } catch (err) {
    throw err;
  }
};

export const deleteCategory = async (categoryId) => {
  try {
    const category = await prisma.portfolioCategory.delete({
      where: { id: categoryId },
    });

    redirect("./category");
  } catch (error) {
    throw error;
  }
};
