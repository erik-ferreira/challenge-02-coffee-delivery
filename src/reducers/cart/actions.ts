import { CoffeeCartProps, UpdateQuantityCoffeeProps } from "./reducer";

export enum ActionTypes {
  ADD_COFFEE_IN_CART = "ADD_COFFEE_IN_CART",
  RESET_CART = "RESET_CART",
  UPDATE_QUANTITY_ONE_COFFEE = "UPDATE_QUANTITY_ONE_COFFEE",
  REMOVE_ONE_COFFEE_FROM_CART = "REMOVE_ONE_COFFEE_FROM_CART",
}

export function addCoffeeInCartAction(coffee: CoffeeCartProps) {
  return {
    type: ActionTypes.ADD_COFFEE_IN_CART,
    payload: {
      coffee,
    },
  };
}

export function resetCartAction() {
  return {
    type: ActionTypes.RESET_CART,
  };
}

export function updateQuantityOneCoffeeAction(
  coffee: UpdateQuantityCoffeeProps
) {
  return {
    type: ActionTypes.UPDATE_QUANTITY_ONE_COFFEE,
    payload: {
      ...coffee,
    },
  };
}

export function removeOneCoffeeFromCartAction(coffeeId: number) {
  return {
    type: ActionTypes.REMOVE_ONE_COFFEE_FROM_CART,
    payload: {
      coffeeId,
    },
  };
}
