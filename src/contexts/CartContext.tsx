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

interface IncreaseAndDecreaseQuantityCoffeeProps {
  coffeeId: number;
  quantity: number;
}

interface CartContextData {
  cart: CoffeeCartProps[];

  addCoffeeInCart: (coffee: CoffeeCartProps) => void;
  increaseQuantityCoffee: (coffeeId: number) => void;
  decreaseQuantityCoffee: (coffeeId: number) => void;
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

  useEffect(() => {
    console.log("carrinho mudou", cart);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addCoffeeInCart,
        increaseQuantityCoffee,
        decreaseQuantityCoffee,
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
