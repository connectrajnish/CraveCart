import { useState } from "react";

const Title = () => {
    return (<a href='/'>
        <img className="logo" alt="logo" src="https://iconrex.com/wp-content/uploads/2022/02/Spoon-Icon-Black.svg"/>
    </a>)
};
//no need to export title bcz it's use is in header only


function loggedInUser(){
    return true;
}

//header component
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
                <li>{isLoggedIn?<button onClick={()=>{setIsLoggedIn(false)}}>Log Out</button>:<button onClick={()=>{setIsLoggedIn(true)}}>Log In</button>}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;