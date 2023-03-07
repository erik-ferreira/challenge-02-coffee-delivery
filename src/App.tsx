import "./styles/global.css";

import { ShoppingCart, Package, Coffee, Timer } from "phosphor-react";

import { Header } from "./components/Header";

import coffeeBackground from "./assets/coffee.png";

export function App() {
  return (
    <>
      <Header />

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
    </>
  );
}
