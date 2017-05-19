import React, { Component } from 'react';
import './style.css';

class PatientSignUp extends Component {
    constructor(props){
        super(props);
        this.state={
            left : true,
            submitClass : " UploadForm-Submit-Name-Default UploadForm-Submit-Name-Base noselect",
            DR_score:0,
            DR_photo:"https://cdn.psychologytoday.com/sites/default/files/blogs/75174/2014/03/146854-149238.jpg",
            DR_note:"its really bad",
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
    if(this.state.left)
    {
        this.props.setState({DR_left_score: this.DR_score});
        this.props.setState({DR_left_photo: this.DR_photo});
        this.props.setState({DR_left_note: this.DR_note});
        return

    }
        this.props.setState({DR_right_score: this.DR_score});
        this.props.setState({DR_right_photo: this.DR_photo});
        this.props.setState({DR_right_note: this.DR_note});
        return
    
    }
    
    submitHover()
    {this.setState({submitClass: "UploadForm-Submit-Name-Base UploadForm-Submit-Name-Mouseover noselect"})}

    submitDefault()
    {this.setState({submitClass: "UploadForm-Submit-Name-Base UploadForm-Submit-Name-Default noselect"})}

    submitMousDown()
    {this.setState({submitClass: "UploadForm-Submit-Name-Base UploadForm-Submit-Name-Click noselect"})}

    windowName()
    {
        if(this.state.left = true)
        {
            return "Left";
        }
        return "Right";
    }

    render() {
        return (
            <div className="UploadForm">
                <div className="UploadForm-Title">
                    
                    
                    <div className="UploadForm-Title-Cancel">
                        <i className="fa fa-times UploadForm-Title-Cancel-i noselect" aria-hidden="true"></i>    
                    </div>
                    <div className="UploadForm-Title-Name noselect">{this.windowName()+" DR Image"}</div>
                </div>
                <div className="UploadForm-Options">
                    {/*Items starts here*/}

                    <div className="UploadForm-Image-Base noselect">
                        <img className="UploadForm-Image-i noselect" src={this.state.DR_photo} alt = "DR Image" />
                    </div>

                    <div className="UploadForm-Item">
                        <div className="UploadForm-Item-Name noselect">DR Image Link:</div>
                        <div className="UploadForm-Item-Lower">
                            <input className="UploadForm-Item-Input "  type="text"name="link" 
                            value={this.state.DR_photo}
                            onInput={(e)=>this.setState({DR_photo: e.target.value})} />
                        </div>
                    </div>

                    <div className="UploadForm-Item">
                        <div className="UploadForm-Item-Name noselect">DR Score:</div>
                        <div className="UploadForm-Item-Lower">
                            <input className="UploadForm-Item-Input "  type="text"name="score" 
                            value={this.state.DR_score}
                            onInput={(e)=>this.setState({DR_score: e.target.value})} />
                        </div>
                    </div>

                    <div className="UploadForm-Note">
                        <div className="UploadForm-Item-Name noselect">Notes:</div>
                        <div className="UploadForm-Note-Lower">
                            <textarea className="UploadForm-Note-Input "  type="text"name="note" 
                            value={this.state.DR_note}
                            onInput={(e)=>this.setState({DR_note: e.target.value})} />
                        </div>
                    </div>

                    


                </div>
                <div className="UploadForm-Submit">
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
