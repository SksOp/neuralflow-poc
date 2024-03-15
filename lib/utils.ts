import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function downloadStringAsFile(content: string, filename: string) {
  // Create a blob from the content
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });

  // Create a link element
  const link = document.createElement("a");

  // Set the href to the URL created from the blob
  link.href = URL.createObjectURL(blob);

  // Set the download attribute with the filename
  link.download = filename.endsWith(".py") ? filename : filename + ".py";

  // Append the link to the body (required for Firefox)
  document.body.appendChild(link);

  // Trigger the download by simulating a click
  link.click();

  // Clean up the URL and remove the link
  URL.revokeObjectURL(link.href);
  document.body.removeChild(link);
}
