import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Profile from "./components/Profile";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import ProfileClass from "./components/ProfileClass";

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
            {/* Outlet will be filled dynamically i.e. conditional routing*/}
            <Outlet/>   
            <Footer/>
        </React.Fragment>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/about',
                element: <About/>,
                children: [
                    {
                        path: 'profile',
                        element: <Profile/>,
                    }
                ]
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/restaurant/:id',
                element:<RestaurantMenu/>
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);