import React, { Component } from 'react';
import './style.css';
import DrugEdit from '../../Components/drug_edit';

class DoctorUpdateDrugs extends Component {
    constructor(props){
        super(props);
        this.state={
            follow_up:props.visits.follow_up_time,
            notes:props.visits.Note,
            drug_use:props.visits.drug_use,
            page:"base",
            submitClass : "Prescription-Submit-Name-Default Prescription-Submit-Name-Base noselect",
            uniqueKey:0,
            left: props.left
        }
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
    var info ={ 
        prescription:true,
        visits:{
             visit_time:"",
             follow_up_time: this.state.follow_up,
             Note:this.state.notes,
             drug_use:this.state.drug_use}};
    this.props.saveInfo(info);
    }
    
    submitHover()
    {this.setState({submitClass: "Prescription-Submit-Name-Base Prescription-Submit-Name-Mouseover noselect"})}

    submitDefault()
    {this.setState({submitClass: "Prescription-Submit-Name-Base Prescription-Submit-Name-Default noselect"})}

    submitMousDown()
    {this.setState({submitClass: "Prescription-Submit-Name-Base Prescription-Submit-Name-Click noselect"})}

    renderDrug(input, index)
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
                            <div className="Prescription-Item-Text noselect pointer_hover" onClick={()=>{this.setState({page:index})}}>Edit</div>
                            <div className="Prescription-Item-Text noselect pointer_hover" onClick={()=>{this.state.drug_use.splice(index,1), this.forceUpdate()}}>Remove</div>
                        </div>
                    </div>
                </div>
        )
    }

    renderAddDrug()
    {
            return(
                <div className="Prescription-Item">
                   <div className="Prescription-AddDrug noselect pointer_hover" 
                   onClick={()=>{this.setState({ 
                        drug_use: this.state.drug_use.concat([{
                        drug:"New Drug",
                        dose:"Dosage",
                        len:"Length"
                        }])
                    })}}> 
                     Add New Drug
                    </div>
                </div>
        ) 
    }

    renderDrugList()
    {
        return this.state.drug_use
        .map((record, index)=>{
            return this.renderDrug(record, index)
        })
    }

    timeChange = (dateString, { dateMoment, timestamp }) => {
        console.log(dateString)
    }

    renderFollowUp()
    {
        return(
            <div className="Prescription-Item-Time">
                    <div className="Prescription-Item-Name noselect">Follow Up Appointment:</div>
                    <div className="Prescription-Item-Lower">
                        <input className="Prescription-Item-Input "  type="text"name="followup" placeholder="yyyy-mm-dd-hr-mi (24hr)"
                            value={this.state.follow_up}
                            onInput={(e)=>this.setState({follow_up: e.target.value})} />
                    </div>  
            </div>
        )
    }

    renderNotes()
    {
        return(
            <div className="Prescription-Note">
                        <div className="Prescription-Item-Name noselect">Notes:</div>
                        <div className="Prescription-Note-Lower">
                            <textarea className="Prescription-Note-Input "  type="text"name="note" 
                            value={this.state.len}
                            onInput={(e)=>this.setState({len: e.target.value})} />
                        </div>
                    </div>
        )
    }

    renderBase()
    {
        return (
            <div className="Prescription">
                <div className="Prescription-Title">
                    
                    <div className="Prescription-Title-Cancel">
                        <i className="fa fa-times Prescription-Title-Cancel-i noselect" aria-hidden="true"onClick={()=>{this.props.cancelBack()}}></i>    
                    </div>
                    <div className="Prescription-Title-Name noselect">{"Prescriptions"}</div>
                </div>
                <div className="Prescription-Option-over">
                <div className="Prescription-Options">
                    {/*Items starts here*/}
                    {this.renderFollowUp()}
                    {this.renderNotes()}
                    <div className="Prescription-Item-Name noselect">List of Drugs:</div>
                    {this.renderDrugList()}
                    {this.renderAddDrug()}

                </div></div>

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

    renderEdit(m_index)
    {
        return (
            <DrugEdit
            key = {this.state.uniqueKey}
            m_index = {m_index}
            drug = {this.state.drug_use[m_index].drug}
            dose = {this.state.drug_use[m_index].dose}
            len = {this.state.drug_use[m_index].len}
            cancelBack ={this.cancelBack.bind(this)} 
            saveInfo = {this.saveInfo.bind(this)}
        />)
    }

    cancelBack()
    {
        this.setState({page:"base"})
        this.setState({uniqueID:this.state.uniqueID+1});
    }

    saveInfo(m_index,drug,dose,len)
    {
        var newDrug = {
            drug:drug,
            dose:dose,
            len:len
        }
        var newdrugs = this.state.drug_use.slice();
        newdrugs[m_index] = newDrug;
        this.setState({drug_use:newdrugs});
    }

    render() {
        if(this.state.page == "base")
        {
            return this.renderBase();
        }
        if(this.state.page != "base")
        {
            return this.renderEdit(this.state.page);
        }
    }
}

export default DoctorUpdateDrugs;
