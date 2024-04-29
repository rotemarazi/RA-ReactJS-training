import { Container } from "react-bootstrap";
import withImportantStyle from "react-with-important-style";
import ContactUsClass from "./ContactUsClass";

export default function ContactUs() {
  return (
    <div className="container">
      <div className="card-left">
        <h1 className="item-title">Contact Us</h1>
        <ContactUsClass />
      </div>
    </div>
  );
}
