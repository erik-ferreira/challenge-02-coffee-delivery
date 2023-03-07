import { MapPin, ShoppingCart } from "phosphor-react";

import logoPng from "../assets/logo.png";

export function Header() {
  const totalItemsCart = 0;

  return (
    <header className="py-8">
      <div className=" max-w-[1120px] w-[90%] mx-auto flex items-center justify-between">
        <img src={logoPng} />

        <div className="flex items-center gap-3">
          <div className="flex items-center justify-between gap-1 bg-violet-200 p-2 rounded-md">
            <MapPin size={24} weight="fill" className="fill-violet-600" />
            <span className="font-sans text-sm leading-[1.3] text-violet-900">
              Porto Alegre, RS
            </span>
          </div>

          <div className="relative">
            <button className="p-2 rounded-md bg-yellow-100 flex items-center justify-center">
              <ShoppingCart
                size={24}
                weight="fill"
                className="fill-yellow-600"
              />
            </button>

            {totalItemsCart > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-yellow-600 rounded-full flex items-center justify-center text-white font-sans font-bold text-xs">
                {totalItemsCart}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
