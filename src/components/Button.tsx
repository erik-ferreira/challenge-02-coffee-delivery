import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function Button({ label, className, ...rest }: ButtonProps) {
  return (
    <button
      className={`w-[368px] h-12 bg-yellow-500 flex items-center justify-center rounded-md text-white uppercase text-sm leading-[1.6] font-sans font-bold transition enabled:hover:bg-yellow-600 disabled:cursor-not-allowed ${className}`}
      {...rest}
    >
      {label}
    </button>
  );
}
