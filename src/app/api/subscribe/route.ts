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

    const subscriberRecord = {
      email,
      subscribedAt: new Date().toISOString(),
      source: "brieflyq-web-syndicate",
    };

    console.log(`[BRIEFLYQ_SYNDICATE_SUBSCRIBER] Registered: ${email}`);

    // Try primary workspace storage
    let saved = false;
    const pathsToTry = [
      path.join(process.cwd(), "src", "data", "subscribers.json"),
      path.join("/tmp", "subscribers.json"),
    ];

    for (const targetPath of pathsToTry) {
      try {
        const dir = path.dirname(targetPath);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }

        let current: Array<{ email: string; subscribedAt: string; source: string }> = [];
        if (fs.existsSync(targetPath)) {
          try {
            current = JSON.parse(fs.readFileSync(targetPath, "utf-8"));
          } catch {
            current = [];
          }
        }

        if (!current.some((s) => s.email === email)) {
          current.push(subscriberRecord);
          fs.writeFileSync(targetPath, JSON.stringify(current, null, 2), "utf-8");
        }
        saved = true;
        break;
      } catch (err) {
        // Fallback to next path (e.g. /tmp in read-only serverless lambdas)
        continue;
      }
    }

    // Optional webhook forwarding if user sets WEBHOOK_URL
    const webhookUrl = process.env.SUBSCRIBER_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(subscriberRecord),
        });
      } catch (e) {
        console.error("Webhook forwarding error:", e);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Subscription confirmed. You will receive the 6:30 AM Chancery & Wall Street Memorandum.",
      email,
      status: "active",
    });
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { error: "Internal server error while processing subscription." },
      { status: 500 }
    );
  }
}
