import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

interface Props {
  className?: ClassValue;
}

export function NFLogo({ className }: Props) {
  return (
    <svg
      className={cn("", className)}
      width="28"
      height="31"
      viewBox="0 0 28 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="22.75" y="4.375" width="1.75" height="22.75" fill="black" />
      <circle cx="23.625" cy="4.375" r="4.375" fill="black" />
      <circle cx="23.625" cy="26.25" r="4.375" fill="#EA580C" />
      <rect x="3.5" y="4.375" width="1.75" height="22.75" fill="black" />
      <circle cx="4.375" cy="26.25" r="4.375" fill="black" />
      <circle cx="4.375" cy="4.375" r="4.375" fill="#EA580C" />
    </svg>
  );
}
