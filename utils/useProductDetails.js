import React, { useState, useEffect } from "react";

export default function useProductDetails(productId) {
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    fetchProduct();
    return () => {
      setProductDetails({});
      console.log("productDetails 2", productDetails);
    };
  }, []);

  const fetchProduct = async () => {
    const product = await fetch("https://dummyjson.com/products/" + productId);
    const jsonProduct = await product.json();
    setProductDetails(jsonProduct);
    console.log("productDetails 1", jsonProduct);
  };

  return productDetails;
}
