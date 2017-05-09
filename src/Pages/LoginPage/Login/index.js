import React, { Component } from 'react';
import './style.css';

class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="login-component">
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">
                        <div className="panel panel-default">
                        <div className = "text-center" >
                            <h4>Log in to your account</h4>
                        </div>
                        <div className = "input-group" >
                            <span className="input-group-addon"><i className="fa fa-user-o"></i></span>
                            <input className="form-control" type="text" placeholder="123456789" name="userid"/>
                        </div>
                        <div className = "input-group" >
                            <span className="input-group-addon"><i className="fa fa-key"></i></span>
                            <input className="form-control" type="password" name="password"/>
                        </div>
                        <div className = "login-group">
                            <input className="btn btn-primary btn-block" type="submit" value="Login" name="login"/>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-3"></div>
                </div>
                </div>
            </div>
        );
    }
}

export default Login;