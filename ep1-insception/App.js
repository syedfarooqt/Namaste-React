// //hello world insert using js
// const heading=document.createElement("h1");
// heading.innerHTML="Hello world from javascript !!";
// const root=document.getElementById("root");
//  // const root1=document.querySelector("#root");
// root.appendChild(heading);

//insert hello world using react
const heading = React.createElement("h1", {}, "Hello world from React !");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
