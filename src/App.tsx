import "./styles/global.css";

import { BrowserRouter } from "react-router-dom";

import { Router } from "./Router";
import { CartContextProvider } from "./contexts/CartContext";

export function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </CartContextProvider>
  );
}
