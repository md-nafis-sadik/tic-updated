import { NextResponse } from "next/server";
import { verifyAuth } from "@/lib/auth";

export async function GET() {
  const result = await verifyAuth();
  if (!result.user) {
    return NextResponse.json({ error: "Not authorized" });
  }

  const users = await User.find({});
  return NextResponse.json({ users });
}
