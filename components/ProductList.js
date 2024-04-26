import React, { cloneElement } from "react";
import Container from "react-bootstrap/Container";
import Product from "./Product";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [resultedProducts, setResultedProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchClick, setSearchClick] = useState(false);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const products = await fetch("https://dummyjson.com/products");
    const jsonProducts = await products.json();
    setProducts(jsonProducts.products);
  };

  const handleFilter = () => {
    const filteredProducts = products.filter((product) => product.rating > 3);
    setProducts(filteredProducts);
  };

  const handleSearch = () => {
    if (searchText !== "") {
      setSearchClick(true);
      const matchedProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setResultedProducts(matchedProducts);
    }
  };
  return (
    <Container>
      <Form className="d-flex">
        <div className="col-auto m-3">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            onKeyPress={(e) => {
              e.key === "Enter" && e.preventDefault();
            }}
            aria-label="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              setSearchClick(false);
              console.log("searchText", searchText);
            }}
          />
        </div>
        <div className="col-auto m-3">
          <Button variant="outline-success" onClick={handleSearch}>
            Search
          </Button>
          <span style={{ fontSize: "20px", marginLeft: "20px" }}>
            {searchClick
              ? resultedProducts.length + " products found"
              : products.length + " products available!"}
          </span>
          <Button
            onClick={() => {
              handleFilter();
            }}
            className="m-3"
            variant="primary"
          >
            Filter
          </Button>
        </div>
      </Form>
      <div className="d-flex flex-wrap gap-3">
        {searchClick
          ? resultedProducts.map((product, index) => (
              <Product key={index} product={product} />
            ))
          : products.map((product, index) => (
              <Product key={index} product={product} />
            ))}
      </div>
    </Container>
  );
}
