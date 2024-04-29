class ContactClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      phone: props.phone,
      availability: props.availability,
    };
    console.log("Child Component Constructor");
  }
  componentDidMount() {
    console.log("Child Component DidMount");
  }
  changeColor = () => {
    if (this.state.availability === "Yes") {
      this.setState({ availability: "No" });
    } else this.setState({ availability: "Yes" });
  };
  render() {
    console.log("Child Component Rendered");
    return (
      <p>
        Contact Name: {this.state.name}
        <br />
        Contact Phone Number: {this.state.phone}
        <br />
        Available?: {this.state.availability}
        <br />
        <button type="button" onClick={this.changeColor}>
          Change Availability
        </button>
      </p>
    );
  }
}

export default ContactClass;
