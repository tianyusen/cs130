import React, {Component} from 'react';
import BloodStatLineChart from '../../Components/data_charts/line';
import LargeNameCard from '../../Components/large_patient_card';
import SearchBar from '../../Components/SearchBar';
import './style.css';


class PatientsOverview extends Component {
    render() {
        return (
            <div className="PatientsOverview">
                <SearchBar/>
            </div>
        );
    }
}

export default PatientsOverview;