import styles from "../css/404.module.css";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";
import Page404Class from "./Page404Class";

export default function Page404() {
  const error = useRouteError();
  return (
    <div className="container">
      <h1>{"ERROR 404"}</h1>
      <p>{"The page you're looking for was not found."}</p>
      <Page404Class />
      <div className="card-left"></div>
    </div>
  );
}
