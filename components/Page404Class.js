import React from "react";
import { Link } from "react-router-dom";

class Page404Class extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Link href="/">Home</Link>
        <h3>No Luck Today :-(</h3>
      </>
    );
  }
}

export default Page404Class;
