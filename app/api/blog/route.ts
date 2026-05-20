import { NextResponse } from "next/server";
import { getMainBlogData } from "./blog.api";

export async function GET() {
  try {
    const data = await getMainBlogData();
    return NextResponse.json(data);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Blog Data fetch failed",
      },
      { status: 500 }
    );
  }
}