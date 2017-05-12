import React, { Component } from 'react';
import './style.css';

class Add extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="add-component">
                <button 
                    onClick={()=>{
                        this.props.patientSignUp()
                    }}
                    className="btn btn-primary btn-circle">
                    <i className="fa fa-plus"></i>
                </button>
            </div>
        );
    }
}

export default Add;