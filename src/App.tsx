import React,{ Component} from 'react';
import {
    Route,
    BrowserRouter as Router,
} from "react-router-dom";
import Loginornot from './containers/loginornot';
import Login from './containers/login';
import Signin from './containers/signin';
import Signup from './containers/signup';
import Dashboard from './containers/dashboard';
import PartnerApps from './containers/partnerApps';
import History from './containers/history';
import fire from './config/fire';

class App extends Component {
    render(){
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/signin" component={Signin}/>
                    <Route exact path="/signup" component={Signup}/>
                    <Route exact path="/dashboard" component={Dashboard}/>
                    <Route exact path="/partnerApp" component={PartnerApps}/>
                    <Route exact path="/history" component={History}/>
                </div>
            </Router>
        );
    }
}
export default App;
