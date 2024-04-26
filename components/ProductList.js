import React from "react";
import Container from "react-bootstrap/Container";
import Product from "./Product";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");

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

  const handleChangeSearch = (e) => {
    setSearchText(e.target.value);
  };
  const handleSearch = () => {
    if (searchText !== "") {
      const matchedProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      );
      console.log("Searchhh", searchText);
      console.log("matchedProducts", matchedProducts);
      setProducts(matchedProducts);
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
            aria-label="Search"
            value={searchText}
            onKeyDown={handleSearch}
            onChange={(e) => {
              handleChangeSearch(e);
            }}
          />
        </div>
        <div className="col-auto m-3">
          <Button variant="outline-success" onClick={handleSearch}>
            Search
          </Button>
          <span style={{ marginLeft: "20px" }}>
            {`${products.length} `}
            products found
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
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </Container>
  );
}
