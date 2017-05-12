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
                            <strong>{this.props.name}</strong>
                        </div>
                        <div className="col-sm-10 name-component">
                            {this.props.id}
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
                         {this.props.age}
                    </div>
                </div>
                <div className="info-row">
                    <div className="icon-block">
                        <div className="text-left">
                        <font color="Gray"><i className="fa fa-calendar"></i></font>
                        </div>
                    </div>
                    <div className="info-block">
                         {this.props.birthday}
                    </div> 
                </div>
            </div>
        );
    }
}

export default LargeNameCard;