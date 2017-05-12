import React, {Component} from 'react';
import axios from 'axios';
import NameCard from './NameCard';
import SearchBar from '../../Components/SearchBar';
import Add from '../../Components/Add';
import Logo from '../../Components/Logo';
import PatientSignUp from '../../Components/patient_sign_up';
import './style.css';

class PatientsRecord extends Component {
    //(1) inherit parent's props
    //(2) initialize state
    constructor(props){
        super(props);
        this.state={
            records : [],
            searchTerm:''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:9000/patients', {
            //headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')},
            })
            .then((response)=>{
                //do soemthign with respnse
                this.setState({
                    records: response.data
                })
            })
            .catch(function(error) {
        
        });
    }

    setSearchTerm(searchTerm){
        this.setState({
            searchTerm
        })
    }

    renderRecords(){
        return this.state.records
        .filter(
            (record) =>{
                if (record.name.includes(this.state.searchTerm)){
                    return true;
                }
                return false;
        })
        .map(function(record){
            return (
                <div className = "PatientsRecord-namecards">
                <NameCard
                    name={record.name}
                    id={record.id}
                    birthday={record.birthday}
                    age={record.weight}
                    blood_sugar={record.stats.blood_sugar}
                    blood_fat={record.stats.blood_fat}
                    blood_pressure_high={record.stats.blood_pressure.high}
                    blood_pressure_low={record.stats.blood_pressure.low}
                />
                </div>
            )
        })
    }
    
    render() {
        return (
            <div className="PatientsRecord-page">
                <div className="PatientsRecord-head">
                    <div className="PatientsRecord-logo PatientsRecord-headcontents">
                        <Logo/>
                    </div>
                    <div className="PatientsRecord-search PatientsRecord-headcontents">
                        <SearchBar
                        searchTerm={this.state.searchTerm}
                        setSearchTerm={this.setSearchTerm.bind(this)}
                        />
                    </div>
                    <div className="PatientsRecord-add PatientsRecord-headcontents">
                        <Add/>
                    </div>
                </div>
                <div className="PatientsRecord-body">
                    {this.renderRecords()}
                </div>
            </div>
                
        );
    }
}

export default PatientsRecord;