import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import ShopProvider from "./context/CartContext";
import ProductCard from "./components/ProductCard";


function App() {
  return (
    <>

        <ShopProvider>
          <Navbar />

          <Routes>
              <Route index element={<Home />} exact />
              <Route path="/products/:handle" element={<ProductCard />} exact/>
              
              <Route path="/about" element={<About />} />
              <Route path="/store" element={<Store />} />
              <Route path="/success" element={<Success />} />
              <Route path="/cancel" element={<Cancel />} />
          
          </Routes>
        </ShopProvider>

    </>
  );
}

export default App;
