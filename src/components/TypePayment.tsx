import { ButtonHTMLAttributes } from "react";
import { IconProps } from "phosphor-react";

interface TypePaymentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.FC<IconProps>;
  label: string;
  isTypePaymentSelected: boolean;
}

export function TypePayment({
  icon: Icon,
  label,
  isTypePaymentSelected,
  ...rest
}: TypePaymentProps) {
  return (
    <button
      className={`bg-gray-200 rounded-md p-4 flex gap-3 items-center text-brow-500
        font-sans text-xs uppercase transition-colors 
        ${
          isTypePaymentSelected
            ? "border border-violet-600 bg-violet-200"
            : "hover:bg-gray-250"
        }`}
      {...rest}
    >
      <Icon size={16} className="text-violet-600" />
      {label}
    </button>
  );
}
