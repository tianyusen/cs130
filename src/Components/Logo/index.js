import React, { Component } from 'react';
import './style.css';

class Logo extends Component {
    render() {
        return (
            <div className="logo-component">
                <button className="btn btn-primary btn-logo">
                    <div>Vx</div>
                </button>
            </div>
        );
    }
}

export default Logo;