import * as zod from "zod";
import { MapPinLine } from "phosphor-react";
import { useFormContext } from "react-hook-form";

import { Input } from "./Input";

export const addressFormSchema = zod.object({
  zipCode: zod.string().min(1, "Informe o cep"),
  street: zod.string().min(1, "Informe a rua"),
  numberHouse: zod.string().min(1, "Informe o número da casa"),
  complement: zod.string().nullable(),
  district: zod.string().min(1, "Informe o bairro"),
  city: zod.string().min(1, "Informe a cidade"),
  uf: zod.string().min(1, "Informe a uf"),
});
export type AddressFormData = zod.infer<typeof addressFormSchema>;

export function FormAddress() {
  const {
    register,
    formState: { errors },
  } = useFormContext<AddressFormData>();

  return (
    <div className="bg-gray-100 rounded-md p-10">
      <div className="flex gap-2">
        <MapPinLine size={24} className="text-yellow-600 " />
        <span className="font-sans text-base text-brow-600">
          Endereço de entrega
        </span>
      </div>

      <p className="font-sans text-sm text-brow-500 ml-8">
        Informe o endereço onde deseja receber seu pedido
      </p>

      <div className="mt-8 flex flex-col gap-4">
        <Input
          placeholder="CEP"
          {...register("zipCode")}
          error={errors.zipCode?.message}
        />

        <Input
          placeholder="Rua"
          variantWidth="max"
          {...register("street")}
          error={errors.street?.message}
        />

        <div className="flex gap-3">
          <Input
            placeholder="Número"
            {...register("numberHouse")}
            error={errors.numberHouse?.message}
          />
          <Input
            placeholder="Complemento"
            isOptional
            variantWidth="flex"
            {...register("complement")}
            error={errors.complement?.message}
          />
        </div>

        <div className="flex gap-3">
          <Input
            placeholder="Bairro"
            {...register("district")}
            error={errors.district?.message}
          />
          <Input
            placeholder="Cidade"
            {...register("city")}
            error={errors.city?.message}
          />
          <Input
            placeholder="UF"
            variantWidth="min"
            {...register("uf")}
            error={errors.uf?.message}
          />
        </div>
      </div>
    </div>
  );
}
