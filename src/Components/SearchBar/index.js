import React, { Component } from 'react';
import './style.css';

class SearchBar extends Component {
    render() {
        return (
            <div className = "input-group" >
                <span className="input-group-addon"><i className="fa fa-search"></i></span>
                <input className="form-control" type="text" placeholder="Seach your patients here.." name="userid"/>
            </div>
        );
    }
}

export default SearchBar;