import { toast } from "react-toastify";
import { Trash, X } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

import { QuantityCoffee } from "./QuantityCoffee";

import { useCart } from "../contexts/CartContext";

import { formatPrice } from "../utils/format";
import americanPNG from "../assets/coffees/american.png";

interface CoffeeProps {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

interface CoffeeCardOnCartProps {
  coffee: CoffeeProps;
}

export function CoffeeCardOnCart({ coffee }: CoffeeCardOnCartProps) {
  const { onUpdateQuantityCoffee, onRemoveCoffeeFromCart } = useCart();

  function handleDecreaseQuantity() {
    onUpdateQuantityCoffee({
      coffeeId: coffee.id,
      quantity: coffee.quantity - 1,
    });
  }

  function handleIncreaseQuantity() {
    onUpdateQuantityCoffee({
      coffeeId: coffee.id,
      quantity: coffee.quantity + 1,
    });
  }

  function handleRemoveCoffeeFromCart() {
    onRemoveCoffeeFromCart(coffee.id);
    toast.info(`${coffee.name} foi removido com sucesso!`);
  }

  return (
    <Dialog.Root>
      <div className="flex gap-5">
        <img src={americanPNG} className="w-16 h-16" />

        <div className="flex gap-2 flex-col">
          <span className="font-sans text-base text-brow-600">
            {coffee.name}
          </span>

          <div className="flex gap-2">
            <QuantityCoffee
              quantity={coffee.quantity}
              onDecreaseQuantity={handleDecreaseQuantity}
              onIncreaseQuantity={handleIncreaseQuantity}
            />
            <Dialog.Trigger asChild>
              <button className="bg-gray-200 rounded-md p-2 flex items-center gap-1 font-sans text-xs uppercase text-brow-500">
                <Trash size={14} className="text-violet-600" />
                Remover
              </button>
            </Dialog.Trigger>
          </div>
        </div>

        <span className="font-sans text-base font-bold text-brow-500">
          R$ {formatPrice(coffee.price)}
        </span>
      </div>

      <div className="h-[1px] w-full bg-gray-200 my-6 last:mb-0" />

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black opacity-25 data-[state=open]:animate-overlayShow fixed inset-0" />

        <Dialog.Content
          className="data-[state=open]:animate-contentShow fixed 
        top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] 
        translate-y-[-50%] rounded-[6px] bg-white p-[25px] 
        shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
        >
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            {`Deseja remover o ${coffee.name} do carrinho?`}
          </Dialog.Title>

          <div className="flex items-center justify-between gap-2 mt-4">
            <Dialog.Close asChild>
              <button className="bg-gray-200 px-4 py-2 rounded w-1/2 hover:bg-gray-250 transition-colors">
                Cancelar
              </button>
            </Dialog.Close>

            <button
              className="bg-red-500 text-white px-4 py-2 rounded w-1/2 hover:bg-red-600 transition-colors"
              onClick={handleRemoveCoffeeFromCart}
            >
              Remover
            </button>
          </div>

          <Dialog.Close asChild>
            <button
              className="absolute top-[10px] right-[10px] flex items-center justify-center"
              aria-label="Close"
            >
              <X size={18} className="text-brow-900" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
