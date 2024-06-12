import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "hi");

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// console.log("heading" , heading)

const reactComponent = (
  <div>
    This is ReactComponent
  </div>
)

const Heading = () =>{
  return (
    <h1>
       { reactComponent}
      React Basic
    </h1>
  )
}
let x=1000;

const FunctionComponent = function ()
{
  return (
  
    <h1 id="container"> 
      {console.log("x" ,x)}
       
       {Heading()}
      this is FunctionComponent
      </h1>
  )
}

root.render(FunctionComponent())