import { ShoppingCart, Package, Coffee, Timer } from "phosphor-react";

export const listTopicsHome = [
  {
    id: 1,
    label: "Compra simples e segura",
    icon: ShoppingCart,
    bgColor: "bg-yellow-600",
  },
  {
    id: 2,
    label: "Embalagem mantém o café intacto",
    icon: Package,
    bgColor: "bg-brow-500",
  },
  {
    id: 3,
    label: "Entrega rápida e rastreada",
    icon: Timer,
    bgColor: "bg-yellow-500",
  },
  {
    id: 4,
    label: "O café chega fresquinho até você",
    icon: Coffee,
    bgColor: "bg-violet-600",
  },
];

export const listFilterCoffee = [
  "Tradicional",
  "Especial",
  "Com Leite",
  "Alcoólico",
  "Gelado",
];

export const coffees = [
  {
    id: 1,
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 35.56,
    categories: ["Tradicional"],
  },
  {
    id: 2,
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 10.5,
    categories: ["Tradicional"],
  },
  {
    id: 3,
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 18.9,
    categories: ["Tradicional"],
  },
  {
    id: 4,
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 8.9,
    categories: ["Tradicional", "Gelado"],
  },
  {
    id: 5,
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 5,
    categories: ["Tradicional", "Com Leite"],
  },
  {
    id: 6,
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.99,
    categories: ["Tradicional", "Com Leite"],
  },
  {
    id: 7,
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 8.5,
    categories: ["Tradicional", "Com Leite"],
  },
  {
    id: 8,
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 12.65,
    categories: ["Tradicional", "Com Leite"],
  },
  {
    id: 9,
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 3.45,
    categories: ["Tradicional", "Com Leite"],
  },
  {
    id: 10,
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 7.5,
    categories: ["Especial", "Com Leite", "Chocolate"],
  },
  {
    id: 11,
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 14.6,
    categories: ["Especial", "Alcoólico", "Gelado"],
  },
  {
    id: 12,
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 8.99,
    categories: ["Especial"],
  },
  {
    id: 13,
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 16.75,
    categories: ["Especial"],
  },
  {
    id: 14,
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 11.89,
    categories: ["Especial", "Alcoólico"],
  },
];
