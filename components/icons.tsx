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

export function TFLogo({ className }: Props) {
  return (
    <svg
      className={cn("", className)}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.65558 18L5.58433 16.2169V5.70234L0.957764 8.37563L0.969014 4.39312L8.65558 0V18ZM9.34604 0V18L12.4173 16.2169V11.153L14.7362 12.4931L14.7221 9.02953L12.4173 7.71328V5.70234L17.0425 8.37563L17.0312 4.39312L9.34604 0Z"
        fill="#FF6F00"
      />
    </svg>
  );
}
