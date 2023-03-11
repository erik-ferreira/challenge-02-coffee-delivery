import { Tag } from "../components/Tag";
import { Topic } from "../components/Topic";
import { CoffeeCard, CoffeeProps } from "../components/CoffeeCard";

import { useCart } from "../contexts/CartContext";

import coffeeBackground from "../assets/coffee.png";

import { listTopicsHome, listFilterCoffee, coffees } from "../utils/defaults";

export function Home() {
  const { categoriesCoffeesSelected, onUpdateCategoriesCoffeesSelected } =
    useCart();

  let coffeesFilter: CoffeeProps[] = [];

  coffees.forEach((coffee) => {
    if (categoriesCoffeesSelected.length === 0) {
      coffeesFilter = [...coffees];
    } else {
      categoriesCoffeesSelected.forEach((category) => {
        if (coffee.categories.includes(category)) {
          coffeesFilter.push(coffee);
        }
      });
    }
  });

  return (
    <div>
      <div className="max-w-[1120px] w-[90%] mx-auto py-20 flex items-center gap-14 max-[970px]:flex-col">
        <div>
          <h1 className="font-cursive font-extrabold text-5xl leading-[1.3] text-brow-900 max-[425px]:text-4xl">
            Encontre o café perfeito para qualquer hora do dia
          </h1>

          <p className="font-sans text-xl leading-[1.3] text-brow-600 mt-4 max-[425px]:text-lg">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <ul
            className="font-sans text-base leading-[1.3] text-brow-500 
            grid grid-cols-2 gap-5 mt-16
            max-[425px]:grid-cols-1"
          >
            {listTopicsHome.map((topic) => (
              <Topic key={topic.id} topic={topic} />
            ))}
          </ul>
        </div>

        <img
          src={coffeeBackground}
          className="w-[80%] h-[80%]"
          alt="Copo com o nome Coffee Delivery e alguns dos ingredientes como próprio grão de café e um coador."
        />
      </div>

      <div className="max-w-[1120px] w-[90%] mx-auto">
        <div className="flex items-center justify-between mb-14 max-[750px]:flex-col max-[750px]:items-start">
          <h2 className="font-cursive font-extrabold text-[2rem] leading-[1.3] text-brow-600">
            Nossos cafés
          </h2>

          <div className="flex items-center gap-2 flex-wrap">
            {listFilterCoffee.map((typeCoffee) => {
              const isSelectedTag =
                categoriesCoffeesSelected.includes(typeCoffee);

              return (
                <Tag
                  key={typeCoffee}
                  variant="outline"
                  asChild
                  isSelected={isSelectedTag}
                >
                  <button
                    type="button"
                    onClick={() =>
                      onUpdateCategoriesCoffeesSelected(typeCoffee)
                    }
                  >
                    {typeCoffee}
                  </button>
                </Tag>
              );
            })}
          </div>
        </div>

        <div className="grid gap-8 grid-cols-coffees-responsive">
          {coffeesFilter.map((coffee) => (
            <CoffeeCard
              key={coffee.id}
              coffee={coffee}
              className="max-[1218px]:mx-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
