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
  const [categoryFilter, setCategoryFilter] = useState(false);
  const [priceFilter, setPriceFilter] = useState(false);
  const [rateFilter, setRateFilter] = useState(false);
  const [filterValue, setFilterValue] = useState("");

  const resetFilters = () => {
    setCategoryFilter(false);
    setPriceFilter(false);
    setRateFilter(false);
    document.getElementById("filterselectcion").value = "";
    if (!searchText) {
      fetchProducts();
    } else handleSearch();
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const products = await fetch("https://dummyjson.com/products");
    const jsonProducts = await products.json();
    setProducts(jsonProducts.products);
  };

  const handleSetFilter = (filter) => {
    if (filter === "category") {
      setCategoryFilter(true);
    } else if (filter === "maxprice") {
      setPriceFilter(true);
    } else if (filter === "minrate") {
      setRateFilter(true);
    }
  };
  const handleFilter = () => {
    console.log(filterValue);
    let filteredProducts = [];
    if (resultedProducts.length > 0 && searchClick) {
      filteredProducts = resultedProducts.filter((product) =>
        product.category.toLowerCase().includes({ filterValue })
      );
    } else {
      console.log(products);
      filteredProducts = products.filter((product) =>
        product.category.includes(filterValue)
      );
    }
    console.log(filteredProducts);
    setProducts(filteredProducts);
    /* const filteredProducts = products.filter((product) => product.rating > 3);
    setProducts(filteredProducts); */
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
            onKeyUp={(e) => {
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
        </div>
      </Form>
      <div className="filters" style={{ margin: "20px" }}>
        <select
          name="filterselectcion"
          id="filterselectcion"
          onChange={(e) => handleSetFilter(e.target.value)}
        >
          <option value="">--Filter By--</option>
          <option value="category">Category</option>
          <option value="maxprice">Max Price</option>
          <option value="minrate">Min Rate</option>
        </select>
        {categoryFilter && (
          <select
            style={{ margin: "20px" }}
            name="categoryfilter"
            id="categoryfilter"
            onChange={(e) => {
              setFilterValue(e.target.value);
              setCategoryFilter(true);
            }}
          >
            <option value="">--Choose Category--</option>
            <option value="smartphones">smartphones</option>
            <option value="laptops">laptops</option>
            <option value="fragrances">fragrances</option>
            <option value="skincare">skincare</option>
            <option value="groceries">groceries</option>
            <option value="home">home-decoration</option>
          </select>
        )}
        {priceFilter && (
          <input
            style={{ margin: "20px" }}
            type="number"
            placeholder="Filter by max price"
            value={filterValue}
            onChange={(e) => {
              setFilterValue(e.target.value);
              setPriceFilter(true);
            }}
          />
        )}
        {rateFilter && (
          <input
            style={{ margin: "20px" }}
            type="number"
            placeholder="Filter by max rate"
            value={filterValue}
            onChange={(e) => {
              setFilterValue(e.target.value);
              setRateFilter(true);
            }}
          />
        )}
        {(rateFilter || priceFilter || categoryFilter) && (
          <span style={{ margin: "20px" }}>
            <Button onClick={handleFilter} variant="primary">
              Apply Filters
            </Button>
            <Button
              style={{ marginLeft: "20px" }}
              onClick={resetFilters}
              variant="primary"
            >
              Reset Filters
            </Button>
          </span>
        )}
      </div>

      {/* <Button
            onClick={() => {
              handleFilter();
            }}
            className="m-3"
            variant="primary"
          >
            Filter
          </Button> */}
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
