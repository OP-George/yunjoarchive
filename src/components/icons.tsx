export function InstagramIcon({
  className,
  title = "Instagram",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
    >
      <path
        d="M16.5 2.75h-9A4.75 4.75 0 0 0 2.75 7.5v9A4.75 4.75 0 0 0 7.5 21.25h9a4.75 4.75 0 0 0 4.75-4.75v-9A4.75 4.75 0 0 0 16.5 2.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 16.1a4.1 4.1 0 1 0 0-8.2 4.1 4.1 0 0 0 0 8.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M17.35 6.9h.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

