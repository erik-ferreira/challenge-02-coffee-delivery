import { Trash } from "phosphor-react";

import { QuantityCoffee } from "./QuantityCoffee";

import americanPNG from "../assets/coffees/americano.png";

export function CoffeeCardOnCart() {
  return (
    <div className="flex gap-5">
      <img src={americanPNG} className="w-16 h-16" />

      <div className="flex gap-2 flex-col">
        <span className="font-sans text-base text-brow-600">
          Expresso Tradicional
        </span>

        <div className="flex gap-2">
          <QuantityCoffee />

          <button className="bg-gray-200 rounded-md p-2 flex items-center gap-1 font-sans text-xs uppercase text-brow-500">
            <Trash size={14} className="text-violet-600" />
            Remover
          </button>
        </div>
      </div>

      <span className="font-sans text-base font-bold text-brow-500">
        R$ 9,90
      </span>
    </div>
  );
}
