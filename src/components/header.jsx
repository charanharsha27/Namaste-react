import { useState } from 'react';
import myImage from '../../food_app.jpg';

const Header = () => {
    const [btn,setbtn] = useState("Login"); // using state variable so that when ever a change is made to this variable the dom gets acyually updated by comparing with the previous dom 
    return (
        <div className="header">
            <div className="container">
                <div className="left">
                    <img src={myImage} alt="not found"/>
                </div>
                <div className="navbar">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                        <button style={{padding : '10px'}} onClick={(e) =>{
                            btn === 'Login' ? setbtn("Logout") : setbtn("Login");
                        }}>{btn}</button>
                        {console.log(btn)}
                    </ul>
                </div>

                </div>
        </div>
    );
}

export default Header;