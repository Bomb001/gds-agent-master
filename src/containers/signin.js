import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import icon from '../img/icon.png';
import singin from '../img/signin.png';
import fire from '../config/fire';
import { TiThSmallOutline } from 'react-icons/ti';
import Loginornot from './loginornot';
class Signin extends Component {
    constructor(props) {
        super(props)
        this.Signin = this.Signin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email : "",
            password : ""
        }
    }
    Signin(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err);
        })
    }
    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return(
            <div className="wrap"><div className="container">
                <div className="singin">
                    <div className="title">
                        <p className="text-center">GDS Agent App</p>
                    </div>
                    <div className="content">
                        <div className="signin">
                            <p className="title">Sing In</p>
                            <img src={icon} alt="SIGNIN"/>
                        </div>
                        <div className="form">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email or Phone Number"
                                required=""
                                onChange={this.handleChange}
                                value={this.state.email}
                            />
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                required=""
                                onChange={this.handleChange}
                                value={this.state.password}
                            />
                            <button className="btn-com btn-m-t">
                                <Link to="/dashboard" className="cl-white" value="dashboard" onClick={this.Signin} >
                                    SIGN IN
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
export default Signin;
