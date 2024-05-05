import React from "react";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "  constructor");
  }
  componentDidMount() {
    console.log(name + "  component  did  mounted");
  }
  render() {
    console.log(this.props.name + " render");
    return (
      <div>
        <h1>Contact Us</h1>
        <h2>contact us for any Details </h2>
      </div>
    );
  }
}

export default ContactUs;
