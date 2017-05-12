import React, { Component } from 'react';
import './style.css';

class NameCard extends Component {
    render() {
        return (
            <div className="namecard-component">
                <div className="panel panel-default">
                    <div className="panel-body">
                <div className="row">
                    <div className="col-sm-2 avatar-component">
                        <div className="text-left">
                        <font color="Gray"><i className="fa fa-user-circle-o"></i></font>
                        </div>
                    </div>
                    <div className="col-sm-10">
                        <div className="row">
                            <div className="col-sm-10 name-component">
                                <strong>{this.props.name}</strong> {this.props.id}
                            </div>
                            <div className="col-sm-2 id-component">
                                <div className="text-right">
                                    <font color="skyblue"><i className="fa fa-paper-plane"></i></font>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-8 birthday-component">
                                <div className="text-left">
                                <i className="fa fa-calendar"></i> {this.props.birthday}
                                </div>
                            </div>
                            <div className="col-sm-4 year-component">
                                <div className="text-right">
                                <i className="fa fa-birthday-cake"></i> {`${this.props.age}`}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br/>

                <div className="row">
                    <div className="col-sm-5">
                        <div className="row"><font color="skyblue"><strong>{`${this.props.blood_pressure_high}/${this.props.blood_pressure_low}`}</strong></font> mmHg
                        </div>
                        <div className="row ">
                            <font color="#C8C8C8"><lighter>Blood Pressure</lighter></font>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        
                        <div className="row"><font color="skyblue"><strong>{this.props.blood_sugar}</strong></font> Kg
                        </div>
                        <div className="row">
                           <font color="#C8C8C8"><lighter>Blood Sugar</lighter></font> 
                        </div>

                    </div>
                    
                    <div className="col-sm-3">
                        
                        <div className="row"><font color="skyblue"><strong>{this.props.blood_fat}</strong></font> Kg
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