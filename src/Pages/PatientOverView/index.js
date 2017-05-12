import React, {Component} from 'react';
import BloodStatLineChart from '../../Components/data_charts/line';
import LargeNameCard from '../../Components/large_patient_card';
import SearchBar from '../../Components/SearchBar';
import './style.css';


class PatientOverView extends Component {
    render() {
        return (
            <div>
                <SearchBar/>
                <LargeNameCard/>
                <BloodStatLineChart/>
                <BloodStatLineChart/>
            </div>
        );
    }
}

export default PatientOverView;