import { HTMLAttributes } from "react";
import { Minus, Plus } from "phosphor-react";

interface QuantityCoffeeProps extends HTMLAttributes<HTMLDivElement> {
  quantity?: number;
  onDecreaseQuantity?: () => void;
  onIncreaseQuantity?: () => void;
}

export function QuantityCoffee({
  className,
  quantity = 1,
  onDecreaseQuantity,
  onIncreaseQuantity,
  ...rest
}: QuantityCoffeeProps) {
  const disabledDecreaseQuantity = quantity === 1;

  return (
    <div
      className={`w-20 h-10 rounded-md bg-gray-200 flex items-center justify-center gap-2 ${className}`}
      {...rest}
    >
      <button
        type="button"
        className="text-violet-600 enabled:hover:text-violet-900"
        disabled={disabledDecreaseQuantity}
        onClick={onDecreaseQuantity}
      >
        <Minus size={14} />
      </button>

      <span className="font-sans text-base leading-[1.3] text-brow-900">
        {quantity}
      </span>

      <button
        type="button"
        className="text-violet-600 enabled:hover:text-violet-900"
        onClick={onIncreaseQuantity}
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
