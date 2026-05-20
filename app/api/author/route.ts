import { NextResponse } from "next/server";
import { getAuthors } from "./author.api";

export async function GET() {
  try {
    const data = await getAuthors();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Author fetch failed",
      },
      { status: 500 }
    );
  }
}