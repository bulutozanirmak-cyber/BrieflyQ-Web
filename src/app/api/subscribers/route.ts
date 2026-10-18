import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "subscribers.json");

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ subscribers: [], count: 0 });
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const subscribers = JSON.parse(fileContent);

    return NextResponse.json({
      subscribers,
      count: subscribers.length,
    });
  } catch (error) {
    console.error("Subscribers fetch error:", error);
    return NextResponse.json({ error: "Failed to read subscribers" }, { status: 500 });
  }
}
