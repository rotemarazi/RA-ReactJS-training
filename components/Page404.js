import styles from "../css/404.module.css";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div>
      <h1>{"ERROR 404"}</h1>
      <p>{"The page you're looking for was not found."}</p>
      <Link href="/">
        <a className="">Home</a>
      </Link>
    </div>
  );
}
