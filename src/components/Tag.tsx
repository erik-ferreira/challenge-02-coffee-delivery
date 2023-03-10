import { HTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "solid" | "outline";
  asChild?: boolean;
  isSelected?: boolean;
}

export function Tag({
  variant = "solid",
  asChild,
  isSelected,
  ...rest
}: TagProps) {
  const Component = asChild ? Slot : "span";

  return (
    <Component
      className={`rounded-full uppercase font-sans font-bold text-xs py-[0.375rem] px-3 whitespace-nowrap
        ${
          variant === "outline"
            ? isSelected
              ? "border border-violet-900 text-violet-600 bg-violet-200"
              : "border border-yellow-500 text-yellow-600"
            : "bg-yellow-100 text-yellow-600"
        }
      `}
      {...rest}
    />
  );
}
