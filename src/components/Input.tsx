import { InputHTMLAttributes } from "react";

const widthsInput = {
  normal: "w-52",
  min: "w-16",
  max: "w-full",
  flex: "flex-1",
};

type WidthsInputType = keyof typeof widthsInput;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean;
  variantWidth?: WidthsInputType;
}

export function Input({
  isOptional,
  variantWidth = "normal",

  ...rest
}: InputProps) {
  return (
    <div
      className={`${widthsInput[variantWidth]} h-11 bg-gray-150 flex items-center rounded border border-solid border-gray-200`}
    >
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
