import { Container } from "react-bootstrap";
import withImportantStyle from "react-with-important-style";
import ContactClass from "./ContactClass";

class ContactUsClass extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Component Constructor");
  }

  componentDidMount() {
    console.log("Parent Component DidMount");
  }

  render() {
    console.log("Parent Component Rendered");
    return (
      <div className="container">
        <div className="card-left">
          <h2 className="item-title">Contact Us Details</h2>
          <ContactClass
            name={"Rose"}
            phone={"430-6988564"}
            availability={"Yes"}
          />
          <ContactClass
            name={"Andrew"}
            phone={"718-6928564"}
            availability={"Yes"}
          />
        </div>
      </div>
    );
  }
}

export default ContactUsClass;
