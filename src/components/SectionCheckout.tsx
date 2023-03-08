import { HTMLAttributes, ReactNode } from "react";

interface SectionCheckoutProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  children: ReactNode;
}

export function SectionCheckout({
  title,
  children,
  ...rest
}: SectionCheckoutProps) {
  return (
    <div {...rest}>
      <h2 className="font-cursive font-bold text-lg text-brow-600 mb-4">
        {title}
      </h2>

      {children}
    </div>
  );
}
