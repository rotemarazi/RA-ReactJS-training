import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/ProductList";
import Banner from "./components/Banner";

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
      <Banner />
      <ProductList />
    </div>
  );
}

root.render(<App />);
