import React from "react";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

class Page404Class extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const error = useRouteError();
    return (
      <>
        <h3>
          {error.status} : {error.statusText}
        </h3>
        <Link href="/">
          <a className="">Home</a>
        </Link>
      </>
    );
  }
}

export default Page404Class;
