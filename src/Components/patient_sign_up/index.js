import React, { Component } from 'react';
import './style.css';

class PatientSignUp extends Component {
    constructor(props){
        super(props);
        this.state={
            personal_id:"xiangtao1995@gmail.com",
            pass_word:"123456674",
            name:"taoxiang",
            birthday:"19951124",
            height:180,
            weight:62,
            sex:"male",
            token:"12312fsdf2131321321",
            submitClass : " UploadForm-Submit-Name-Default UploadForm-Submit-Name-Base noselect",
            
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
                    
                    
                    <div className="UploadForm-Title-Cancel"
                    onClick={()=>{
                        this.props.patientSignUp()
                    }} >
                        <i className="fa fa-times UploadForm-Title-Cancel-i" aria-hidden="true"></i>    
                    </div>
                    <div className="UploadForm-Title-Name noselect">New Patient</div>
                </div>
                <div className="UploadForm-Options">
                    {/*Items starts here*/}
                    <div className="UploadForm-Item">
                        <div className="UploadForm-Item-Name noselect">Username:</div>
                        <div className="UploadForm-Item-Lower">
                            <input className="UploadForm-Item-Input"  type="text"  name="personal_id" 
                            value={this.state.personal_id}
                            onInput={(e)=>this.setState({personal_id: e.target.value})} />
                            <span className="UploadForm-Item-Unit" ></span>
                        </div>
                    </div>

                    <div className="UploadForm-Item">
                        <div className="UploadForm-Item-Name noselect">Password:</div>
                        <div className="UploadForm-Item-Lower">
                            <input className="UploadForm-Item-Input"  type="text" name="pass_word" 
                            value={this.state.pass_word}
                            onInput={(e)=>this.setState({pass_word: e.target.value})} />
                        </div>
                    </div>

                    <div className="UploadForm-Item">
                        <div className="UploadForm-Item-Name noselect">Name:</div>
                        <div className="UploadForm-Item-Lower">
                            <input className="UploadForm-Item-Input"  type="text" name="name" 
                            value={this.state.name}
                            onInput={(e)=>this.setState({name: e.target.value})} />
                            <span className="UploadForm-Item-Unit" ></span>
                        </div>
                    </div>

                    <div className="UploadForm-Item">
                        <div className="UploadForm-Item-Name noselect">Birth Date:</div>
                        <div className="UploadForm-Item-Lower">
                            <input className="UploadForm-Item-Input Birthday"  type="text" name="birthday" 
                            value={this.state.birthday}
                            onInput={(e)=>this.setState({birthday: e.target.value})} />
                            <span className="BirthdayUnit noselect" >YYYYMMDD</span>
                        </div>
                    </div>

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

                    <div className="UploadForm-Sex" >
                        <div className="UploadForm-Item-Name noselect">Sex:</div>
                        <div className="UploadForm-Sex-Lower">
                            <div className= {this.classNameSex("male")}
                                onClick={(e)=>this.setState({sex:"male"})}>
                                <i className="fa fa-male UploadForm-Sex-M-i" aria-hidden="true"></i>    
                                </div>
                            <div className={this.classNameSex("female")}
                                onClick={(e)=>this.setState({sex:"female"})}>
                                <i className="fa fa-female UploadForm-Sex-F-i" aria-hidden="true"></i>    
                                </div>
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

export default PatientSignUp;

/*
                    <div className="UploadForm-Stats-Item">
                        <i className="fa fa-user-circle UploadForm-Stats-Item-Avatar" aria-hidden="true"></i>
                    </div>
                    
                    <div className="UploadForm-Stats-BF"></div>
*/ 