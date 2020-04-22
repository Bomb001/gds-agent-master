import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import icon from '../img/icon.png';
import singin from '../img/signin.png';
import fire from '../config/fire';
class Signup extends Component {
    constructor(props) {
        super(props)
        this.Signup = this.Signup.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            name : "",
            phone : "",
            email : "",
            password : ""
        }
    }
    Signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
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
                <div className="singup">
                    <div className="title">
                        <p className="text-center">GDS Agent App</p>
                    </div>
                    <div className="content">
                        <div className="signin">
                            <p className="title">Sing Up</p>
                            <img src={icon} alt="SIGNUP"/>
                        </div>
                        <div className="form">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Name"
                                required=""
                            />
                            <input
                                type="phone"
                                name="phone"
                                id="phone"
                                placeholder="Phone"
                                required=""
                                onChange={this.handleChange}
                                value={this.state.phone}
                            />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
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
                            <input
                                type="cpassword"
                                name="cpassword"
                                id="cpassword"
                                placeholder="Comfirm Password"
                                required=""
                            />
                            <button className="btn-com btn-m-t">
                                <Link to="/signin" className="cl-white" value="dashboard" onClick={this.Signup} >
                                    Sing Up
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
export default Signup;
