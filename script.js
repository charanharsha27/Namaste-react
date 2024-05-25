import React from "react";
import ReactDOM from "react-dom/client";

/*
const heading = React.createElement("h1",{
    id:"heading"
},"Hello World from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/

/* Creating react elements with the help of JSX(Javascript syntax for writing react code easier)

const jsxHeading = (<h1 className="heading">Namaste React</h1>);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

*/


//react components
//1. Functional components
const Title = () => {
    return <h1>I am title</h1>
}
const HeadingComponent = () => {
    return <h1>Hello</h1>
};


//component composition
const HeadingComponent1 = () => (
    <div id="container">
        <Title/>  
        <h1 className="heading2">Hello there</h1>
    </div>
);

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<HeadingComponent1 />);