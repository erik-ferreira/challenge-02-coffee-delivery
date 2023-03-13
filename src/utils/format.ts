import { ufs, KeysUfs } from "./defaults";

export function formatPrice(value: number) {
  const valueFormatted = new Intl.NumberFormat("pt-br", {
    currency: "BRL",
  }).format(value);

  return valueFormatted;
}

export function formatUf(text: string): string {
  // remove accents
  text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  // remove spaces and add underline(_) and lower case
  text = text.replace(/[^A-Z0-9]/gi, "_").toLowerCase();

  const newUf = text as KeysUfs;

  return ufs[newUf];
}

export function formatErrorsGeolocation(code: number): string {
  let message: string;

  if (code === 1) {
    message = "Precisamos da sua permissão para acessar sua localização.";
  } else {
    message = "Ocorreu um problema ao acessar sua localização.";
  }

  return message;
}
