import React, { Component } from 'react';
import './style.css';

class Login extends Component {
    contructor(){
        this.state = {
            email:'',
            passWord:''
        }
    }

    onInputChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render() {
        return (
            <div className="container">
                <div className="login-component">
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                        <div className="panel panel-default">
                        <div className = "text-center" >
                            <h4>Log in to your account</h4>
                        </div>
                        <div className = "input-group" >
                            <span className="input-group-addon"><i className="fa fa-user-o"></i></span>
                            <input
                                name="email"
                                onChange={this.onInputChange.bind(this)} 
                                className="form-control" type="text" placeholder="123456789"/>
                        </div>
                        <div className = "input-group" >
                            <span className="input-group-addon"><i className="fa fa-key"></i></span>
                            <input
                                name="passWord" 
                                onChange={this.onInputChange.bind(this)} 
                                className="form-control" type="password" name="password"/>
                        </div>
                        <div className = "login-group">
                            <input
                                onClick={this.props.SignOut} 
                                className="btn btn-primary btn-block" type="submit" value="Login"/>
                        </div>
                        <div className = "login-group">
                            <input
                                onClick={()=>this.props.SignUp(this.state.email, this.state.passWord)} 
                                className="btn btn-primary btn-block" type="submit" value="Sign Up" name="signup"/>
                        </div>

                        </div>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
                </div>
            </div>
        );
    }
}

export default Login;