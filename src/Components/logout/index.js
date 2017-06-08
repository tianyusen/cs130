import React, { Component } from 'react';
import './style.css';

class Logout extends Component {
    render() {
        return (
            <button 
                id = "logout-button"
                type="button" 
                onClick={()=>{
                    this.props.GeneralLogout()
                }} 
                className="btn btn-info btn-lg buttonstyle" >
                Log out
            </button>
        );
    }
}

export default Logout;