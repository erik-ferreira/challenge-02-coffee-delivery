import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useReducer,
} from "react";
import produce from "immer";

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
  categoriesCoffeesSelected: string[];

  onResetCart: () => void;
  setAddress: (address: AddressFormData) => void;
  onRemoveCoffeeFromCart: (coffeeId: number) => void;
  addCoffeeInCart: (coffee: CoffeeCartProps) => void;
  onUpdateTypePayment: (typePayment: TypePaymentOptions) => void;
  onUpdateQuantityCoffee: (data: UpdateQuantityCoffeeProps) => void;
  onUpdateCategoriesCoffeesSelected: (category: string) => void;
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
  const [categoriesCoffeesSelected, setCategoriesCoffeesSelected] = useState<
    string[]
  >([]);

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

  function onUpdateCategoriesCoffeesSelected(category: string) {
    const newCategories = produce(categoriesCoffeesSelected, (draft) => {
      const indexCategory = draft.findIndex(
        (cat) => cat.toLowerCase() === category.toLowerCase()
      );

      if (indexCategory < 0) {
        draft.push(category);
      } else {
        draft.splice(indexCategory, 1);
      }
    });

    setCategoriesCoffeesSelected(newCategories);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        address,
        typePaymentSelected,
        categoriesCoffeesSelected,

        onResetCart,
        setAddress,
        addCoffeeInCart,
        onUpdateTypePayment,
        onUpdateQuantityCoffee,
        onRemoveCoffeeFromCart,
        onUpdateCategoriesCoffeesSelected,
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
