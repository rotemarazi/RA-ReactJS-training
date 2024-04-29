import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import "../css/index.css";
import useProductDetails from "../utils/useProductDetails";

export default function ProductDetails() {
  const { productId } = useParams();

  const product = useProductDetails(productId);
  return (
    <div className="container">
      <div className="card-left">
        <h1 className="item-title">{product.title}</h1>
        <h2>by {product.brand}</h2>
        <br />
        <p className="item-price">
          <b>Price: </b>
          <span style={{ color: "#0d6efd" }}>${product.price}.00</span>
        </p>
        <p className="item-price">
          <b>Rating: </b>
          {product.rating}
        </p>
        <p className="item-price">
          <b>Category: </b>
          {product.category}
        </p>
        <p className="item-desc">{product.description}</p>
        <br></br>
      </div>
      <div className="card-right">
        <Carousel useKeyboardArrows={true}>
          {product &&
            product?.images &&
            product?.images.map((image, index) => (
              <div key={index} className="slide">
                <img alt={image} src={image} />
              </div>
            ))}
        </Carousel>
      </div>
    </div>
  );
}
