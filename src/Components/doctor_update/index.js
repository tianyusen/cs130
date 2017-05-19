import React, { Component } from 'react';
import './style.css';

class PatientSignUp extends Component {
    constructor(props){
        super(props);
        this.state={
            personal_id:"xiangtao1995@gmail.com",
            token:"12312fsdf2131321321",
            name:"taoxiang",
            birthday:"1995-11-24",
            last_visit:"2015-10-04",
            height:180,
            weight:62,

            DR_time:"2017-03-34-10-12",
            DR_left_score:4,
            DR_right_score:3,
            DR_left_photo:"http://s3.us.1231231313",
            DR_right_photo:"http://s3.us.1231231313",
            DR_right_note:"its really bad",
            DR_left_note:"its good",
            
            blood_fat_time:"2017-03-34-10-12",
            blood_fat:0.12,
            blood_pressure_time:"2017-03-34-10-12",
            blood_pressure_high:120,
            blood_pressure_low:80,
            blood_sugar_time:"2017-03-34-10-12",
            blood_sugar:14.32,

            visits:{
             visit_time:"2017-03-34-10-12",
             follow_up_time:"2018-03-34-10-12",
             Note:"you gotta eat an apple a day",
             drug_use:[{
                 drug:"xxx1",
                 dose:"1 pill per day",
                 length:"1 year"
                },{
                 drug:"xxx2",
                 dose:"2 pill per day",
                 length:"2 year"
                 }]},
            submitClass : " UploadForm-Submit-Name-Default UploadForm-Submit-Name-Base noselect"
            
        }
        this.submitClick = this.submitClick.bind(this);
        this.submitHover = this.submitHover.bind(this);
        this.submitDefault = this.submitDefault.bind(this);
        this.submitMousDown=this.submitMousDown.bind(this);
        this.classNameSex=this.classNameSex.bind(this);
    }

    submitClick(){
    this.submitHover()
    console.log('personal_id:'+ this.state.personal_id +'\n'+
    'pass_word:'+ this.state.pass_word +'\n'+
    'name:'+ this.state.name +'\n'+
    'birthday:'+ this.state.birthday +'\n'+
    'height:'+ `${this.state.height}`+'\n'+
    'weight:'+ `${this.state.weight}` +'\n'+
    'sex:'+ this.state.sex +'\n')}
    

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

                    <div className="UploadForm-FixedItem noselect">ID:{` ${this.state.personal_id}`}</div>
                    <div className="UploadForm-FixedItem noselect">Name:{` ${this.state.name}`}</div>
                    <div className="UploadForm-FixedItem noselect">DOB:{` ${this.state.birthday}`}</div>
                    <div className="UploadForm-FixedItem noselect">Last Visit:{` ${this.state.last_visit}`}</div>

                    <div className="UploadForm-Item">
                        <div className="UploadForm-Item-Name noselect">Height:</div>
                        <div className="UploadForm-Item-Lower">
                            <input className="UploadForm-Item-Input "  type="text"name="height" 
                            value={this.state.height}
                            onInput={(e)=>this.setState({height: e.target.value})} />
                            <span className="UploadForm-Item-Unit noselect" >cm</span>
                        </div>
                    </div>

                    <div className="UploadForm-Item">
                        <div className="UploadForm-Item-Name noselect">Weight:</div>
                        <div className="UploadForm-Item-Lower">
                            <input className="UploadForm-Item-Input"  type="text" name="weight" 
                            value={this.state.weight}
                            onInput={(e)=>this.setState({weight: e.target.value})} />
                            <span className="UploadForm-Item-Unit noselect" >kg</span>
                        </div>
                    </div>

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

                    <div className="UploadForm-IP">
                        <div className="UploadForm-Item-Name noselect">Images and Prescription:</div>
                        <div className="UploadForm-IP-Lower">
                            <span className="UploadForm-IP-Default noselect" >DR(left)<br/>No Data</span>
                            <span className="UploadForm-IP-Default noselect" >DR(right)<br/>No Data</span>
                            <span className="UploadForm-IP-Default noselect" >Prescription<br/>No Data</span>
                        </div>
                    </div>



                </div>
                <div className="UploadForm-Submit">
                    <div className={this.state.submitClass}
                    onClick={this.submitClick}
                    onMouseDown={this.submitMousDown}
                    onMouseOver={this.submitHover}
                    onMouseLeave={this.submitDefault}
                    >Update</div>
                </div>
            </div>
        );
    }
}

export default PatientSignUp;

/*
                    <div className="UploadForm-Stats-Item">
                        <i className="fa fa-user-circle UploadForm-Stats-Item-Avatar" aria-hidden="true"></i>
                    </div>
                    
                    <div className="UploadForm-Stats-BF"></div>
*/ 