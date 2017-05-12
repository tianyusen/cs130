import React, { Component } from 'react';
import './style.css';

class SearchBar extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div
                className = "input-group" >
                <span className="input-group-addon"><i className="fa fa-search"></i></span>
                <input 
                    value={this.props.searchTerm}
                    onInput={(e)=>this.props.setSearchTerm(e.target.value)} 
                    className="form-control" 
                    type="text" 
                    placeholder="Seach your patients here.." 
                    name="userid"/>
            </div>
        );
    }
}

export default SearchBar;