import React, { Component } from 'react';
import './style.css';

class LargeNameCard extends Component {
    render() {
        return (
            <div className="largeNameCard">
                <div className="name-row">
                    <div className="icon-block">
                        <div className="text-left">
                        <font color="Gray"><i className="fa fa-user-circle-o"></i></font>
                        </div>
                    </div>
                    <div className="info-block">
                        <div className="col-sm-10 name-component">
                            <strong>Patient name</strong>
                        </div>
                        <div className="col-sm-10 name-component">
                            123124121
                        </div>
                    </div>
                </div>
                <div className="info-row">
                    <div className="icon-block">
                        <div className="text-left">
                        <font color="Gray"><i className="fa fa-birthday-cake"></i></font>
                        </div>
                    </div>
                    <div className="info-block">
                         18
                    </div>
                </div>
                <div className="info-row">
                    <div className="icon-block">
                        <div className="text-left">
                        <font color="Gray"><i className="fa fa-calendar"></i></font>
                        </div>
                    </div>
                    <div className="info-block">
                         1994-9-9
                    </div> 
                </div>
            </div>
        );
    }
}

export default LargeNameCard;