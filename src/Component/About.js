import { Component } from "react";
import User from "./User";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent mounted");
    //api call
  }
  render() {
    console.log("parent render");
    return (
      <div className="aboutUs">
        <h1>About US</h1>
        <p>This is React js Project</p>

        <User
          name={"farooq (class component)"}
          location="bangalore"
          contact="98"
        />
      </div>
    );
  }
}

export default About;
