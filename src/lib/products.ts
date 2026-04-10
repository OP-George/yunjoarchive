import fs from "fs";
import path from "path";

export type ShopCategory = "Object" | "Tableware" | "Pot";

export type ShopItem = {
  id: number;
  title: string;
  category: ShopCategory;
  imageSrc: string;   // URL-encoded path for next/image
  storeUrl: string;
  description?: string;
  /** true = 메인 페이지 대표 노출 대상 (CSV A열 O) */
  featured: boolean;
};

const VALID_CATEGORIES: ShopCategory[] = ["Object", "Tableware", "Pot"];

function toCategory(raw: string): ShopCategory {
  const v = raw.trim();
  if ((VALID_CATEGORIES as string[]).includes(v)) return v as ShopCategory;
  return "Object";
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
    // 최대 7개 컬럼으로만 split (설명 필드에 쉼표가 있어도 안전하게)
    const parts = line.split(",");
    if (parts.length < 6) continue;

    const [displayRaw, numRaw, categoryRaw, titleRaw, imageRaw, linkRaw, ...descParts] =
      parts;

    const display = displayRaw.trim();
    // work 페이지에서는 모든 제품 노출 (featured는 메인 페이지 대표 노출용)

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

    const link = linkRaw.trim();
    const isValidUrl = link.startsWith("http");

    items.push({
      id: Number(numRaw.trim()),
      title: titleRaw.trim(),
      category: toCategory(categoryRaw),
      imageSrc: `/products/images/${encodedFilename}`,
      storeUrl: isValidUrl ? link : "https://smartstore.naver.com/yunjoarchive",
      description: descParts.join(",").trim() || undefined,
      featured: display === "O",
    });
  }

  return items;
}
