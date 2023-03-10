import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useReducer,
} from "react";
import produce from "immer";

import { CoffeeProps } from "../components/CoffeeCard";
import { AddressFormData } from "../components/FormAddress";

interface CoffeeCartProps extends CoffeeProps {
  quantity: number;
}

type TypePaymentOptions = "credit" | "debit" | "money";

interface UpdateQuantityCoffeeProps {
  coffeeId: number;
  quantity: number;
}

interface CartContextData {
  cart: CoffeeCartProps[];
  address: AddressFormData;
  typePaymentSelected: TypePaymentOptions;

  resetCart: () => void;
  setAddress: (address: AddressFormData) => void;
  removeCoffeeFromCart: (coffeeId: number) => void;
  addCoffeeInCart: (coffee: CoffeeCartProps) => void;
  onUpdateTypePayment: (typePayment: TypePaymentOptions) => void;
  updateQuantityCoffee: (data: UpdateQuantityCoffeeProps) => void;
}

export const CartContext = createContext({} as CartContextData);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, dispatchCart] = useReducer(
    (state: CoffeeCartProps[], action: any) => {
      switch (action.type) {
        case "ADD_COFFEE_IN_CART": {
          const newListCoffeesInCart = produce(state, (draft) => {
            // search coffee in cart
            const indexCoffee = draft.findIndex(
              (coffeeInCart) => coffeeInCart.id === action.payload.coffee.id
            );

            // if coffee is not in the cart, just add
            // if the coffee is already in the cart, just increase the quantity
            if (indexCoffee < 0) {
              draft.push(action.payload.coffee);
            } else {
              draft[indexCoffee].quantity += action.payload.coffee.quantity;
            }
          });

          localStorage.setItem(
            "@coffee-delivery:cart-1.0.0",
            JSON.stringify(newListCoffeesInCart)
          );

          return newListCoffeesInCart;
        }

        case "RESET_CART":
          return [];

        case "UPDATE_QUANTITY_ONE_COFFEE": {
          const listCoffeesInCartUpdated = produce(state, (draft) => {
            const indexCoffee = draft.findIndex(
              (coffee) => coffee.id === action.payload.coffeeId
            );

            draft[indexCoffee].quantity = action.payload.quantity;
          });

          return listCoffeesInCartUpdated;
        }

        case "REMOVE_ONE_COFFEE_FROM_CART": {
          const listCoffeesUpdated = produce(state, (draft) => {
            const indexCoffee = draft.findIndex(
              (coffee) => coffee.id === action.payload.coffeeId
            );

            draft.splice(indexCoffee, 1);
          });

          return listCoffeesUpdated;
        }

        default:
          return state;
      }
    },
    [],
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        "@coffee-delivery:cart-1.0.0"
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return initialState;
    }
  );
  const [address, setAddress] = useState<AddressFormData>(
    {} as AddressFormData
  );
  const [typePaymentSelected, setTypePaymentSelected] =
    useState<TypePaymentOptions>("credit");

  function addCoffeeInCart(coffee: CoffeeCartProps) {
    dispatchCart({
      type: "ADD_COFFEE_IN_CART",
      payload: {
        coffee,
      },
    });
  }

  function resetCart() {
    dispatchCart({
      type: "RESET_CART",
    });
  }

  function updateQuantityCoffee(coffee: UpdateQuantityCoffeeProps) {
    if (coffee.quantity <= 0) {
      return;
    }

    dispatchCart({
      type: "UPDATE_QUANTITY_ONE_COFFEE",
      payload: {
        ...coffee,
      },
    });
  }

  function removeCoffeeFromCart(coffeeId: number) {
    dispatchCart({
      type: "REMOVE_ONE_COFFEE_FROM_CART",
      payload: {
        coffeeId,
      },
    });
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

        resetCart,
        setAddress,
        addCoffeeInCart,
        onUpdateTypePayment,
        updateQuantityCoffee,
        removeCoffeeFromCart,
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
