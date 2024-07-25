"use server";
import { redirect } from "next/navigation";
import { User } from "./models";
import connectDB from "./db";
import { createAuthSession } from "./auth";

export const addUser = async (formData) => {
  await connectDB();

  const username = formData.get("username");
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  const user = new User({
    username,
    name,
    email,
    password,
  });

  try {
    await user.save();
    await createAuthSession(user._id);
    redirect("/");
  } catch (err) {
    throw err;
  }
};
