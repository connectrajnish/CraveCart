import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => {
    return (<a href='/'>
        <img className="logo" alt="logo" src="https://iconrex.com/wp-content/uploads/2022/02/Spoon-Icon-Black.svg"/>
    </a>)
};
//no need to export title bcz it's use is in header only


//header component
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const {user} = useContext(UserContext);

    //subscribing to store.cart.items
    const cartItems = useSelector(store => store.cart.items);

    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                <li><Link to= '/'>Home</Link></li>
                <li><Link to= '/about'>About</Link></li>
                <li><Link to= '/contact'>Contact</Link></li>
                <li><Link to= '/instamart'>Instamart</Link></li>
                <li><Link to= '/cart'>Cart({cartItems.length})</Link></li>
                <li>{isLoggedIn?<button onClick={()=>{setIsLoggedIn(false)}}>{user.name}</button>:<button onClick={()=>{setIsLoggedIn(true)}}>Log In</button>}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;