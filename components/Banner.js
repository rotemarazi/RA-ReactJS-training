import { Container } from "react-bootstrap";
import withImportantStyle from "react-with-important-style";

export default function Banner() {
  let MyDiv = withImportantStyle("div");
  return (
    <Container>
      <MyDiv
        style={{ padding: "0px !important" }}
        className="p-5 mb-4 bg-body-tertiary rounded-3"
      >
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Welcome! Start Shopping!</h1>
          <p className="col-md-8 fs-4">
            Shop the most recent products in the market in the best prices and
            fastes shipping services.
          </p>
        </div>
      </MyDiv>
    </Container>
  );
}
