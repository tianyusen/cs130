import React, { Component } from 'react';
import './style.css';

class Login extends Component {
    render() {
        return (
            <div className = "Login-main">
                <div className = "Login-text" >
                    Log in to your account
                </div>
                <div className = "Login-id" >
                    <input className="Login-id-input" type="text" name="userid"/>
                </div>
                <div className = "Login-password" >
                    <input className="Login-password-input" type="text" name="password"/>
                </div>
                <div className = "Login-button" >
                    <input className="Login-button-input" type="submit" value= "Login" name="login"/>
                </div>
            </div>
        );
    }
}

export default Login;