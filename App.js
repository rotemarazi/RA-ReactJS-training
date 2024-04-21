import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./components/Product";

const root = ReactDOM.createRoot(document.getElementById("root"));

const products = fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

function App() {
  return (
    <div>
      <NavBar />
      <h1>Welcome! Start Shopping!</h1>
      <Product title="iPhone" price={799}></Product>
      <Product title="Samsung" price={698}></Product>
      <Product title="Huawei" price={567}></Product>
    </div>
  );
}

root.render(<App />);
