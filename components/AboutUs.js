import { Container } from "react-bootstrap";
import withImportantStyle from "react-with-important-style";
import React, { useState } from "react";
import Story from "./Story";

export default function AboutUs() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="container">
      <div className="card-left">
        <h1 className="item-title">About Us</h1>
        <Story count={count} handleClick={handleClick} />
      </div>
    </div>
  );
}
