import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean;
}

export function Input({ isOptional, ...rest }: InputProps) {
  return (
    <div className={`w-52 h-12 ${isOptional ? "flex-1 relative" : ""}`}>
      <input
        className="w-full h-full p-3 border border-solid border-gray-200 rounded bg-gray-150 outline-none focus:border-yellow-600 font-sans text-sm leading-[1.3] text-brow-500"
        {...rest}
      />
      {isOptional && (
        <span className="absolute top-[16px] right-[12px] text-brow-400 text-xs leading-[1.3] italic">
          Opcional
        </span>
      )}
    </div>
  );
}
