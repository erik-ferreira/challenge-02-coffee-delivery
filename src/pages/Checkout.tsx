import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Money,
  Bank,
  Minus,
  Plus,
  Trash,
} from "phosphor-react";

import { Input } from "../components/Input";
import { Button } from "../components/Button";

import americanPNG from "../assets/coffees/americano.png";

export function Checkout() {
  return (
    <>
      <h2 className="font-cursive font-bold text-lg text-brow-600">
        Complete seu pedido
      </h2>

      <div className="bg-gray-100 rounded-md p-10 w-[640px]">
        <div className="flex gap-2">
          <MapPinLine size={24} className="text-yellow-600 " />
          <span className="font-sans text-base text-brow-600">
            Endereço de entrega
          </span>
        </div>

        <p className="font-sans text-sm text-brow-500 ml-8">
          Informe o endereço onde deseja receber seu pedido
        </p>

        <Input placeholder="CEP" />
        <Input placeholder="Rua" />
        <Input placeholder="Número" />
        <Input placeholder="Complemento" isOptional />
        <Input placeholder="Bairro" />
        <Input placeholder="Cidade" />
        <Input placeholder="UF" />
      </div>

      <div className="bg-gray-100 rounded-md p-10 w-[640px] mt-3">
        <div className="flex gap-2">
          <CurrencyDollar size={24} className="text-violet-600 " />
          <span className="font-sans text-base text-brow-600">Pagamento</span>
        </div>

        <p className="font-sans text-sm text-brow-500 ml-8">
          O pagamento é feito na entrega. Escolha a forma que deseja pagar
        </p>

        <div className="flex gap-3 mt-8">
          <button className="bg-gray-200 rounded-md p-4 flex gap-3 items-center text-brow-500 font-sans text-xs uppercase">
            <CreditCard size={16} className="text-violet-600 " />
            CARTÃO DE CRÉDITO
          </button>

          <button className="bg-gray-200 rounded-md p-4 flex gap-3 items-center text-brow-500 font-sans text-xs uppercase">
            <Money size={16} className="text-violet-600 " />
            CARTÃO DE DÉBITO
          </button>

          <button className="bg-gray-200 rounded-md p-4 flex gap-3 items-center text-brow-500 font-sans text-xs uppercase">
            <Bank size={16} className="text-violet-600 " />
            DINHEIRO
          </button>
        </div>
      </div>

      <div className="bg-gray-100 p-10 w-[448px] mt-3 rounded-tl-md rounded-tr-[44px] rounded-br-md rounded-bl-[44px] flex justify-center flex-col gap-6">
        <div className="flex gap-5">
          <img src={americanPNG} className="w-16 h-16" />

          <div className="flex gap-2 flex-col">
            <span className="font-sans text-base text-brow-600">
              Expresso Tradicional
            </span>

            <div className="flex gap-2">
              <div className="w-20 h-10 rounded-md bg-gray-200 flex items-center justify-center gap-2 ">
                <button>
                  <Minus size={14} className="text-violet-600" />
                </button>

                <span className="font-sans text-base leading-[1.3] text-brow-900">
                  1
                </span>

                <button>
                  <Plus size={14} className="text-violet-600" />
                </button>
              </div>

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

        <div className="h-[1px] w-full bg-gray-200" />

        <div className="flex gap-5">
          <img src={americanPNG} className="w-16 h-16" />

          <div className="flex gap-2 flex-col">
            <span className="font-sans text-base text-brow-600">
              Expresso Tradicional
            </span>

            <div className="flex gap-2">
              <div className="w-20 h-10 rounded-md bg-gray-200 flex items-center justify-center gap-2 ">
                <button>
                  <Minus size={14} className="text-violet-600" />
                </button>

                <span className="font-sans text-base leading-[1.3] text-brow-900">
                  1
                </span>

                <button>
                  <Plus size={14} className="text-violet-600" />
                </button>
              </div>

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

        <div className="h-[1px] w-full bg-gray-200" />

        <div className="flex flex-col gap-3">
          <span className="font-sans text-sm text-brow-500 flex items-center justify-between">
            Total de itens
            <span>R$ 29,70</span>
          </span>

          <span className="font-sans text-sm text-brow-500 flex items-center justify-between">
            Entrega
            <span>R$ 3,50</span>
          </span>

          <span className="font-sans font-bold text-xl text-brow-500 flex items-center justify-between">
            Total
            <span>R$ 33,20</span>
          </span>
        </div>

        <Button label="Confirmar Pedido" />
      </div>
    </>
  );
}
