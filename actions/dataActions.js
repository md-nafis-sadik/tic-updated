"use server";

import { uploadImage } from "@/lib/cloudnary";
import { redirect } from "next/navigation";

import prisma from "@/lib/prismaClient";

export const addCategory = async (prevState, formData) => {
  const categoryName = formData.get("name");
  const parentCategory = formData.get("parentCategory");
  const priority = formData.get("priority");
  const image = formData.get("image");

  console.log(image);

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

    console.log("imageUrl", imageUrl);

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

export const getMenuItems = async () => {
  try {
    const menuItems = await prisma.menuItem.findMany({
      where: {
        parentId: null,
      },
      include: {
        children: {
          include: {
            children: true,
          },
        },
      },
    });
    return menuItems;
  } catch (error) {
    throw error;
  }
};

export const addMenuItem = async (prevState, formData) => {
  const name = formData.get("name");
  const url = formData.get("url");
  const parentMenu = formData.get("parentMenu");
  const priority = formData.get("priority");

  let errors = {};

  if (!name) errors.name = "Name is required";
  if (!url) errors.url = "Url is required";

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }

  try {
    const newMenuItem = await prisma.menuItem.create({
      data: {
        name: name,
        url: url,
        parentId: parentMenu ? parseInt(parentMenu) : null,
        priority: priority ? parseInt(priority) : null,
      },
    });

    redirect("./");
  } catch (err) {
    throw err;
  }
};

export async function deleteMenuItem(menuItemId) {
  try {
    const menuItem = await prisma.menuItem.delete({
      where: { id: menuItemId },
    });
    redirect("./menu");
  } catch (error) {
    throw error;
  }
}

export const addService = async (prevState, formData) => {
  const title = formData.get("serviceName");
  const url = formData.get("serviceUrl");
  const priority = formData.get("priority");
  const parentId = formData.get("parentService");

  console.log(formData);

  let errors = {};
  if (!title) errors.title = "Title is required";

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }

  try {
    const newService = await prisma.service.create({
      data: {
        title: title,
        serviceUrl: url,
        priority: priority ? parseInt(priority) : null,
        parentId: parentId ? parseInt(parentId) : null,
      },
    });
    redirect("./");
  } catch (err) {
    throw err;
  }
};
