import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const pathsToTry = [
      path.join(process.cwd(), "src", "data", "subscribers.json"),
      path.join("/tmp", "subscribers.json"),
    ];

    for (const targetPath of pathsToTry) {
      if (fs.existsSync(targetPath)) {
        try {
          const fileContent = fs.readFileSync(targetPath, "utf-8");
          const subscribers = JSON.parse(fileContent);
          return NextResponse.json({
            subscribers,
            count: subscribers.length,
          });
        } catch {
          continue;
        }
      }
    }

    return NextResponse.json({ subscribers: [], count: 0 });
  } catch (error) {
    console.error("Subscribers fetch error:", error);
    return NextResponse.json({ error: "Failed to read subscribers" }, { status: 500 });
  }
}
