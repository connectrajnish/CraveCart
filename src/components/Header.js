import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => {
    return (<a href='/'>
        <img className="logo" alt="logo" src="https://iconrex.com/wp-content/uploads/2022/02/Spoon-Icon-Black.svg"/>
    </a>)
};
//no need to export title bcz it's use is in header only


//header component
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                <li><Link to= '/'>Home</Link></li>
                <li><Link to= '/about'>About</Link></li>
                <li><Link to= '/contact'>Contact</Link></li>
                <li>Cart</li>
                <li>{isLoggedIn?<button onClick={()=>{setIsLoggedIn(false)}}>Log Out</button>:<button onClick={()=>{setIsLoggedIn(true)}}>Log In</button>}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;