import produce from "immer";
import { ActionTypes } from "./actions";

import { CoffeeProps } from "../../components/CoffeeCard";

export interface CoffeeCartProps extends CoffeeProps {
  quantity: number;
}

export interface UpdateQuantityCoffeeProps {
  coffeeId: number;
  quantity: number;
}

export function cartReducer(state: CoffeeCartProps[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_IN_CART: {
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

    case ActionTypes.RESET_CART:
      return [];

    case ActionTypes.UPDATE_QUANTITY_ONE_COFFEE: {
      const listCoffeesInCartUpdated = produce(state, (draft) => {
        const indexCoffee = draft.findIndex(
          (coffee) => coffee.id === action.payload.coffeeId
        );

        draft[indexCoffee].quantity = action.payload.quantity;
      });

      return listCoffeesInCartUpdated;
    }

    case ActionTypes.REMOVE_ONE_COFFEE_FROM_CART: {
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
}
