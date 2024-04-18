import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function MyHeader() {
  return "Let's keep progressing! :)";
}

function NestedHeader() {
  return (
    <h1>
      Hello session 3, <MyHeader />
    </h1>
  );
}

function NestedHeaderFunctional({ color }) {
  return (
    <h1 style={{ backgroundColor: color }}>Hello session 3 - {MyHeader()}</h1>
  );
}

//Nested header Element using using JSX
//root.render(<NestedHeader />);

//Create a functional component of the same with JSX
// + Pass attributes into the tag in JSX
//root.render(<NestedHeaderFunctional color="Yellow" />);

//Composition of Component(Add a component inside another)
function CustomButton() {
  return <button>I am a child component</button>;
}

function ParentComponent() {
  return (
    <div>
      <p style={{ backgroundColor: "purple", width: "200px", height: "100px" }}>
        <CustomButton />
      </p>
    </div>
  );
}
root.render(<ParentComponent />);
