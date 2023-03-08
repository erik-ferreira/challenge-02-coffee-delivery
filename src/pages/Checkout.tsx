import { useState } from "react";
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Money,
  Bank,
} from "phosphor-react";

import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { TypePayment } from "../components/TypePayment";
import { SectionCheckout } from "../components/SectionCheckout";
import { CoffeeCardOnCart } from "../components/CoffeeCardOnCart";

type TypePaymentOptions = "credit" | "debit" | "money";

export function Checkout() {
  const [typePaymentSelected, setTypePaymentSelected] =
    useState<TypePaymentOptions>("credit");

  function handleChangeTypePayment(typePayment: TypePaymentOptions) {
    setTypePaymentSelected(typePayment);
  }

  return (
    <div className="flex gap-8 max-w-[1120px] w-[90%] mx-auto">
      <SectionCheckout title="Complete seu pedido">
        <div className="bg-gray-100 rounded-md p-10">
          <div className="flex gap-2">
            <MapPinLine size={24} className="text-yellow-600 " />
            <span className="font-sans text-base text-brow-600">
              Endereço de entrega
            </span>
          </div>

          <p className="font-sans text-sm text-brow-500 ml-8">
            Informe o endereço onde deseja receber seu pedido
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <Input placeholder="CEP" />

            <Input placeholder="Rua" variantWidth="max" />

            <div className="flex gap-3">
              <Input placeholder="Número" />
              <Input placeholder="Complemento" isOptional variantWidth="flex" />
            </div>

            <div className="flex gap-3">
              <Input placeholder="Bairro" />
              <Input placeholder="Cidade" />
              <Input placeholder="UF" variantWidth="min" />
            </div>
          </div>
        </div>

        <div className="bg-gray-100 rounded-md p-10 mt-3">
          <div className="flex gap-2">
            <CurrencyDollar size={24} className="text-violet-600 " />
            <span className="font-sans text-base text-brow-600">Pagamento</span>
          </div>

          <p className="font-sans text-sm text-brow-500 ml-8">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>

          <div className="flex gap-3 mt-8">
            <TypePayment
              label="CARTÃO DE CRÉDITO"
              icon={CreditCard}
              isTypePaymentSelected={typePaymentSelected === "credit"}
              onClick={() => handleChangeTypePayment("credit")}
            />
            <TypePayment
              label=" CARTÃO DE DÉBITO"
              icon={Money}
              isTypePaymentSelected={typePaymentSelected === "debit"}
              onClick={() => handleChangeTypePayment("debit")}
            />
            <TypePayment
              label="DINHEIRO"
              icon={Bank}
              isTypePaymentSelected={typePaymentSelected === "money"}
              onClick={() => handleChangeTypePayment("money")}
            />
          </div>
        </div>
      </SectionCheckout>

      <SectionCheckout title="Cafés selecionados">
        <div className="bg-gray-100 p-10 w-[448px] rounded-tl-md rounded-tr-[44px] rounded-br-md rounded-bl-[44px] flex justify-center flex-col gap-6">
          <CoffeeCardOnCart />

          <div className="h-[1px] w-full bg-gray-200" />

          <CoffeeCardOnCart />

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
      </SectionCheckout>
    </div>
  );
}
