import React from "react";

export default function Product({ title, price }) {
  return (
    <div>
      <p style={{ size: "28px", fontWeight: "bold" }}>
        {title}
        <span style={{ size: "24px", fontWeight: "normal" }}> ${price}</span>
      </p>
    </div>
  );
}
