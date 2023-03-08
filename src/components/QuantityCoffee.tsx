import { Minus, Plus } from "phosphor-react";

export function QuantityCoffee() {
  return (
    <div className="w-20 h-10 rounded-md bg-gray-200 flex items-center justify-center gap-2 ">
      <button className="text-violet-600 enabled:hover:text-violet-900">
        <Minus size={14} />
      </button>

      <span className="font-sans text-base leading-[1.3] text-brow-900">1</span>

      <button className="text-violet-600 enabled:hover:text-violet-900">
        <Plus size={14} />
      </button>
    </div>
  );
}
