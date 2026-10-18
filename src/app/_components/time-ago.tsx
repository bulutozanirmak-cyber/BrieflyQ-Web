"use client";

import { useEffect, useState } from "react";

type Props = {
  date: string;
  format?: "short" | "long";
  className?: string;
};

export default function TimeAgo({ date, format = "short", className }: Props) {
  const [displayText, setDisplayText] = useState<string>(() => computeTimeAgo(date, format));

  useEffect(() => {
    setDisplayText(computeTimeAgo(date, format));
    const interval = setInterval(() => {
      setDisplayText(computeTimeAgo(date, format));
    }, 60000); // refresh every minute

    return () => clearInterval(interval);
  }, [date, format]);

  return (
    <time dateTime={date} className={className} suppressHydrationWarning>
      {displayText}
    </time>
  );
}

function computeTimeAgo(dateStr: string, mode: "short" | "long"): string {
  if (!dateStr) return "";

  const parsed = new Date(dateStr);
  if (isNaN(parsed.getTime())) {
    // If it's already a relative string (fallback), return as is
    return dateStr;
  }

  const now = new Date();
  const diffInSeconds = Math.max(0, Math.floor((now.getTime() - parsed.getTime()) / 1000));

  if (diffInSeconds < 60) {
    return mode === "short" ? "Just now" : "Just now";
  }

  const minutes = Math.floor(diffInSeconds / 60);
  if (minutes < 60) {
    return mode === "short" ? `${minutes}m ago` : `${minutes} mins ago`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return mode === "short" ? `${hours}h ago` : `${hours} hours ago`;
  }

  const days = Math.floor(hours / 24);
  if (days === 1) {
    return "Yesterday";
  }
  if (days < 7) {
    return `${days}d ago`;
  }

  // Format as readable date e.g. Oct 18, 2026
  return parsed.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: parsed.getFullYear() !== now.getFullYear() ? "numeric" : undefined,
  });
}
