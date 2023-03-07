import { MapPin, ShoppingCart } from "phosphor-react";

import logoPng from "../assets/logo.png";

export function Header() {
  return (
    <header className="h-28 flex items-center justify-between px-40">
      <img src={logoPng} className="h-10" />

      <div className="flex items-center justify-between gap-3">
        <div className="h-9 flex items-center justify-between gap-1 bg-violet-200 p-2 rounded-md">
          <MapPin size={24} color="#8047F8" weight="fill" />

          <span className="text-violet-900 text-sm leading-[1.3]">
            Porto Alegre, RS
          </span>
        </div>

        <div className="w-9 h-9 rounded-md bg-yellow-100 flex items-center justify-center">
          <ShoppingCart size={24} color="#C47F17" weight="fill" />
        </div>
      </div>
    </header>
  );
}
