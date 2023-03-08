import { ShoppingCart } from "phosphor-react";

import { Tag } from "./Tag";
import { QuantityCoffee } from "./QuantityCoffee";

import coffeeAmerican from "../assets/coffees/american.png";

export function CoffeeCard() {
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
          Expresso tradicional
        </h3>

        <p className="font-sans text-sm leading-[1.3] text-brow-400 text-center">
          O tradicional café feito com água quente e grãos moídos
        </p>
      </main>

      <footer className="flex items-center mt-auto">
        <span className="text-brow-500 font-sans text-sm leading-[1.3] mr-6">
          R$
          <span className="font-cursive font-extrabold text-2xl ml-1">
            9,90
          </span>
        </span>

        <QuantityCoffee className="mr-2" />

        <button
          className="p-2 rounded-md bg-violet-900 
          hover:bg-violet-600 transition-colors
          flex items-center justify-center"
        >
          <ShoppingCart size={24} weight="fill" className="fill-white" />
        </button>
      </footer>
    </div>
  );
}
