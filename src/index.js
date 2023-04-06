import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

/*
Design layout

Header
    -logo
    -nav items(right side)
    -cart
Body
    -search bar
    -restaurant list
        -restaurant card
            -image
            -name
            -rating
            -cuisine
Footer
    -links
    -copyright
*/





//props is an object which has a parameter named restraunt which was passed as an argument

const AppLayout = () => {
    return (
        <React.Fragment>     
            <Header/>
            <Body/>
            <Footer/>
        </React.Fragment>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);