import "./styles/global.css";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Router } from "./Router";
import { CartContextProvider } from "./contexts/CartContext";

export function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <ToastContainer autoClose={2000} />
    </CartContextProvider>
  );
}
