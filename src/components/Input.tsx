import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean;
}

export function Input({ isOptional, ...rest }: InputProps) {
  return (
    <div className="w-52 h-11 bg-gray-150 flex items-center rounded border border-solid border-gray-200">
      <input
        className="w-full h-full rounded bg-transparent placeholder-brow-400 text-brow-500 text-sm font-sans leading-[1.3] outline-none px-3 focus:border-yellow-600"
        {...rest}
      />
      {isOptional && (
        <span className="mr-3 text-brow-500 italic text-xs">Opcional</span>
      )}
    </div>
  );
}
