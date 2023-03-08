export function formatPrice(value: number) {
  const valueFormatted = new Intl.NumberFormat("pt-br", {
    currency: "BRL",
  }).format(value);

  return valueFormatted;
}
