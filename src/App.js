import "./App.css";
import { useThemeHook } from "./exmple/context/global/ThemProvider";
// import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./layouts/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// pages
import Home from "./pages/home/Home";
import Cart from "./pages/cart/index";

function App() {
  const [theme] = useThemeHook();
  return (
    <main
      className={theme ? "bg-black" : "bg-light-2"}
      style={{ height: "100vh", overflowY: "auto" }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
