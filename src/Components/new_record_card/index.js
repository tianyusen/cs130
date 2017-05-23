import React, { Component } from 'react';
import './style.css';

class NewRecordCard extends Component {
    render() {
        return (
            <div className="newRecordCard">
                <div className="icon-newRecord">
                    <font color="Gray"><i className="fa fa-upload"></i></font>
                </div>
                <div className="text-newRecord">Upload New <br/> Biometrics Data
                </div>
            </div>
        );
    }
}

export default NewRecordCard;