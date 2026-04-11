import fs from "fs";
import path from "path";

export type ShopCategory = "Object" | "Tableware" | "Pot";

export type ShopItem = {
  id: number;
  title: string;
  category: ShopCategory;
  imageSrc: string;   // URL-encoded path for next/image
  detailSlug: string; // CSV F열: detail 폴더 이름
  description?: string;
  /** true = 메인 페이지 대표 노출 대상 (CSV A열 O) */
  featured: boolean;
};

const VALID_CATEGORIES: ShopCategory[] = ["Object", "Tableware", "Pot"];

function toCategory(raw: string): ShopCategory {
  const v = raw.trim().toLowerCase();
  const match = VALID_CATEGORIES.find((c) => c.toLowerCase() === v);
  return match ?? "Object";
}

export function getProducts(): ShopItem[] {
  const csvPath = path.join(
    process.cwd(),
    "public",
    "products",
    "products.csv"
  );

  const raw = fs
    .readFileSync(csvPath, "utf8")
    .replace(/^\uFEFF/, ""); // strip BOM if present

  const lines = raw.split(/\r?\n/).filter(Boolean);
  // 첫 줄은 헤더이므로 제거
  const dataLines = lines.slice(1);

  const items: ShopItem[] = [];

  for (const line of dataLines) {
    const parts = line.split(",");
    if (parts.length < 6) continue;

    const [displayRaw, numRaw, categoryRaw, titleRaw, imageRaw, detailRaw, ...descParts] =
      parts;

    const filename = imageRaw.trim();
    // 한글·공백 파일명을 URL-safe하게 인코딩
    const encodedFilename = filename
      .split(".")
      .map((part, idx, arr) =>
        idx === arr.length - 1
          ? part.toLowerCase() // 확장자 소문자 통일
          : encodeURIComponent(part)
      )
      .join(".");

    items.push({
      id: Number(numRaw.trim()),
      title: titleRaw.trim(),
      category: toCategory(categoryRaw),
      imageSrc: `/products/images/${encodedFilename}`,
      detailSlug: detailRaw.trim(),
      description: descParts.join(",").trim() || undefined,
      featured: displayRaw.trim() === "O",
    });
  }

  return items;
}

/** detail 폴더 내 이미지 목록을 숫자 순서로 반환 */
export function getDetailImages(slug: string): string[] {
  const dirPath = path.join(
    process.cwd(),
    "public",
    "products",
    "images",
    "detail",
    slug
  );

  if (!fs.existsSync(dirPath)) return [];

  try {
    const files = fs
      .readdirSync(dirPath)
      .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
      .sort((a, b) => {
        const numA = parseInt(a, 10);
        const numB = parseInt(b, 10);
        if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
        return a.localeCompare(b);
      });

    return files.map(
      (f) =>
        `/products/images/detail/${encodeURIComponent(slug)}/${encodeURIComponent(f)}`
    );
  } catch {
    return [];
  }
}
