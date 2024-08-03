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
    const category = await prisma.Project.delete({
      where: { id: categoryId },
    });
  } catch (error) {
    throw error;
  }
};

export const addProjects = async (prevState, formData) => {
  const title = formData.get("name");
  const category = formData.get("category");
  const image = formData.get("image");
  const description = formData.get("description");

  let errors = {};
  if (!title) errors.title = "Title is required";

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }

  console.log(formData);

  let imageUrl = null;

  try {
    if (image && image.size > 0) {
      imageUrl = await uploadImage(image);
      console.log("imageUrl", imageUrl);
    }

    const newProject = await prisma.project.create({
      data: {
        title: title,
        description: description,
        imageUrl: imageUrl,
        categoryId: category ? parseInt(category) : null,
      },
    });
    console.log("Project Has been added", newProject);
    redirect("./");
  } catch (err) {
    throw err;
  }
};

export const deleteProjects = async (projectId) => {
  try {
    const category = await prisma.Project.delete({
      where: { id: projectId },
    });

    redirect("./projects");
  } catch (error) {
    throw error;
  }
};
