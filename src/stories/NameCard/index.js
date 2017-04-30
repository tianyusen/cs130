import React, { Component } from 'react';
import './style.css';

class NameCard extends Component {
    render() {
        return (
            <div className="namecard-component">
            <div className="container">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8"></div>
                </div>

                <div className="row">
                    <div className="col-sm-4">
                        <div className="row">
                            120/80 mmHg
                        </div>
                        <div className="row">
                            Blood Pressure
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="row">
                            120/80 mmHg
                        </div>
                        <div className="row">
                            Blood Pressure
                        </div>

                    </div>
                    
                    <div className="col-sm-3">
                        <div className="row">
                            120/80 mmHg
                        </div>
                        <div className="row">
                            Blood Pressure
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default NameCard;