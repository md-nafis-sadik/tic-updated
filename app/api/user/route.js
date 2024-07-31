import connectDB from "@/lib/db";
import { User } from "@/lib/models";
import { NextResponse } from "next/server";
import { verifyAuth } from "@/lib/auth";

export async function GET() {
  await connectDB();

  const result = await verifyAuth();
  if (!result.user) {
    return NextResponse.json({ error: "Not authorized" });
  }

  const users = await User.find({});
  return NextResponse.json({ users });
}
