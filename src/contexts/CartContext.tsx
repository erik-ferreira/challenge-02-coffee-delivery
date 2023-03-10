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

interface UpdateQuantityCoffeeProps {
  coffeeId: number;
  quantity: number;
}

interface CartContextData {
  cart: CoffeeCartProps[];
  address: AddressFormData;
  typePaymentSelected: TypePaymentOptions;

  emptyCart: () => void;
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

      localStorage.setItem(
        "@coffee-delivery:cart-1.0.0",
        JSON.stringify(newListCoffeesInCart)
      );
      setCart(newListCoffeesInCart);
    } else {
      setCart((prevState) => {
        const newListCoffeesInCart = [...prevState, coffee];

        localStorage.setItem(
          "@coffee-delivery:cart-1.0.0",
          JSON.stringify(newListCoffeesInCart)
        );

        return newListCoffeesInCart;
      });
    }
  }

  function emptyCart() {
    setCart([]);
  }

  function updateQuantityCoffee({
    coffeeId,
    quantity,
  }: UpdateQuantityCoffeeProps) {
    if (quantity <= 0) {
      return;
    }

    // check if the coffee id is already in the cart
    const coffeeExistsInCart = cart.find(
      (coffeeInCart) => coffeeInCart.id === coffeeId
    );

    if (!coffeeExistsInCart) {
      return alert(
        "Você não pode alterar a quantidade deste café pois ele não esta no carrinho!"
      );
    }

    const newCoffeesInCart = cart.map((coffeeInCart) => {
      if (coffeeInCart.id === coffeeId) {
        return { ...coffeeInCart, quantity };
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
    const cartInStorage = localStorage.getItem("@coffee-delivery:cart-1.0.0");

    if (cartInStorage) {
      const cartParsed = JSON.parse(cartInStorage);

      setCart(cartParsed);
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        address,
        typePaymentSelected,

        emptyCart,
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
