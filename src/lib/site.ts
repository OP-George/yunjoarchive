export type SocialLink = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  accent?: boolean;
};

export type NewsItem = {
  date: string;
  title: string;
  href?: string;
};


export const site = {
  /** 최상단 왼쪽 로고/제목 */
  name: "yunjoarchive",
  role: "Creator",
  location: "Daejeon, KR",
  email: "you@example.com",
  instagram: "https://instagram.com/yunjoarchive",
  intro:
    "좋아하는 것들에 둘러싸인 삶과 그 경험의 중요성을 믿습니다.",
  heroTagline:
    "좋아하는 것들에 둘러싸인 삶과 그 경험의 중요성을 믿습니다.",
  /** 히어로 이미지: `public/hero.jpg`로 바꾸거나 URL 유지 */
  heroImageSrc: "/hero.jpg",
  heroImageAlt: "Warm breakfast table with coffee and natural light",
  nav: [
    { label: "about",   href: "/#about" },
    { label: "work",    href: "/work" },
    { label: "news",    href: "/news" },
    { label: "contact", href: "/contact", accent: true },
  ] satisfies NavItem[],
  news: [
    {
      date: "2024.08.18",
      title: "walnut design labo. 1期生募集",
      href: "#",
    },
    {
      date: "2024.03.23",
      title: "2024年度のご依頼受付について",
      href: "#",
    },
  ] satisfies NewsItem[],
  socials: [
    { label: "Instagram", href: "https://instagram.com/yunjoarchive" },
  ] satisfies SocialLink[],
};
