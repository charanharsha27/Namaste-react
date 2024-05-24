import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{
    id:"heading"
},"Hello World from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);



/* creating a nested element.

    <div id="parent">
        <div id="child">
            <h1></h1>
        </div>
    </div>

*/

const parent = React.createElement("div",{
    id:"parent"
},React.createElement("div",{
    id:"child"
},React.createElement("h1",{
    id:"heading"
},
"Hello World from react2")));

console.log(parent); // React Object

const ele = ReactDOM.createRoot(document.getElementById("root1")); // creates a root element to manipulate the dom of element with id = root1.
ele.render(parent); // converts React Object to Html element and renders it to the root1 div.


// props -> attributes and children of an element.


// to create siblings we need to pass an array of elements to the childen prop of the parent element.

const p1 = React.createElement("div",{
    id:"parent"
},React.createElement("div",{
    id:"child"
},[React.createElement("h1",{id:"heading"},"Hello World from react2"),React.createElement("h1",{id:"heading2"},"Hello World from react2")]));

const ele1 = ReactDOM.createRoot(document.getElementById("root2"));
ele1.render(p1); 

