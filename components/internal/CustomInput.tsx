import { cn } from "@/lib/utils";

interface CustomInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export function CustomInput({ className, ...props }: CustomInputProps) {
  return (
    <div {...props} className={cn("", className)}>
      <input className="" />
    </div>
  );
}
