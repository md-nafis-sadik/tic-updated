"use server";
import { redirect } from "next/navigation";
import { createAuthSession, destroySession, verifyAuth } from "@/lib/auth";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const signUp = async (prevState, formData) => {
  const username = formData.get("username");
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  let errors = {};

  if (!username) errors.username = "Username is required";
  if (!password) errors.password = "Password is required";
  if (!email) errors.email = "Email is required";

  const existingUser = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  const existingUserByEmail = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) errors.username = "Username already taken";
  if (existingUserByEmail) errors.email = "Email already exist";

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }

  const userData = {
    username,
    name,
    email,
    password,
  };

  try {
    const salt = await bcrypt.genSalt(10);
    userData.password = await bcrypt.hash(password, salt);
    const user = await prisma.user.create({ data: userData });
    await createAuthSession(user.id);
    redirect("/");
  } catch (err) {
    throw err;
  }
};

export async function signIn(prevState, formData) {
  const usernameOrEmail = formData.get("usernameOrEmail");
  const password = formData.get("password");

  if (!usernameOrEmail || !password) {
    return {
      errors: {
        username: !username && "Username or email is required",
        password: !password && "Password is required",
      },
    };
  }

  const isEmail = usernameOrEmail.includes("@");

  const user = isEmail
    ? await prisma.user.findUnique({ where: { email: usernameOrEmail } })
    : await prisma.user.findUnique({ where: { username: usernameOrEmail } });

  if (!user) {
    return {
      errors: {
        username: "User not found",
      },
    };
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return {
      errors: {
        password: "Invalid password",
      },
    };
  }

  await createAuthSession(user.id);
  redirect("../dashboard");
}

export const logout = async () => {
  await destroySession();
  redirect("../login");
};
