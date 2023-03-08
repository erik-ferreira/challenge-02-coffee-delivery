import { MapPinLine } from "phosphor-react";
import { Input } from "../components/Input";

export function Checkout() {
  return (
    <>
      <h2 className="font-cursive font-bold text-lg text-brow-600">
        Complete seu pedido
      </h2>

      <div className="bg-gray-100 rounded-md p-10 w-[640px]">
        <div className="flex gap-2">
          <MapPinLine size={24} className="text-yellow-600 " />
          <span className="font-sans text-base text-brow-600">
            Endereço de entrega
          </span>
        </div>

        <p className="font-sans text-sm text-brow-500 ml-8">
          Informe o endereço onde deseja receber seu pedido
        </p>

        <Input placeholder="CEP" />
        <Input placeholder="Rua" />
        <Input placeholder="Número" />
        <Input placeholder="Complemento" isOptional />
        <Input placeholder="Bairro" />
        <Input placeholder="Cidade" />
        <Input placeholder="UF" />
      </div>
    </>
  );
}
