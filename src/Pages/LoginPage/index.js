import React, {Component} from 'react';
import Login from './Login';
import './style.css';
class LoginPage extends Component {
    render() {
        return (
            <div className="login-container">
                <Login/>
            </div>
        );
    }
}

export default LoginPage;