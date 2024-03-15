import { cn } from "@/lib/utils";
import { Navbar } from "./ui/navbar";
import { Toaster } from "./ui/toaster";

export function LayoutMain({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <Navbar />
      <div className={cn("flex flex-col h-screen", className)}>
        {children}
        <Toaster />
      </div>
    </>
  );
}
