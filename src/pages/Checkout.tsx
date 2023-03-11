import { toast } from "react-toastify";
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
    if (cart.length === 0) {
      return toast.info("Adicione um produto no carrinho.");
    }

    setAddress(data);

    onResetCart();

    navigate("/success");
  }

  return (
    <form
      className="flex gap-8 max-w-[1120px] w-[90%] mx-auto max-[1170px]:flex-col"
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

          <div className="flex gap-3 mt-8 max-[1170px]:justify-between max-[625px]:flex-col">
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
        <div className="bg-gray-100 p-10 w-[448px] rounded-tl-md rounded-tr-[44px] rounded-br-md rounded-bl-[44px] flex justify-center flex-col gap-6 max-[1170px]:w-full">
          {cart.length === 0 ? (
            <strong className="font-cursive font-extrabold text-[1.5rem] text-slate-600 text-center">
              Adicione alguns dos nossos produtos no carrinho para finalizar o
              pedido.
            </strong>
          ) : (
            <div
              className={`${cart.length >= 4 && "h-[368px] overflow-y-scroll"}`}
            >
              {cart.map((coffeeInCart) => (
                <CoffeeCardOnCart key={coffeeInCart.id} coffee={coffeeInCart} />
              ))}
            </div>
          )}

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

          <Button
            type="submit"
            label="Confirmar Pedido"
            className="max-[1170px]:mx-auto max-[520px]:w-[90%]"
          />
        </div>
      </SectionCheckout>
    </form>
  );
}
