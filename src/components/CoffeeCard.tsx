import { useState } from "react";
import { ShoppingCart } from "phosphor-react";

import { Tag } from "./Tag";
import { QuantityCoffee } from "./QuantityCoffee";

import { useCart } from "../contexts/CartContext";

import { formatPrice } from "../utils/format";
import coffeeAmerican from "../assets/coffees/american.png";

export interface CoffeeProps {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface CoffeeCardProps {
  coffee: CoffeeProps;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { addCoffeeInCart } = useCart();

  const [quantityCoffee, setQuantityCoffee] = useState(1);

  function handleDecreaseQuantity() {
    if (quantityCoffee > 1) {
      setQuantityCoffee((prevQuantity) => prevQuantity - 1);
    }
  }

  function handleIncreaseQuantity() {
    setQuantityCoffee((prevQuantity) => prevQuantity + 1);
  }

  function handleAddCoffeeInCart() {
    addCoffeeInCart({ ...coffee, quantity: quantityCoffee });
  }

  return (
    <div className="w-64 h-[310px] bg-gray-100 rounded-tl-md rounded-tr-[2.25rem] rounded-br-md rounded-bl-[2.25rem] flex flex-col items-center pb-5 px-6">
      <header className="mb-4 flex flex-col items-center">
        <img
          src={coffeeAmerican}
          className="w-[7.5rem] h-[7.5rem] -mt-5 mb-3"
        />

        <Tag label="Tradicional" />
      </header>

      <main>
        <h3 className="font-cursive font-bold text-xl text-brow-600 leading-[1.3] text-center mb-2">
          {coffee.name}
        </h3>

        <p className="font-sans text-sm leading-[1.3] text-brow-400 text-center">
          {coffee.description}
        </p>
      </main>

      <footer className="flex items-center mt-auto">
        <span className="text-brow-500 font-sans text-sm leading-[1.3] mr-6">
          R$
          <span className="font-cursive font-extrabold text-2xl ml-1">
            {formatPrice(coffee.price)}
          </span>
        </span>

        <QuantityCoffee
          className="mr-2"
          quantity={quantityCoffee}
          onDecreaseQuantity={handleDecreaseQuantity}
          onIncreaseQuantity={handleIncreaseQuantity}
        />

        <button
          className="p-2 rounded-md bg-violet-900 
          hover:bg-violet-600 transition-colors
          flex items-center justify-center"
          onClick={handleAddCoffeeInCart}
        >
          <ShoppingCart size={24} weight="fill" className="fill-white" />
        </button>
      </footer>
    </div>
  );
}
