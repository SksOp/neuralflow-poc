"use client";

import { cn } from "@/lib/utils";
import { Button } from "./button";

export function Warning({
  isClosed,
  setIsClosed,
}: {
  isClosed: boolean;
  setIsClosed: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className={cn(
        "absolute left-0 top-0 z-[1000] flex h-screen w-screen flex-col items-center justify-center gap-5 p-5 text-center backdrop-blur-md md:hidden",
        isClosed ? "hidden md:hidden" : "",
      )}
    >
      <h2>This website is not yet mobile friendly</h2>
      <Button
        variant={"outline"}
        onClick={() => {
          setIsClosed(true);
        }}
        className="w-3/4"
      >
        Close
      </Button>
    </div>
  );
}
