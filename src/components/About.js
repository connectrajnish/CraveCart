import { Link, Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import React from "react";

const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <p>From React Course</p>

            {/* <Link to='profile'><Profile/></Link> */}
            {/* intead of outlet we can simply give <Profile/> too */}
            <Outlet/>
            {/* <Profile name = {'Rajnish From Functional Component'}/> */}
            {/* <ProfileClass name = {'Rajnish From Class Component'}/> */}
        </div>
    );
}

// class AboutClass extends React.Component {
//     constructor(){
//         super(props)
        
//     }
//     componentDidMount(){
//         console.log('ComponentDidMount')
//     }
//     render(){
//         return (
//             <div>
//             <h1>About Us</h1>
//             <p>From React Course</p>

//             {/* <Link to='profile'><Profile/></Link> */}
//             {/* intead of outlet we can simply give <Profile/> too */}
//             {/* <Outlet/> */}
//             <Profile name = {'Rajnish From Functional Component'}/>
//             <ProfileClass name = {'Rajnish From Class Component'}/>
//         </div>
//         )
//     }
// }

export default About;