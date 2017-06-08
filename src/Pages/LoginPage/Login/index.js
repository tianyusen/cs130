import React, { Component } from 'react';
import './style.css';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            auth_action:'login'
        }
    }

    renderErrorMessage(){
        return(
            <div>
            <p className="text-danger text-center">
                UserID, Password, Identity combination doesn't exist
                <br />
                Please enter again.
            </p>
            </div>
        )
    }

    renderRegister(){
        return (
            <div className = "register-block" id="register-form">
                
                <div className = "input-group" >
                    <span className="input-group-addon"><i className="fa fa-user-o"></i></span>
                    <input 
                        value={this.props.username}
                        onInput={(e)=>this.props.setUsername(e.target.value)}
                        className="form-control" 
                        type="text" 
                        placeholder="123456789" 
                        name="userid"
                    />
                </div>
                <div className = "input-group" >
                    <span className="input-group-addon"><i className="fa fa-key"></i></span>
                    <input 
                        value={this.props.password}
                        onInput={(e)=>this.props.setPassword(e.target.value)}
                        className="form-control" 
                        type="password" 
                        name="password"
                    />
                </div>
                <div className = "login-group">
                    <input
                        onClick={this.props.RegisterSignOut} 
                        className="btn btn-primary btn-block" type="submit" value="Register" id="register"/>
                </div>
            </div>
        )
    }

    renderLogin(){
        return(
            <div className = "sign-in-block" id="signin-form">
                <div>
                    {(()=>{
                        if (this.props.error === true)
                            return this.renderErrorMessage();
                    })()}
                </div>
                <div className = "input-group" >
                    <span className="input-group-addon"><i className="fa fa-user-o"></i></span>
                    <input 
                        value={this.props.username}
                        onInput={(e)=>this.props.setUsername(e.target.value)}
                        className="form-control" 
                        type="text" 
                        placeholder="123456789"
                        name="userid"/>
                </div>
                <div className = "input-group" >
                    <span className="input-group-addon"><i className="fa fa-key"></i></span>
                    <input 
                        value={this.props.password}
                        onInput={(e)=>this.props.setPassword(e.target.value)}
                        className="form-control" 
                        type="password"  
                        name="password"
                    />
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className = "login-group">
                            <input
                                onClick={this.props.PatientSignOut} 
                                className="btn btn-primary btn-block" type="submit" value="Login As Patient" id="login-patient"/>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className = "login-group">
                            <input
                                onClick={this.props.DoctorSignOut} 
                                className="btn btn-primary btn-block" type="submit" value="Login As Doctor"  id="login-doctor"/>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }

    handleAuthActionSwitch(auth_action){
        this.setState({
            auth_action
        })
    }

    render() {
        return (
            <div className="container">
                <div className="login-component">
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">
                        <div className="panel panel-default">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-sm-6">
                                    <a
                                        onClick={()=>this.handleAuthActionSwitch('login')} 
                                        href="#" className={this.state.auth_action === 'login'? 'select':'notselect'} id="login-form-link">Login</a>
                                </div>
                                <div className="col-sm-6">
                                    <a
                                        onClick={()=>this.handleAuthActionSwitch('register')} 
                                        href="# "className={this.state.auth_action === 'register'? 'select':'notselect'} id="register-form-link">Register</a>
                                </div>
                                <hr/>
                            </div>
                        </div>
                        <div className="panel-body">
                            {(()=>{
                                if (this.state.auth_action === 'login')
                                    return this.renderLogin();
                                else if (this.state.auth_action === 'register')
                                    return this.renderRegister();
                            })()}
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