import React, { Component } from 'react';
import './style.css';

class LargeNameCard extends Component {
    render() {
        return (
            <div className="largeNameCard">
                <div className="name-row">
                    <div className="col-sm-2 avatar-component">
                        <div className="text-left">
                        <font color="Gray"><i className="fa fa-user-circle-o"></i></font>
                        </div>
                    </div>
                    <div className="col-sm-10">
                        <div className="col-sm-10 name-component">
                            <strong>Patient name</strong>
                        </div>
                        <div className="col-sm-10 name-component">
                            123124121
                        </div>
                    </div>
                </div>
                <div className="info-row">
                    <div className="col-sm-2 avatar-component">
                        <div className="text-left">
                        <font color="Gray"><i className="fa fa-birthday-cake"></i></font>
                        </div>
                    </div>
                    <div className="col-sm-10">
                         18
                    </div>
                </div>
                <div className="info-row">
                    <div className="col-sm-2 avatar-component">
                        <div className="text-left">
                        <font color="Gray"><i className="fa fa-calendar"></i></font>
                        </div>
                    </div>
                    <div className="col-sm-10">
                         1994-9-9
                    </div> 
                </div>
            </div>
        );
    }
}

export default LargeNameCard;