import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = body?.email?.trim()?.toLowerCase();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "A valid institutional email address is required." },
        { status: 400 }
      );
    }

    const dataDir = path.join(process.cwd(), "src", "data");
    const filePath = path.join(dataDir, "subscribers.json");

    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    let subscribers: Array<{ email: string; subscribedAt: string; source: string }> = [];
    if (fs.existsSync(filePath)) {
      try {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        subscribers = JSON.parse(fileContent);
      } catch {
        subscribers = [];
      }
    }

    // Check if already subscribed
    const existingIndex = subscribers.findIndex((s) => s.email === email);
    if (existingIndex === -1) {
      subscribers.push({
        email,
        subscribedAt: new Date().toISOString(),
        source: "brieflyq-web-syndicate",
      });
      fs.writeFileSync(filePath, JSON.stringify(subscribers, null, 2), "utf-8");
    }

    return NextResponse.json({
      success: true,
      message: "Subscription confirmed. You will receive the 6:30 AM Chancery & Wall Street Memorandum.",
      email,
      totalSubscribers: 42000 + subscribers.length,
    });
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { error: "Internal server error while processing subscription." },
      { status: 500 }
    );
  }
}
