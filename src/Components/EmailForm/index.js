import React, { Component } from 'react';
import './style.css';

class EmailForm extends Component {
    constructor(props){
        super(props);
        this.state={
            uniqueID  :0,
            page : 'base',
            receiver_id:"xiangtao1995@gmail.com",
            sender_id:"your email address",
            token:"12312fsdf2131321321",
            sender_name:"First Last",
            title:"",
            message:"Please put your message here.",
            submitClass : " SignupForm-Submit-Name-Default SignupForm-Submit-Name-Base noselect",
           
        }

        this.submitClick = this.submitClick.bind(this);
        this.submitHover = this.submitHover.bind(this);
        this.submitDefault = this.submitDefault.bind(this);
        this.submitMousDown=this.submitMousDown.bind(this);

        this.submitDefault();
        
    }

    submitClick(){
    this.submitHover()
    console.log('receiver_id:'+ this.state.receiver_id +'\n'+
    'sender_id:'+ this.state.sender_id +'\n'+
    'sender_name:'+ this.state.sender_name +'\n'+
    'title:'+ this.state.title +'\n'+
    'message:'+ this.state.message +'\n')}
    
    submitHover()
    {this.setState({submitClass: "UpdateDForm-Submit-Name-Base UpdateDForm-Submit-Name-Mouseover noselect"})}

    submitDefault()
    {this.setState({submitClass: "UpdateDForm-Submit-Name-Base UpdateDForm-Submit-Name-Default noselect"})}

    submitMousDown()
    {this.setState({submitClass: "UpdateDForm-Submit-Name-Base UpdateDForm-Submit-Name-Click noselect"})}


    renderBase()
    {
        return (
            <div className="UpdateDForm">
                <div className="UpdateDForm-Title">
                    
                    
                    <div className="UpdateDForm-Title-Cancel">
                        <i className="fa fa-times UpdateDForm-Title-Cancel-i" aria-hidden="true" onClick={()=>{
                        this.props.EmailForm()
                    }}></i>    
                    </div>
                    <div className="UpdateDForm-Title-Name noselect">Send Message</div>
                </div>
                <div className="UpdateDForm-Options">
                    {/*Items starts here*/}
                    <div className="UpdateDForm-Item">
                        <div className="UpdateDForm-Item-Name noselect">To:</div>
                        <div className="UpdateDForm-Item-Lower">
                            <input className="UpdateDForm-Item-Input "  type="text"name="receiver_id" 
                            value={this.state.receiver_id}
                            onInput={(e)=>this.setState({receiver_id: e.target.value})} />
                        </div>
                    </div>

                    <div className="UpdateDForm-Item">
                        <div className="UpdateDForm-Item-Name noselect">From:</div>
                        <div className="UpdateDForm-Item-Lower">
                            <input className="UpdateDForm-Item-Input"  type="text" name="sender_id" 
                            value={this.state.sender_id}
                            onInput={(e)=>this.setState({sender_id: e.target.value})} />
                        </div>
                    </div>

                    <div className="UpdateDForm-Item">
                        <div className="UpdateDForm-Item-Name noselect">Sender Name:</div>
                        <div className="UpdateDForm-Item-Lower">
                            <input className="UpdateDForm-Item-Input"  type="text" name="sender_name" 
                            value={this.state.sender_name}
                            onInput={(e)=>this.setState({sender_name: e.target.value})} />
                        </div>
                    </div>

                    <div className="UpdateDForm-Item">
                        <div className="UpdateDForm-Item-Name noselect">Title:</div>
                        <div className="UpdateDForm-Item-Lower">
                            <input className="UpdateDForm-Item-Input"  type="text"  name="title" 
                            value={this.state.title}
                            onInput={(e)=>this.setState({title: e.target.value})} />
                        </div>
                    </div>

                    <div className="UpdateDForm-Message">
                        <div className="UpdateDForm-Item-Name noselect">Message:</div>
                        <div className="UpdateDForm-Message-Lower">
                            <input className="UpdateDForm-Message-Input"  type="text" name="message" 
                            value={this.state.message}
                            onInput={(e)=>this.setState({message: e.target.value})} />
                        </div>
                    </div>
                    

                    
                </div>
                <div className="UpdateDForm-Submit">
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

    cancelBack()
    {
        this.setState({page:"base"})
        this.setState({uniqueID:this.state.uniqueID+1});
    }

    render() {
        if(this.state.page == 'base')
        return(
            this.renderBase()
        )
    }
        
}

export default EmailForm;
