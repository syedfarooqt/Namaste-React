import { useEffect } from "react";

const User = (props) => {
  const { name, location, contact } = props;
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("interaval break");
    }, 500);
    return () => {
      console.log("interval closed");
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="user">
      <h2>User Function Tab</h2>
      <h3>UserName: {name}</h3>
      <h3>location: {location}</h3>
      <h3>contact: {contact}</h3>
    </div>
  );
};

export default User;
