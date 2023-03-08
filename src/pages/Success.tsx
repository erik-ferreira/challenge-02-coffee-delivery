import { CurrencyDollar, Timer, MapPin } from "phosphor-react";

import deliverSVG from "../assets/deliver.svg";

export function Success() {
  return (
    <div className="max-w-[1120px] w-[90%] mx-auto">
      <h1 className="font-cursive font-extrabold text-[2rem] text-yellow-600">
        Uhu! Pedido confirmado
      </h1>

      <p className="mt-1 mb-10 font-sans text-xl text-brow-600">
        Agora é só aguardar que logo o café chegará até você
      </p>

      <div className="flex justify-between">
        <div
          className="w-[32rem] p-[1px] flex items-center justify-center 
        rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px] 
        bg-gradient-to-t from-yellow-500 to-violet-600"
        >
          <ul
            className="w-full h-full font-sans text-base leading-[1.3] text-brow-500 
            flex flex-col gap-8 p-10 bg-gray-50
            rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px]"
          >
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center">
                <MapPin size={20} weight="fill" className="fill-white" />
              </div>

              <div>
                Entrega em{" "}
                <strong className="font-bold">
                  Rua João Daniel Martinelli, 102
                </strong>
                <br />
                Farrapos - Porto Alegre,RS
              </div>
            </li>

            <li className="flex items-center gap-3">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <Timer size={20} weight="fill" className="fill-white" />
              </div>

              <div>
                Previsão de entrega
                <br />
                <strong className="font-bold">20 min - 30 min</strong>
              </div>
            </li>

            <li className="flex items-center gap-3">
              <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center">
                <CurrencyDollar
                  size={20}
                  weight="fill"
                  className="fill-white"
                />
              </div>

              <div>
                Pagamento na entrega
                <br />
                <strong className="font-bold">Cartão de Crédito</strong>
              </div>
            </li>
          </ul>
        </div>

        <img src={deliverSVG} className="w-[30.75rem] h-[18.3rem]" />
      </div>
    </div>
  );
}
