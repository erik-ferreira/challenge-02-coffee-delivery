import React, { InputHTMLAttributes } from "react";

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
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ isOptional, variantWidth = "normal", error, ...rest }, ref) => {
    {
      return (
        <div
          className={`${widthsInput[variantWidth]} max-[1170px]:flex-1 max-[500px]:w-full`}
        >
          <div
            className={`h-11 bg-gray-150 flex items-center rounded border border-solid ${
              error ? "border-red-500" : "border-gray-200"
            }`}
          >
            <input
              className="w-full h-full rounded bg-transparent placeholder-brow-400 text-brow-500 text-sm font-sans leading-[1.3] outline-none px-3 focus:border-yellow-600"
              ref={ref}
              {...rest}
            />
            {isOptional && (
              <span className="mr-3 text-brow-500 italic text-xs">
                Opcional
              </span>
            )}
          </div>

          {!!error && (
            <span className="font-sans text-red-500 text-sm">{error}</span>
          )}
        </div>
      );
    }
  }
);
