import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { CoffeeProps } from "../components/CoffeeCard";

interface CoffeeCartProps extends CoffeeProps {
  quantity: number;
}

interface CartContextData {
  cart: CoffeeCartProps[];

  addCoffeeInCart: (coffee: CoffeeCartProps) => void;
}

export const CartContext = createContext({} as CartContextData);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<CoffeeCartProps[]>([]);

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

  useEffect(() => {
    console.log("carrinho mudou", cart);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addCoffeeInCart,
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
