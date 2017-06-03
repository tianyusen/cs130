import React, { Component } from 'react';
import './style.css';


class DrugEdit extends Component {
    constructor(props){
        super(props);
        this.state={
            m_index:props.m_index,
            drug:props.drug,
            dose:props.dose,
            len:props.len,
            submitClass : "DrugEdit-Submit-Name-Default DrugEdit-Submit-Name-Base noselect",
            left: props.left
        }

        this.submitClick = this.submitClick.bind(this);
        this.submitHover = this.submitHover.bind(this);
        this.submitDefault = this.submitDefault.bind(this);
        this.submitMousDown=this.submitMousDown.bind(this); 
        
    }

    submitClick(){
    this.submitHover()
    this.props.saveInfo(this.state.m_index,this.state.drug,this.state.dose,this.state.len);
    this.props.cancelBack();
    }
    
    submitHover()
    {this.setState({submitClass: "DrugEdit-Submit-Name-Base DrugEdit-Submit-Name-Mouseover noselect"})}

    submitDefault()
    {this.setState({submitClass: "DrugEdit-Submit-Name-Base DrugEdit-Submit-Name-Default noselect"})}

    submitMousDown()
    {this.setState({submitClass: "DrugEdit-Submit-Name-Base DrugEdit-Submit-Name-Click noselect"})}


    render() {
        return (
            <div className="DrugEdit">
                <div className="DrugEdit-Title">
                    
                    <div className="DrugEdit-Title-Cancel">
                        <i className="fa fa-times DrugEdit-Title-Cancel-i noselect" aria-hidden="true"onClick={()=>{this.props.cancelBack()}}></i>    
                    </div>
                    <div className="DrugEdit-Title-Name noselect">{"Edit Prescription Item"}</div>
                </div>

                <div className="DrugEdit-Options">

                    <div className="DrugEdit-Note">
                        <div className="DrugEdit-Item-Name noselect">Drug Name:</div>
                        <div className="DrugEdit-Note-Lower">
                            <textarea className="DrugEdit-Note-Input "  type="text"name="drug" 
                            value={this.state.drug}
                            onInput={(e)=>this.setState({drug: e.target.value})} />
                        </div>
                    </div>
                    <div className="DrugEdit-Note">
                        <div className="DrugEdit-Item-Name noselect">Dose:</div>
                        <div className="DrugEdit-Note-Lower">
                            <textarea className="DrugEdit-Note-Input "  type="text"name="dose" 
                            value={this.state.dose}
                            onInput={(e)=>this.setState({dose: e.target.value})} />
                        </div>
                    </div>

                    <div className="DrugEdit-Note">
                        <div className="DrugEdit-Item-Name noselect">Length:</div>
                        <div className="DrugEdit-Note-Lower">
                            <textarea className="DrugEdit-Note-Input "  type="text"name="len" 
                            value={this.state.len}
                            onInput={(e)=>this.setState({len: e.target.value})} />
                        </div>
                    </div>


                </div>

                <div className="DrugEdit-Submit">
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

export default DrugEdit;
