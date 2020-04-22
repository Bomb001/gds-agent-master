import React, { Component } from "react";
import fire from "../config/fire";
import Dashboard from "./dashboard";
import Login from "./login";

class Loginornot extends Component{
    constructor(props) {
        super(props)
        this.state = {
            user : {}
        }
    }
    componentDidMount() {
        this.authListener();
    }
    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user)
            {
                this.setState({user})
            }
            else {
                this.setState({user : null})
            }
        })
    }

    render() {
        return (
            <div>
                {this.state.user ? (<Dashboard/>) : (<Login/>)}
            </div>
        )
    }
}
export default Loginornot;