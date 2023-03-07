import { ShoppingCart, Package, Coffee, Timer } from "phosphor-react";

import { CoffeeCard } from "../components/CoffeeCard";

import coffeeBackground from "../assets/coffee.png";

export function Home() {
  const listCoffees = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <div className="pb-40">
      <div className="bg-img-opacity">
        <div className="max-w-[1120px] w-[90%] mx-auto py-20 flex items-center gap-14">
          <div>
            <h1 className="font-cursive font-extrabold text-5xl leading-[1.3] text-brow-900">
              Encontre o café perfeito para qualquer hora do dia
            </h1>

            <p className="font-sans text-xl leading-[1.3] text-brow-600 mt-4">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>

            <ul className="font-sans text-base leading-[1.3] text-brow-500 grid grid-cols-2 gap-5 mt-16">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center">
                  <ShoppingCart
                    size={20}
                    weight="fill"
                    className="fill-white"
                  />
                </div>
                Compra simples e segura
              </li>

              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-brow-500 rounded-full flex items-center justify-center">
                  <Package size={20} weight="fill" className="fill-white" />
                </div>
                Embalagem mantém o café intacto
              </li>

              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  <Timer size={20} weight="fill" className="fill-white" />
                </div>
                Entrega rápida e rastreada
              </li>

              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center">
                  <Coffee size={20} weight="fill" className="fill-white" />
                </div>
                O café chega fresquinho até você
              </li>
            </ul>
          </div>

          <img
            src={coffeeBackground}
            className="w-[476px] h-[360px]"
            alt="Copo com o nome Coffee Delivery e alguns dos ingredientes como próprio grão de café e um coador."
          />
        </div>
      </div>

      <div className="max-w-[1120px] w-[90%] mx-auto">
        <div className="flex items-center justify-between mb-14">
          <h2 className="font-cursive font-extrabold text-[2rem] leading-[1.3] text-brow-600">
            Nossos cafés
          </h2>

          <div className="flex items-center gap-2">
            <span className="uppercase bg-yellow-100 rounded-full font-sans font-bold text-[10px] leading-[1.3] text-yellow-600 px-2 py-1">
              Tradicional
            </span>
            <span className="uppercase bg-yellow-100 rounded-full font-sans font-bold text-[10px] leading-[1.3] text-yellow-600 px-2 py-1">
              Especial
            </span>
            <span className="uppercase bg-yellow-100 rounded-full font-sans font-bold text-[10px] leading-[1.3] text-yellow-600 px-2 py-1">
              Com Leite
            </span>
            <span className="uppercase bg-yellow-100 rounded-full font-sans font-bold text-[10px] leading-[1.3] text-yellow-600 px-2 py-1">
              Alcoólico
            </span>
            <span className="uppercase bg-yellow-100 rounded-full font-sans font-bold text-[10px] leading-[1.3] text-yellow-600 px-2 py-1">
              Gelado
            </span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-10">
          {listCoffees.map((coffee) => (
            <CoffeeCard key={coffee} />
          ))}
        </div>
      </div>
    </div>
  );
}
