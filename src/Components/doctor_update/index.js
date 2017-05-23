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
                 len:"1 year"
                },{
                 drug:"xxx2",
                 dose:"2 pill per day",
                 len:"2 year"
                 }]},
            submitClass : " UploadForm-Submit-Name-Default UploadForm-Submit-Name-Base noselect",
            DBleftClass: "UploadForm-IP-Base UploadForm-IP-Default noselect",
            DBrightClass: "UploadForm-IP-Base UploadForm-IP-Default noselect",
            prescriptionClass: "UploadForm-IP-Base UploadForm-IP-Default noselect",
            DBleft:true,
            DBright:false,
            Prescription:false

        }

        this.submitClick = this.submitClick.bind(this);
        this.submitHover = this.submitHover.bind(this);
        this.submitDefault = this.submitDefault.bind(this);
        this.submitMousDown=this.submitMousDown.bind(this);

        this.DBleftClick = this.DBleftClick.bind(this);
        this.DBleftHover = this.DBleftHover.bind(this);
        this.DBleftDefault = this.DBleftDefault.bind(this);
        this.DBleftMousDown=this.DBleftMousDown.bind(this);

        this.DBrightClick = this.DBrightClick.bind(this);
        this.DBrightHover = this.DBrightHover.bind(this);
        this.DBrightDefault = this.DBrightDefault.bind(this);
        this.DBrightMousDown=this.DBrightMousDown.bind(this);

        this.prescriptionClick = this.prescriptionClick.bind(this);
        this.prescriptionHover = this.prescriptionHover.bind(this);
        this.prescriptionDefault = this.prescriptionDefault.bind(this);
        this.prescriptionMousDown=this.prescriptionMousDown.bind(this);
        this.Dataexit = this.Dataexit.bind(this);

        this.DBleftDefault();
        this.submitDefault();
        this.DBrightDefault();
        this.prescriptionDefault();
        
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
    {this.setState({submitClass: "UploadForm-Submit-Name-Base UploadForm-Submit-Name-Click noselect"})}


        DBleftClick()
        {
            this.DBleftHover();
            console.log('Open DBLEFT');
        }
        DBleftHover()
        {this.setState({DBleftClass: "UploadForm-IP-Base UploadForm-IP-Mouseover noselect"})}
        DBleftDefault()
        {
            if(this.state.DBleft)
            {
                this.setState({DBleftClass: "UploadForm-IP-Base UploadForm-IP-Saved noselect"});
                return;
            }
            this.setState({DBleftClass: "UploadForm-IP-Base UploadForm-IP-Default noselect"});
                return;
        }
        DBleftMousDown()
        {this.setState({DBleftClass: "UploadForm-IP-Base UploadForm-IP-Click noselect"})}

        DBrightClick()
        {
            this.DBrightHover();
            console.log('Open DBright');
        }
        DBrightHover()
        {this.setState({DBrightClass: "UploadForm-IP-Base UploadForm-IP-Mouseover noselect"})}
        DBrightDefault()
        {
            if(this.state.DBright)
            {
                this.setState({DBrightClass: "UploadForm-IP-Base UploadForm-IP-Saved noselect"});
                return;
            }
            this.setState({DBrightClass: "UploadForm-IP-Base UploadForm-IP-Default noselect"});
                return;
        }
        DBrightMousDown()
        {this.setState({DBrightClass: "UploadForm-IP-Base UploadForm-IP-Click noselect"})}

        prescriptionClick()
        {
            this.prescriptionHover();
            console.log('Open prescription');
        }
        prescriptionHover()
        {this.setState({prescriptionClass: "UploadForm-IP-Base UploadForm-IP-Mouseover noselect"})}
        prescriptionDefault()
        {
            if(this.state.prescription)
            {
                this.setState({prescriptionClass: "UploadForm-IP-Base UploadForm-IP-Saved noselect"});
                return;
            }
            this.setState({prescriptionClass: "UploadForm-IP-Base UploadForm-IP-Default noselect"});
                return;
        }
        prescriptionMousDown()
        {this.setState({prescriptionClass: "UploadForm-IP-Base UploadForm-IP-Click noselect"})};
    
    Dataexit(arg)
    {
        if(this.state[arg])
        {
            return "Saved";
        }
        return "No Data";
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
                            <div className={this.state.DBleftClass}
                             onClick={this.DBleftClick}
                            onMouseDown={this.DBleftMousDown}
                            onMouseOver={this.DBleftHover}
                            onMouseLeave={this.DBleftDefault}
                             >DR(left)<br/>{this.Dataexit('DBleft')}</div>
                            <div className={this.state.DBrightClass}
                            onClick={this.DBrightClick}
                            onMouseDown={this.DBrightMousDown}
                            onMouseOver={this.DBrightHover}
                            onMouseLeave={this.DBrightDefault}
                             >DR(right)<br/>{this.Dataexit('DBright')}</div>
                            <div className={this.state.prescriptionClass} 
                            onClick={this.prescriptionClick}
                            onMouseDown={this.prescriptionMousDown}
                            onMouseOver={this.prescriptionHover}
                            onMouseLeave={this.prescriptionDefault}
                            >Prescription<br/>{this.Dataexit('prescription')}</div>
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
