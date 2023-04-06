const Title = () => {
    return (<a href='/'>
        <img className="logo" alt="logo" src="https://iconrex.com/wp-content/uploads/2022/02/Spoon-Icon-Black.svg"/>
    </a>)
};
//no need to export title bcz it's use is in header only


//header component
const Header = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;