import React from "react";

export default function Story({ count, handleClick }) {
  return (
    <div>
      {count}
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
