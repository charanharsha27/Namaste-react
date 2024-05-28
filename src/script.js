import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/Body";
import Footer from "./components/Footer";

// import food_app from "food_app.jpg";


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



const Applayout = () => {
    return(
        <div className="myApp">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);