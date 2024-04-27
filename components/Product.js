import React from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Product(props) {
  const { category, title, rating, thumbnail, brand, price } = props.product;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>
          {title} by {brand}
          <br />
          <span className="badge bg-secondary">$ {price} only</span>
        </Card.Title>
        <Card.Text>
          <span
            style={{
              backgroundColor:
                category === "smartphones"
                  ? "#b3b3ff"
                  : category === "laptops"
                  ? "#ffffb3"
                  : category === "fragrances"
                  ? "#ffbb99"
                  : category === "skincare"
                  ? "#9fdf9f"
                  : category === "groceries"
                  ? "#b3ffff"
                  : "#d1d1e0",
            }}
          >
            {category}
          </span>
          <br />
          {/* smartphones laptops fragrances skincare groceries home-decoration */}
          Rate: {rating}
        </Card.Text>
        <Col>
          <Button variant="primary">Add to cart</Button>
        </Col>
      </Card.Body>
    </Card>
  );
  /* return (
    <div>
      <p style={{ size: "28px", fontWeight: "bold" }}>
        {title}
        <span style={{ size: "24px", fontWeight: "normal" }}> ${price}</span>
      </p>
    </div>
  ); */
}
