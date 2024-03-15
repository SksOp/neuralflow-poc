import { cn } from "@/lib/utils";
import { NFLogo } from "../icons";
import { Button } from "./button";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export function Navbar({ className, ...props }: Props) {
  return (
    <div
      {...props}
      className={cn(
        "flex w-full fixed top-0 py-5 px-8 justify-between z-50",
        className,
      )}
    >
      <div className="flex gap-3 items-center">
        <NFLogo />
        <p className="text-sm py-0.5 px-2 font-medium bg-[#EA580C]/20 rounded-md">
          v0.1.1 Beta
        </p>
      </div>
      <div>
        <Button className="border-black" variant={"outline"}>
          Feedback
        </Button>
      </div>
    </div>
  );
}
