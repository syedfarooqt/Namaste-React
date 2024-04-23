import React from "react";
import ReactDOM from "react-dom/client";

//using create element using react (object)=>passed to render =>html element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React By Farooq 🚀"
);

//same code using jsx
//jsx=>babel convets to react react element(object)=>passed to render =>html element
const jsxHeading = <h1 id="heading">Namaste React By Farooq 🚀 by Jsx</h1>;

//creating functional component -using arrow function without return
const Heading = () => <h1>Heading ARROW Functional Component</h1>;

//normal function
const Heading1 = function val() {
  return <h1>Heading Normal Functional Component</h1>;
};

//using component inside other component - 1st changes arrow way using return
// const Body = () => {
//   return (
//     <div>
//       <Heading />
//       <h1>Namaste REact js functional component</h1>
//     </div>
//   );
// };

//using component inside other component - 2nd way is without return and using ()
//component composition
const Body = () => (
  <div>
    <Heading />
    <Heading1 />
    <h1>Namaste REACT JS Functional omponent</h1>
  </div>
);

//Functional component
const header = () => <h1 id="heading">namaste React Developer</h1>;

// use of {}
//using element inside element using React element
const headerTitle = React.createElement(
  "h1",
  { id: "heading" },
  "Namste React Developer title"
);
const headerSubTitle = React.createElement("h1", { id: "heading" }, [
  headerTitle,
  "Namste React Developer subTitle",
]);

//using element inside component
const HeaderSample = () => (
  <div>
    <h2>{headerTitle}</h2>
    <h1 id="heading">namaste React Developer</h1>
  </div>
);

//using component inside component
const Header1 = () => <h1 id="heading">namaste React Developer</h1>;
const Body1 = () => (
  <div>
    <Header1 />
    <h1 id="body">namaste React body</h1>
  </div>
);

//using component inside element
const Header2 = () => <h1 id="heading">namaste React Developer</h1>;
const subTitle2 = React.createElement("h1", { id: "heading" }, [
  <Header2 />,
  "subTitle",
]);

//React element

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(subTitle2);

//using multiple component in render
// root.render(
//   <div>
//     <Body />
//     <Body />
//   </div>
// );
