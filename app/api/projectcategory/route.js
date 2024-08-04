import { NextResponse } from "next/server";
import { getAllCategories, getParentCategories } from "@/utilities/dataService";
export async function GET() {
  const data = await getAllCategories();
  return NextResponse.json({ data });
}
