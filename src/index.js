import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { ThemProvider } from "./exmple/context/global/ThemProvider";

import { CartProvider } from "react-use-cart";

render(
  <React.StrictMode>
    <ThemProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ThemProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
