import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { MapPin, ShoppingCart } from "phosphor-react";

import { useCart } from "../contexts/CartContext";

import { formatUf, formatErrorsGeolocation } from "../utils/format";

import logoPng from "../assets/logo.png";

interface ResponseAddressUser {
  city: string;
  principalSubdivision: string;
}

interface LocationProps {
  city: string;
  uf: string;
}

export function Header() {
  const { cart } = useCart();
  const [location, setLocation] = useState<LocationProps | null>(null);

  const totalCoffeesInCart = cart.length;

  async function successCallbackGeolocation(position: GeolocationPosition) {
    const { latitude, longitude } = position.coords;

    try {
      const response = await axios.get<ResponseAddressUser>(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=pt-BR`
      );

      const { principalSubdivision, city } = response.data;

      const uf = formatUf(principalSubdivision);

      setLocation({ uf, city });
    } catch (error) {
      console.log(error);
      toast.error("Não foi possível localizar seu estado e cidade.");
    }
  }

  function errorCallbackGeolocation(error: GeolocationPositionError) {
    console.log(error);

    const messageError = formatErrorsGeolocation(error.code);

    toast.info(messageError);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      successCallbackGeolocation,
      errorCallbackGeolocation
    );
  }, []);

  return (
    <header className="py-8">
      <div className="max-w-[1120px] w-[90%] mx-auto flex items-center justify-between max-[375px]:flex-col gap-4">
        <Link to="/">
          <img src={logoPng} />
        </Link>

        <div className="flex items-center gap-3">
          <div className="flex items-center justify-between gap-1 bg-violet-200 p-2 rounded-md">
            <MapPin size={24} weight="fill" className="fill-violet-600" />
            {location && (
              <span className="font-sans text-sm leading-[1.3] text-violet-900">
                {`${location.city}, ${location.uf}`}
              </span>
            )}
          </div>

          <div className="relative">
            <Link
              to="/checkout"
              className="p-2 rounded-md bg-yellow-100 flex items-center justify-center"
            >
              <ShoppingCart
                size={24}
                weight="fill"
                className="fill-yellow-600"
              />
            </Link>

            {totalCoffeesInCart > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-yellow-600 rounded-full flex items-center justify-center text-white font-sans font-bold text-xs">
                {totalCoffeesInCart}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
