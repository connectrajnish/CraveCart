import { Link, Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import React, { useContext, useEffect, useState } from "react";

import UserContext from "../utils/UserContext";

const About = () => {
    let {user} = useContext(UserContext);
    const[userInfo, setUserInfo] = useState(user);
    useEffect(()=>{user:userInfo},[userInfo]);
    return (
        <div>
            <h1>About Us</h1>
            <div>
                <p>{user.name}</p>
                <p><input value={userInfo.name} onChange={
                    e => {
                        setUserInfo({
                            name: e.target.value,
                            email: userInfo.email
                        })
                        // ,
                        // <UserContext.Provider value={{
                        //     name: e.target.value,
                        //     email: userInfo.email
                        // }}/>
                    }
                }></input></p>
                <p><input 
                        value={userInfo.email}
                            onChange={
                                e => {
                                    setUserInfo({
                                        name: userInfo.name,
                                        email: e.target.value
                                    })
                                }}></input></p>
            </div>

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