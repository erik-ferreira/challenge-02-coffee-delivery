import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { CurrencyDollar, CreditCard, Money, Bank } from "phosphor-react";

import { Button } from "../components/Button";
import { TypePayment } from "../components/TypePayment";
import { SectionCheckout } from "../components/SectionCheckout";
import { CoffeeCardOnCart } from "../components/CoffeeCardOnCart";
import {
  FormAddress,
  addressFormSchema,
  AddressFormData,
} from "../components/FormAddress";

import { useCart } from "../contexts/CartContext";

import { formatPrice } from "../utils/format";

export function Checkout() {
  const navigate = useNavigate();
  const {
    cart,
    setAddress,
    typePaymentSelected,
    onUpdateTypePayment,
    onResetCart,
  } = useCart();

  const totalPriceItems = cart.reduce(
    (acc, coffee) => acc + coffee.price * coffee.quantity,
    0
  );
  const deliveryFee = 3.5;
  const total = totalPriceItems + deliveryFee;

  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(addressFormSchema),
  });
  const { handleSubmit } = addressForm;

  function handleSubmitFormAddress(data: any) {
    setAddress(data);

    onResetCart();

    navigate("/success");
  }

  return (
    <form
      className="flex gap-8 max-w-[1120px] w-[90%] mx-auto"
      onSubmit={handleSubmit(handleSubmitFormAddress)}
    >
      <SectionCheckout title="Complete seu pedido">
        <FormProvider {...addressForm}>
          <FormAddress />
        </FormProvider>

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
              onClick={() => onUpdateTypePayment("credit")}
            />
            <TypePayment
              label=" CARTÃO DE DÉBITO"
              icon={Money}
              isTypePaymentSelected={typePaymentSelected === "debit"}
              onClick={() => onUpdateTypePayment("debit")}
            />
            <TypePayment
              label="DINHEIRO"
              icon={Bank}
              isTypePaymentSelected={typePaymentSelected === "money"}
              onClick={() => onUpdateTypePayment("money")}
            />
          </div>
        </div>
      </SectionCheckout>

      <SectionCheckout title="Cafés selecionados">
        <div className="bg-gray-100 p-10 w-[448px] rounded-tl-md rounded-tr-[44px] rounded-br-md rounded-bl-[44px] flex justify-center flex-col gap-6">
          <div className="h-[368px] overflow-y-scroll">
            {cart.map((coffeeInCart) => (
              <CoffeeCardOnCart key={coffeeInCart.id} coffee={coffeeInCart} />
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-sans text-sm text-brow-500 flex items-center justify-between">
              Total de itens
              <span>R$ {formatPrice(totalPriceItems)}</span>
            </span>

            <span className="font-sans text-sm text-brow-500 flex items-center justify-between">
              Entrega
              <span>R$ {formatPrice(deliveryFee)}</span>
            </span>

            <span className="font-sans font-bold text-xl text-brow-500 flex items-center justify-between">
              Total
              <span>R$ {formatPrice(total)}</span>
            </span>
          </div>

          <Button type="submit" label="Confirmar Pedido" />
        </div>
      </SectionCheckout>
    </form>
  );
}
