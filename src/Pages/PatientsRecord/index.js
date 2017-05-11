import React, {Component} from 'react';
import axios from 'axios';

class PatientsRecord extends Component {
    componentDidMount() {
        axios.get('http://localhost:9000/patients', {
            //headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')},
            })
            .then((response)=>{
                debugger;
            })
            .catch(function(error) {
                
        });
    }
    
    render() {
        return (
            <div>
                This is Patients Record Page
            </div>
        );
    }
}

export default PatientsRecord;