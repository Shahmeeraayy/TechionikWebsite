import { NextResponse } from "next/server";
import { getBlogCategories } from "./blogCategory.api";

export async function GET() {
  try {
    const data = await getBlogCategories();
    return NextResponse.json(data);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Blog Category fetch failed" },
      { status: 500 }
    );
  }
}