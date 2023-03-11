import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { CurrencyDollar, Timer, MapPin } from "phosphor-react";

import { Topic } from "../components/Topic";

import { useCart } from "../contexts/CartContext";

import deliverSVG from "../assets/deliver.svg";

export function Success() {
  const { address, typePaymentSelected, setAddress } = useCart();

  const typePaymentOptions = {
    credit: "Cartão de Crédito",
    debit: "Cartão de Débito",
    money: "Dinheiro",
  };
  const typePayment = typePaymentOptions[typePaymentSelected];

  const listTopics = [
    {
      id: 1,
      icon: MapPin,
      bgColor: "bg-violet-600",
      label: (
        <div>
          Entrega em{" "}
          <strong className="font-bold">{`${address?.street}, ${address?.numberHouse}`}</strong>
          <br />
          {`${address?.district} - ${address?.city}, ${address?.uf}`}
        </div>
      ),
    },
    {
      id: 2,
      icon: Timer,
      bgColor: "bg-yellow-500",
      label: (
        <div>
          Previsão de entrega
          <br />
          <strong className="font-bold">20 min - 30 min</strong>
        </div>
      ),
    },
    {
      id: 3,
      icon: CurrencyDollar,
      bgColor: "bg-yellow-600",
      label: (
        <div>
          Pagamento na entrega
          <br />
          <strong className="font-bold">{typePayment}</strong>
        </div>
      ),
    },
  ];

  useEffect(() => {
    return () => {
      setAddress(null);
    };
  }, []);

  return !address ? (
    <Navigate to="/" />
  ) : (
    <div className="max-w-[1120px] w-[90%] mx-auto">
      <h1 className="font-cursive font-extrabold text-[2rem] text-yellow-600">
        Uhu! Pedido confirmado
      </h1>

      <p className="mt-1 mb-10 font-sans text-xl text-brow-600">
        Agora é só aguardar que logo o café chegará até você
      </p>

      <div className="flex justify-between">
        <div
          className="w-[32rem] p-[1px] flex items-center justify-center 
        rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px] 
        bg-gradient-to-t from-yellow-500 to-violet-600"
        >
          <ul
            className="w-full h-full font-sans text-base leading-[1.3] text-brow-500 
            flex flex-col justify-center gap-8 p-10 bg-gray-50
            rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px]"
          >
            {listTopics.map((topic) => (
              <Topic key={topic.id} topic={topic} />
            ))}
          </ul>
        </div>

        <img src={deliverSVG} className="w-[30.75rem] h-[18.3rem]" />
      </div>
    </div>
  );
}
