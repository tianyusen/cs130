import React, { Component } from 'react';
import './style.css';

class UploadForm extends Component {
    render() {
        return (
            <div className="UploadForm">
                <div className="UploadForm-Title">
                    
                    <div className="UploadForm-Title-Cancel">
                        <i className="fa fa-times UploadForm-Title-Cancel-i" aria-hidden="true"></i>    
                    </div>
                    <div className="UploadForm-Title-Name">Joseph Zhou</div>
                </div>
                <div className="UploadForm-Options">
                    <div className="UploadForm-BP">
                        <div className="UploadForm-BP-Name">Blood Pressure:</div>
                        <input className="UploadForm-BP-Input" type="text" name="BP" value=""/>
                    </div>

                    <div className="UploadForm-BS">
                        <div className="UploadForm-BS-Name">Blood Sugar:</div>
                        <div className="UploadForm-BS-Lower">
                            <input className="UploadForm-BS-Input"  type="text" name="BS" value="100"/>
                            <span className="UploadForm-BS-Unit" >lb</span>
                        </div>
                    </div>

                    <div className="UploadForm-Sex">
                        <div className="UploadForm-Sex-Name">Sex:</div>
                        <div className="UploadForm-Sex-Lower">
                            <div className="UploadForm-Sex-M">
                                <i className="fa fa-male UploadForm-Sex-M-i" aria-hidden="true"></i>    
                                </div>
                            <div className="UploadForm-Sex-F">
                                <i className="fa fa-female UploadForm-Sex-F-i" aria-hidden="true"></i>    
                                </div>
                        </div>
                    </div>

                </div>
                <div className="UploadForm-Submit">
                    <div className="UploadForm-Submit-Name">Update</div>
                </div>
            </div>
        );
    }
}

export default UploadForm;

/*
                    <div className="UploadForm-Stats-BS">
                        <i className="fa fa-user-circle UploadForm-Stats-BS-Avatar" aria-hidden="true"></i>
                    </div>
                    
                    <div className="UploadForm-Stats-BF"></div>
*/ 