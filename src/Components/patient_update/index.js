import React, { Component } from 'react';
import './style.css';

class PatientUpdate extends Component {
    constructor(props){
        super(props);
        this.state={
            personal_id:"xiangtao1995@gmail.com",
            blood_sugar:132,
            blood_fat:0.3,
            blood_pressure_high:139,
            blood_pressure_low:80,
            submitClass : " UploadForm-Submit-Name-Default UploadForm-Submit-Name-Base noselect",
            
        }
        this.submitClick = this.submitClick.bind(this);
        this.submitHover = this.submitHover.bind(this);
        this.submitDefault = this.submitDefault.bind(this);
        this.submitMousDown=this.submitMousDown.bind(this);
        this.classNameSex=this.classNameSex.bind(this);
    }

    submitClick(){
    var d = new Date();
    this.submitHover()
    console.log('personal_id:'+ this.state.personal_id +'\n'+
    'blood_sugar:'+ this.state.blood_sugar +'\n'+
    'blood_fat:'+ this.state.blood_fat +'\n'+
    'blood_pressure_high:'+ this.state.blood_pressure_high +'\n'+
    'blood_pressure_low:'+ `${this.state.blood_pressure_low}`+'\n'+
    'Date: '+d.getDate() + '-'+ d.getMonth()+ '-'+ d.getFullYear() + '-'+d.getHours() + ':'+d.getMinutes() + ':'+d.getSeconds()
    )}
    

    submitHover()
    {this.setState({submitClass: "UploadForm-Submit-Name-Base UploadForm-Submit-Name-Mouseover noselect"})}

    submitDefault()
    {this.setState({submitClass: "UploadForm-Submit-Name-Base UploadForm-Submit-Name-Default noselect"})}

    submitMousDown()
    {
        this.setState({submitClass: "UploadForm-Submit-Name-Base UploadForm-Submit-Name-Click noselect"})
    }

    classNameSex(sex)
    {
        if (this.state.sex != sex)
        {
            return "UploadForm-Sex-Default"
        }
        return "UploadForm-Sex-Default UploadForm-Sex-Selected"
    }



    render() {
        return (
            <div className="UploadForm">
                <div className="UploadForm-Title">
                    
                    
                    <div className="UploadForm-Title-Cancel">
                        <i className="fa fa-times UploadForm-Title-Cancel-i" aria-hidden="true"></i>    
                    </div>
                    <div className="UploadForm-Title-Name noselect">New Record</div>
                </div>
                <div className="UploadForm-Options">
                    {/*Items starts here*/}
                    <div className="UploadForm-Item">
                        <div className="UploadForm-Item-Name noselect">Blood Sugar:</div>
                        <div className="UploadForm-Item-Lower">
                            <input className="UploadForm-Item-Input"  type="text"  name="blood_sugar" 
                            value={this.state.blood_sugar}
                            onInput={(e)=>this.setState({blood_sugar: e.target.value})} />
                            <span className="UploadForm-Item-Unit" >Un</span>
                        </div>
                    </div>

                    <div className="UploadForm-Item">
                        <div className="UploadForm-Item-Name noselect">Blood Fat:</div>
                        <div className="UploadForm-Item-Lower">
                            <input className="UploadForm-Item-Input"  type="text" name="blood_fat" 
                            value={this.state.blood_fat}
                            onInput={(e)=>this.setState({blood_fat: e.target.value})} />
                            <span className="UploadForm-Item-Unit" >Un</span>
                        </div>
                    </div>

                    <div className="UploadForm-Item">
                        <div className="UploadForm-Item-Name noselect">Blood Presure (High):</div>
                        <div className="UploadForm-Item-Lower">
                            <input className="UploadForm-Item-Input"  type="text" name="blood_pressure_high" 
                            value={this.state.blood_pressure_high}
                            onInput={(e)=>this.setState({blood_pressure_high: e.target.value})} />
                            <span className="UploadForm-Item-Unit" >Un</span>
                        </div>
                    </div>

                    <div className="UploadForm-Item">
                        <div className="UploadForm-Item-Name noselect">Blood Presure (Low):</div>
                        <div className="UploadForm-Item-Lower">
                            <input className="UploadForm-Item-Input Birthday"  type="text" name="blood_pressure_low" 
                            value={this.state.blood_pressure_low}
                            onInput={(e)=>this.setState({blood_pressure_low: e.target.value})} />
                            <span className="UploadForm-Item-Unit noselect" >Un</span>
                        </div>
                    </div>

        

                </div>
                <div className="UploadForm-Submit">
                    <div className={this.state.submitClass}
                    onClick={this.submitClick}
                    onMouseDown={this.submitMousDown}
                    onMouseOver={this.submitHover}
                    onMouseLeave={this.submitDefault}
                    >Register</div>
                </div>
            </div>
        );
    }
}

export default PatientUpdate;

/*
                    <div className="UploadForm-Stats-Item">
                        <i className="fa fa-user-circle UploadForm-Stats-Item-Avatar" aria-hidden="true"></i>
                    </div>
                    
                    <div className="UploadForm-Stats-BF"></div>
*/ 