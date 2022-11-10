import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import CartProvider from "./CartContext";
import ShopProvider from "./context/shopContext";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <>
      <CartProvider>
        <ShopProvider>
          <Navbar />
          <Routes>
            
              <Route path="/products/:handle" element={<ProductCard />} />
              <Route index element={<Home />} exact />
              <Route path="/about" element={<About />} />
              <Route path="/store" element={<Store />} />
              <Route path="/success" element={<Success />} />
              <Route path="/cancel" element={<Cancel />} />
          
          </Routes>
        </ShopProvider>
      </CartProvider>
    </>
  );
}

export default App;
