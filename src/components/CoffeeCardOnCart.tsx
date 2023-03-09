import { Trash } from "phosphor-react";

import { QuantityCoffee } from "./QuantityCoffee";

import { formatPrice } from "../utils/format";
import americanPNG from "../assets/coffees/american.png";
import { useCart } from "../contexts/CartContext";

interface CoffeeProps {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

interface CoffeeCardOnCartProps {
  coffee: CoffeeProps;
}

export function CoffeeCardOnCart({ coffee }: CoffeeCardOnCartProps) {
  const { increaseQuantityCoffee, decreaseQuantityCoffee } = useCart();

  function handleDecreaseQuantity() {
    decreaseQuantityCoffee(coffee.id);
  }

  function handleIncreaseQuantity() {
    increaseQuantityCoffee(coffee.id);
  }

  return (
    <>
      <div className="flex gap-5">
        <img src={americanPNG} className="w-16 h-16" />

        <div className="flex gap-2 flex-col">
          <span className="font-sans text-base text-brow-600">
            {coffee.name}
          </span>

          <div className="flex gap-2">
            <QuantityCoffee
              quantity={coffee.quantity}
              onDecreaseQuantity={handleDecreaseQuantity}
              onIncreaseQuantity={handleIncreaseQuantity}
            />

            <button className="bg-gray-200 rounded-md p-2 flex items-center gap-1 font-sans text-xs uppercase text-brow-500">
              <Trash size={14} className="text-violet-600" />
              Remover
            </button>
          </div>
        </div>

        <span className="font-sans text-base font-bold text-brow-500">
          R$ {formatPrice(coffee.price)}
        </span>
      </div>

      <div className="h-[1px] w-full bg-gray-200" />
    </>
  );
}
