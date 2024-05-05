import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userName: "",
      email: "",
      location: "",
    };
    console.log(this.props.name + "child constructor");
  }

  componentDidMount() {
    console.log(this.props.name + "child mounted");
    this.timer = setInterval(() => {
      console.log("print");
    }, 100);
    this.getUser();
  }
  getUser = async () => {
    const data = await fetch("https://api.github.com/users/syedfarooqt");
    const userDetails = await data.json();
    this.setState({
      userName: userDetails?.login,
      location: userDetails?.location,
      contact: userDetails?.email,
    });
  };

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("componentWillUnmount");
  }

  render() {
    const { count, userName, location, email } = this.state;
    console.log(this.props.name + "child render");
    return (
      <div className="user">
        <h2>User Class Tab</h2>
        <h3>{count}</h3>
        <button
          className="count-btn"
          onClick={(state) => {
            {
              this.setState({ count: count + 1 });
            }
          }}
        >
          increment count
        </button>
        <h3>UserName: {userName}</h3>
        <h3>location: {location} </h3>
        <h3>contact: {email} </h3>
      </div>
    );
  }
}
export default UserClass;
