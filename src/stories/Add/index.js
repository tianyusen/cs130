import React, { Component } from 'react';
import './style.css';

class Add extends Component {
    render() {
        return (
            <div className="add-component">
                <button className="btn btn-primary btn-circle">
                    <i className="fa fa-plus"></i>
                </button>
            </div>
        );
    }
}

export default Add;