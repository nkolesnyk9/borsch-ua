import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import Accessesories from "./pages/Accessories";
import Apparel from "./pages/Apparel";
import ShopProvider from "./context/CartContext";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";



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
              <Route path="/store/accessories" element={<Accessesories />} />
              <Route path="/store/apparel" element={<Apparel />} />
          </Routes>
          
          <Footer />
        </ShopProvider>

    </>
  );
}

export default App;
