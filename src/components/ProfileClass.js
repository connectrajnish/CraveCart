//profile component using class component

import React from "react";

class ProfileClass extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            count: 0,
            count2: 0
        };
    }
    render(){
        const {count, count2} = this.state;
        return (
            <div>
                <h1>Profile Class Component</h1>
                <h3>Name: {this.props.name}</h3>
                <h3>Count: {this.state.count}</h3>
                <button onClick={()=>{this.setState({count: count+1, count2: count2-1})}}>Count</button>
                <h3>Count2: {this.state.count2}</h3>
            </div>
        )
    }
}
export default ProfileClass;