import React, { Component } from 'react';
import './style.css';

class NameCard extends Component {
    render() {
        return (
            <div className="namecard-component">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-xs-2">
                                <div className="text-left" id="userphoto">
                                <font color="Gray"><i className="fa fa-user-circle-o"></i></font>
                                </div>
                            </div>
                            <div className="col-xs-10">
                                <div className="row">
                                    <div className="col-xs-10 name-component" id="username">
                                        <strong>{this.props.name}</strong> {this.props.id}
                                    </div>
                                    <div className="col-xs-2 id-component">
                                        <div className="text-right">
                                            <font color="skyblue"><i className="fa fa-paper-plane"></i></font>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-8 birthday-component" id="userbirthday">
                                        <div className="text-left">
                                        <i className="fa fa-calendar"></i> {this.props.birthday}
                                        </div>
                                    </div>
                                    <div className="col-xs-4 year-component" id="userage">
                                        <div className="text-right">
                                        <i className="fa fa-birthday-cake"></i> {`${this.props.age}`}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <br/>

                        <div className="row">
                            <div className="col-xs-5">
                                <div className="row" id="userbp"><font color="skyblue"><strong>{`${this.props.blood_pressure_high}/${this.props.blood_pressure_low}`}</strong></font> mmHg
                                </div>
                                <div className="row ">
                                    <font color="#C8C8C8"><lighter>Blood Pressure</lighter></font>
                                </div>
                            </div>
                            <div className="col-xs-4">
                                
                                <div className="row" id="userbs"><font color="skyblue"><strong>{this.props.blood_sugar}</strong></font> Kg
                                </div>
                                <div className="row">
                                <font color="#C8C8C8"><lighter>Blood Sugar</lighter></font> 
                                </div>

                            </div>
                            
                            <div className="col-xs-3">
                                
                                <div className="row" id="userbf"><font color="skyblue"><strong>{this.props.blood_fat}</strong></font> Kg
                                </div>
                                <div className="row">
                                    <font color="#C8C8C8"><lighter>Blood Fat</lighter></font>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NameCard;