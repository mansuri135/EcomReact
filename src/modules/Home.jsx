import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import Hero from "../components/Hero";
import FeatureCart from "../components/FeatureCart";
import Footer from "../components/Footer";
import { Cart } from "../components/Card";
import Loader from "../utiliy/Loadrer";

const Home = () => {
 
    const [products, setProduct] = useState([])

    useEffect(()=>{
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products?limit=12')
            const date = await response.json()
            console.log(date)
            setProduct(date)
        }
        fetchProducts();
    },[])

  return (
    <>
      <Hero />
      <Cart />
      <h2 className="text-6xl font-bold text-center mt-20">Prdoucts</h2>
      {
        products.length > 0 ? <Product product={products} /> : <Loader />
      }
      <FeatureCart />

    </>
  );
};

export default Home;
