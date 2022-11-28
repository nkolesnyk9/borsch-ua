import "./Store.css";
import { ShopContext } from "../context/CartContext";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import DropMenu from "../components/DropDown";

const Store = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);
  //useEffect is the same as component did mount; with the useEffect we are going to fetch all of the product when the home page loads. 
  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  console.log("here are the products", products);

  //here we are saying if products are not available
  if (!products) return <div>Loading ....</div>;
  return (
    <>
    
      <div className="store-nav">
      <h2> BorschUA </h2> 
      <DropMenu />
      </div>
      
      <div className="display-items">
        {products.map((product) => (
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

export default Store;
