import React, { Component } from 'react';
import './style.css';

class PatientSignUp extends Component {
    constructor(props){
        super(props);
        this.state={
            drug_use:[{
                 drug:"xxx1",
                 dose:"1 pill per day",
                 len:"1 year"
                },{
                 drug:"xxx2",
                 dose:"2 pill per day",
                 len:"2 year"
                }],
                submitClass : "Prescription-Submit-Name-Default Prescription-Submit-Name-Base noselect",
        }

        this.setState({left: props.left});
        this.submitClick = this.submitClick.bind(this);
        this.submitHover = this.submitHover.bind(this);
        this.submitDefault = this.submitDefault.bind(this);
        this.submitMousDown=this.submitMousDown.bind(this); 
        
    }

    submitClick(){
    this.submitHover()
    console.log('personal_id:'+ this.state.personal_id +'\n'+
    'pass_word:'+ this.state.pass_word +'\n'+
    'name:'+ this.state.name +'\n'+
    'birthday:'+ this.state.birthday +'\n'+
    'height:'+ `${this.state.height}`+'\n'+
    'weight:'+ `${this.state.weight}` +'\n'+
    'sex:'+ this.state.sex +'\n')
    }
    
    submitHover()
    {this.setState({submitClass: "Prescription-Submit-Name-Base Prescription-Submit-Name-Mouseover noselect"})}

    submitDefault()
    {this.setState({submitClass: "Prescription-Submit-Name-Base Prescription-Submit-Name-Default noselect"})}

    submitMousDown()
    {this.setState({submitClass: "Prescription-Submit-Name-Base Prescription-Submit-Name-Click noselect"})}

    renderDrug(input)
    {
        return(
                <div className="Prescription-Item">
                    <div className="Prescription-Item-Sub noselect">
                        <div className="Prescription-Item-Left noselect">
                            <div className="Prescription-Item-Text noselect">{input.drug}</div>
                            <div className="Prescription-Item-Text noselect">{input.dose}</div>
                            <div className="Prescription-Item-Text noselect">{input.len}</div>
                        </div>
                        <div className="Prescription-Item-Right noselect">
                            <div className="Prescription-Item-Text noselect">Edit</div>
                            <div className="Prescription-Item-Text noselect">Remove</div>
                        </div>
                    </div>
                </div>
        )
    }

    renderDrugList()
    {
        return this.state.drug_use
        .map((record)=>{
            this.renderDrug(record)
        })
    }


    render() {
        return (
            <div className="Prescription">
                <div className="Prescription-Title">
                    
                    <div className="Prescription-Title-Cancel">
                        <i className="fa fa-times Prescription-Title-Cancel-i noselect" aria-hidden="true"></i>    
                    </div>
                    <div className="Prescription-Title-Name noselect">{"Prescriptions"}</div>
                </div>
                <div className="Prescription-Options">
                    {/*Items starts here*/}
                    {this.renderDrug(this.state.drug_use[0])}
                    {this.renderDrug(this.state.drug_use[1])}
                    {this.renderDrugList()}
                    {this.state.drug_use
                        .map((record)=>{
                        this.renderDrug(record)
                        })}
                

                </div>

                <div className="Prescription-Submit">
                    <div className={this.state.submitClass}
                    onClick={this.submitClick}
                    onMouseDown={this.submitMousDown}
                    onMouseOver={this.submitHover}
                    onMouseLeave={this.submitDefault}
                    >Save</div>
                </div>
            </div>
        );
    }
}

export default PatientSignUp;
