import React, { Component } from 'react';
import './style.css';

class PatientCard extends Component {
    render() {
        return (
            <div className="PatientCard">
                <div className="PatientCard-Profile">
                    <input className="PatientCard-Profile-Input" type="text" name="firstname"/>
                </div>
                <div className="PatientCard-Stats">
                    <div className="PatientCard-Stats-BS">
                        <i className="fa fa-user-circle PatientCard-Stats-BS-Avatar" aria-hidden="true"></i>
                    </div>
                    <div className="PatientCard-Stats-BP"></div>
                    <div className="PatientCard-Stats-BF"></div>
                </div>
            </div>
        );
    }
}

export default PatientCard;