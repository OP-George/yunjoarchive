import fs from "fs";
import path from "path";

export type NewsItem = {
  date: string;
  title: string;
  href?: string;
};

export function getNews(): NewsItem[] {
  const csvPath = path.join(process.cwd(), "public", "news", "news..csv");
  try {
    let raw = fs.readFileSync(csvPath, "utf-8");
    raw = raw.replace(/^\uFEFF/, ""); // BOM 제거
    const lines = raw.split(/\r?\n/).filter(Boolean);
    return lines
      .slice(1) // 헤더 스킵
      .map((line) => {
        const cols = line.split(",");
        const date = cols[0]?.trim() ?? "";
        const title = cols[1]?.trim() ?? "";
        const href = cols[2]?.trim() || undefined;
        return { date, title, href };
      })
      .filter((item) => item.date && item.title);
  } catch {
    return [];
  }
}
