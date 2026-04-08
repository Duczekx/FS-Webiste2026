import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  href,
  label,
  variant = "primary",
}: ButtonLinkProps) {
  return (
    <Link href={href} className={`button-link button-link--${variant}`}>
      {label}
    </Link>
  );
}
