import { ShopContext } from "../context/CartContext";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import DropMenu from "../components/DropDown";
import './Store.css'


const Apparel = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  const filterProd = products.filter(product => {
    return product.productType == "apparel" 
  })
  console.log("here are filter products", filterProd);
  console.log("here are the products", products);

  if (!products) return <div>Loading ....</div>;

  return (
    <>
    <div className="store-nav">
    <h2>Apparel</h2> 
      <DropMenu />
      </div>
      
    
      <div className="display-items">
        {filterProd.map((product) => (
          <Link to={`/products/${product.handle}`} key={product.id}>
            <div className="product-card">
              <div className="product-image">
                <img src={product.images[0].src}></img>
              </div>
              <div className="product-text">
                <p>{product.title}</p>
                <p>${product.variants[0].price.amount}</p>
              </div>
            </div>
          </Link>
        ))}
       
      </div>
    </>
  );
};

export default Apparel;