import React from "react";
import UserContext from "./utils/UserContext";

export default class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.userId)
    this.state = {
      count: 0,
      products: [],
    };
    console.log("Child Constructor");
  }

  componentDidMount() {
    console.log("Child Component Did Mount");
  }

  render() {
    console.log("Child Render");
    const handleClick = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={handleClick}>Increment</button>
        <UserContext.Consumer>
          {(user) => user.loggedInUser}
        </UserContext.Consumer>
      </>
    );
  }
}
