import React, { Component } from 'react';
import './style.css';

class PatientSignUp extends Component {
    constructor(props){
        super(props);
        this.state={
            left :false,
            submitClass : " DRForm-Submit-Name-Default DRForm-Submit-Name-Base noselect",
            DR_score:0,
            DR_photo:"https://cdn.psychologytoday.com/sites/default/files/blogs/75174/2014/03/146854-149238.jpg",
            DR_note:"its really bad",
        }
        
        
        this.submitClick = this.submitClick.bind(this);
        this.submitHover = this.submitHover.bind(this);
        this.submitDefault = this.submitDefault.bind(this);
        this.submitMousDown=this.submitMousDown.bind(this);  
    }

    componentDidMount() {
        this.setState({left: this.props.left});
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
    var info = [];
    info.prescription = false;
    info.left = this.state.left;
    info.note = this.state.DR_note;
    info.photo = this.state.DR_photo;
    info.score = this.state.DR_score;
    this.props.saveInfo(info);
        return
    
    }
    
    submitHover()
    {this.setState({submitClass: "DRForm-Submit-Name-Base DRForm-Submit-Name-Mouseover noselect"})}

    submitDefault()
    {this.setState({submitClass: "DRForm-Submit-Name-Base DRForm-Submit-Name-Default noselect"})}

    submitMousDown()
    {this.setState({submitClass: "DRForm-Submit-Name-Base DRForm-Submit-Name-Click noselect"})}

    windowName()
    {
        if(this.state.left == true)
        {
            return "Left";
        }
        return "Right";
    }

    render() {
        return (
            <div className="DRForm">
                <div className="DRForm-Title">
                    
                    
                    <div className="DRForm-Title-Cancel">
                        <i className="fa fa-times DRForm-Title-Cancel-i noselect" aria-hidden="true" onClick={()=>{this.props.cancelBack()}}></i>    
                    </div>
                    <div className="DRForm-Title-Name noselect">{this.windowName()+" DR Image"}</div>
                </div>
                <div className="DRForm-Options">
                    {/*Items starts here*/}

                    <div className="DRForm-Image-Base noselect">
                        <img className="DRForm-Image-i noselect" src={this.state.DR_photo} alt="DR Image" />
                    </div>

                    <div className="DRForm-Item">
                        <div className="DRForm-Item-Name noselect">DR Image Link:</div>
                        <div className="DRForm-Item-Lower">
                            <input className="DRForm-Item-Input "  type="text"name="link" 
                            value={this.state.DR_photo}
                            onInput={(e)=>this.setState({DR_photo: e.target.value})} />
                        </div>
                    </div>

                    <div className="DRForm-Item">
                        <div className="DRForm-Item-Name noselect">DR Score:</div>
                        <div className="DRForm-Item-Lower">
                            <input className="DRForm-Item-Input "  type="text"name="score" 
                            value={this.state.DR_score}
                            onInput={(e)=>this.setState({DR_score: e.target.value})} />
                        </div>
                    </div>

                    <div className="DRForm-Note">
                        <div className="DRForm-Item-Name noselect">Notes:</div>
                        <div className="DRForm-Note-Lower">
                            <textarea className="DRForm-Note-Input "  type="text"name="note" 
                            value={this.state.DR_note}
                            onInput={(e)=>this.setState({DR_note: e.target.value})} />
                        </div>
                    </div>

                    


                </div>
                <div className="DRForm-Submit">
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
