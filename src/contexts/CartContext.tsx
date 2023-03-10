import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { CoffeeProps } from "../components/CoffeeCard";
import { AddressFormData } from "../components/FormAddress";

interface CoffeeCartProps extends CoffeeProps {
  quantity: number;
}

type TypePaymentOptions = "credit" | "debit" | "money";

interface CartContextData {
  cart: CoffeeCartProps[];
  address: AddressFormData;
  typePaymentSelected: TypePaymentOptions;

  onUpdateTypePayment: (typePayment: TypePaymentOptions) => void;
  setAddress: (address: AddressFormData) => void;
  addCoffeeInCart: (coffee: CoffeeCartProps) => void;
  increaseQuantityCoffee: (coffeeId: number) => void;
  decreaseQuantityCoffee: (coffeeId: number) => void;
  removeCoffeeFromCart: (coffeeId: number) => void;
}

export const CartContext = createContext({} as CartContextData);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<CoffeeCartProps[]>([]);
  const [address, setAddress] = useState<AddressFormData>(
    {} as AddressFormData
  );
  const [typePaymentSelected, setTypePaymentSelected] =
    useState<TypePaymentOptions>("credit");

  function addCoffeeInCart(coffee: CoffeeCartProps) {
    // check if the coffee is already in the cart
    const coffeeIsAlreadyInCart = cart.find(
      (coffeeInCart) => coffeeInCart.id === coffee.id
    );

    if (coffeeIsAlreadyInCart) {
      const newListCoffeesInCart = cart.map((coffeeInCart) => {
        if (coffeeInCart.id === coffee.id) {
          return {
            ...coffeeInCart,
            quantity: coffeeInCart.quantity + coffee.quantity,
          };
        }

        return coffeeInCart;
      });

      setCart(newListCoffeesInCart);
    } else {
      setCart((prevState) => [...prevState, coffee]);
    }
  }

  function increaseQuantityCoffee(coffeeId: number) {
    // check if the coffee id is already in the cart
    const coffeeExistsInCart = cart.find(
      (coffeeInCart) => coffeeInCart.id === coffeeId
    );

    if (!coffeeExistsInCart) {
      return alert(
        "Você não pode aumentar a quantidade deste café pois ele não esta no carrinho!"
      );
    }

    const newCoffeesInCart = cart.map((coffeeInCart) => {
      if (coffeeInCart.id === coffeeId) {
        return { ...coffeeInCart, quantity: coffeeInCart.quantity + 1 };
      }

      return coffeeInCart;
    });

    setCart(newCoffeesInCart);
  }

  function decreaseQuantityCoffee(coffeeId: number) {
    // check if the coffee id is already in the cart
    const coffeeExistsInCart = cart.find(
      (coffeeInCart) => coffeeInCart.id === coffeeId
    );

    if (!coffeeExistsInCart) {
      return alert(
        "Você não pode diminuir a quantidade deste café pois ele não esta no carrinho!"
      );
    }

    const newCoffeesInCart = cart.map((coffeeInCart) => {
      if (coffeeInCart.id === coffeeId) {
        return { ...coffeeInCart, quantity: coffeeInCart.quantity - 1 };
      }

      return coffeeInCart;
    });

    setCart(newCoffeesInCart);
  }

  function removeCoffeeFromCart(coffeeId: number) {
    const newListCoffeesInCart = cart.filter(
      (coffeeInCart) => coffeeInCart.id !== coffeeId
    );

    setCart(newListCoffeesInCart);
  }

  function onUpdateTypePayment(typePayment: TypePaymentOptions) {
    setTypePaymentSelected(typePayment);
  }

  useEffect(() => {
    console.log("carrinho mudou", cart);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        address,
        typePaymentSelected,

        onUpdateTypePayment,
        setAddress,
        addCoffeeInCart,
        increaseQuantityCoffee,
        decreaseQuantityCoffee,
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
