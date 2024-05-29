import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./components/About";
import Menu from "./components/Menu"
import Errors from "./components/Error";
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
            <Outlet />
            <Footer/>
        </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <Applayout />,
        errorElement : <Errors />,
        children : [{
            path : "/",
            element : <Body />
        },
        {
            path : "about",
            element : <About />
        },
        {
            path : "/restaurent/:id",
            element : <Menu />
        }
        ]
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);