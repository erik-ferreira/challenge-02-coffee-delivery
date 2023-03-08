import { HTMLAttributes } from "react";

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  label: string;
  variant?: "solid" | "outline";
}

export function Tag({ label, variant = "solid", ...rest }: TagProps) {
  return (
    <span
      className={`
      ${variant === "solid" ? "bg-yellow-100" : "border border-yellow-500"}
      rounded-full uppercase font-sans font-bold text-xs text-yellow-600 py-[0.375rem] px-3 `}
      {...rest}
    >
      {label}
    </span>
  );
}
