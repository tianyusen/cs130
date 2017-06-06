import React, { Component } from 'react';
import './style.css';

class Logout extends Component {
    render() {
        return (
            <button type="button" onClick={()=>{
                        this.props.GeneralLogout()
                    }} className="btn btn-info btn-lg" >
                Log out
            </button>
        );
    }
}

export default Logout;