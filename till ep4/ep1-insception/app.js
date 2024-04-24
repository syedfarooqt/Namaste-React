// //hello world insert using js
// const heading=document.createElement("h1");
// heading.innerHTML="Hello world from javascript !!";
// const root=document.getElementById("root");
//  // const root1=document.querySelector("#root");
// root.appendChild(heading);

//insert hello world using react
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from React !"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//sample nested tag creating for particular html below

//  div#parent>div.child1>div.h1+div.h2^div.child2>div.h1+div.h2

// <div id="parent">
//     <div class="child1">
//         <div class="h1"></div>
//         <div class="h2"></div>
//     </div>
//     <div class="child2">
//         <div class="h1"></div>
//         <div class="h2"></div>
//     </div>
// </div>

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "It is h1 tag "),
    React.createElement("h2", {}, "It is h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "It is h1 tag"),
    React.createElement("h2", {}, "It is h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
