import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useReducer,
} from "react";

import { AddressFormData } from "../components/FormAddress";
import {
  addCoffeeInCartAction,
  removeOneCoffeeFromCartAction,
  resetCartAction,
  updateQuantityOneCoffeeAction,
} from "../reducers/cart/actions";

import {
  cartReducer,
  CoffeeCartProps,
  UpdateQuantityCoffeeProps,
} from "../reducers/cart/reducer";

type TypePaymentOptions = "credit" | "debit" | "money";

interface CartContextData {
  cart: CoffeeCartProps[];
  address: AddressFormData;
  typePaymentSelected: TypePaymentOptions;

  onResetCart: () => void;
  setAddress: (address: AddressFormData) => void;
  onRemoveCoffeeFromCart: (coffeeId: number) => void;
  addCoffeeInCart: (coffee: CoffeeCartProps) => void;
  onUpdateTypePayment: (typePayment: TypePaymentOptions) => void;
  onUpdateQuantityCoffee: (data: UpdateQuantityCoffeeProps) => void;
}

export const CartContext = createContext({} as CartContextData);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, dispatchCart] = useReducer(cartReducer, [], (initialState) => {
    const storedStateAsJSON = localStorage.getItem(
      "@coffee-delivery:cart-1.0.0"
    );

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON);
    }

    return initialState;
  });
  const [address, setAddress] = useState<AddressFormData>(
    {} as AddressFormData
  );
  const [typePaymentSelected, setTypePaymentSelected] =
    useState<TypePaymentOptions>("credit");

  function addCoffeeInCart(coffee: CoffeeCartProps) {
    dispatchCart(addCoffeeInCartAction(coffee));
  }

  function onResetCart() {
    dispatchCart(resetCartAction());
  }

  function onUpdateQuantityCoffee(coffee: UpdateQuantityCoffeeProps) {
    if (coffee.quantity <= 0) {
      return;
    }

    dispatchCart(updateQuantityOneCoffeeAction(coffee));
  }

  function onRemoveCoffeeFromCart(coffeeId: number) {
    dispatchCart(removeOneCoffeeFromCartAction(coffeeId));
  }

  function onUpdateTypePayment(typePayment: TypePaymentOptions) {
    setTypePaymentSelected(typePayment);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        address,
        typePaymentSelected,

        onResetCart,
        setAddress,
        addCoffeeInCart,
        onUpdateTypePayment,
        onUpdateQuantityCoffee,
        onRemoveCoffeeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}
