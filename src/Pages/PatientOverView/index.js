import React, {Component} from 'react';
import axios from 'axios';
import BloodStatLineChart from '../../Components/data_charts/line';
import LargeNameCard from '../../Components/large_patient_card';
import SearchBar from '../../Components/SearchBar';
import './style.css';


class PatientOverView extends Component {
    constructor(props){
        super(props);
        this.state={
            patientInfo: {},
            bloodSugerData: {},
            bloodPressureData:{},
            bloodFatData: {}
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:9000/patient', {
            //headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')},
            })
            .then((response)=>{
                this.setState({
                    patientInfo: response.data,

                    bloodSugerData: {
                        labels: response.data.stats.blood_sugar.map((tv) => {return tv.time}),
                        datasets: [
                            {
                                fill: false,
                                lineTension: 0.1,
                                backgroundColor: "rgba(75,192,192,0.4)",
                                borderColor: "rgba(75,192,192,1)",
                                borderCapStyle: 'butt',
                                borderDash: [],
                                borderDashOffset: 0.0,
                                borderJoinStyle: 'miter',
                                pointBorderColor: "rgba(75,192,192,1)",
                                pointBackgroundColor: "#fff",
                                pointBorderWidth: 1,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                                pointHoverBorderColor: "rgba(220,220,220,1)",
                                pointHoverBorderWidth: 2,
                                pointRadius: 3,
                                pointHitRadius: 10,
                                data: response.data.stats.blood_sugar.map((tv) => {return tv.value}),
                                spanGaps: false,
                            }
                        ]
                    },

                    bloodPressureData: {
                        labels: response.data.stats.blood_pressure.map((tv) => {return tv.time}),
                        datasets: [
                            {
                                label: "high pressure",
                                fill: false,
                                lineTension: 0.1,
                                backgroundColor: "rgba(192,75,192,0.4)",
                                borderColor: "rgba(192,75,192,1)",
                                borderCapStyle: 'butt',
                                borderDash: [],
                                borderDashOffset: 0.0,
                                borderJoinStyle: 'miter',
                                pointBorderColor: "rgba(192,75,192,1)",
                                pointBackgroundColor: "#fff",
                                pointBorderWidth: 1,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: "rgba(192,75,192,1)",
                                pointHoverBorderColor: "rgba(220,220,220,1)",
                                pointHoverBorderWidth: 2,
                                pointRadius: 3,
                                pointHitRadius: 10,
                                data: response.data.stats.blood_pressure.map((tv) => {return tv.high}),
                                spanGaps: false,
                            },
                            {
                                label: "low pressure",
                                fill: false,
                                lineTension: 0.1,
                                backgroundColor: "rgba(75,192,192,0.4)",
                                borderColor: "rgba(75,192,192,1)",
                                borderCapStyle: 'butt',
                                borderDash: [],
                                borderDashOffset: 0.0,
                                borderJoinStyle: 'miter',
                                pointBorderColor: "rgba(75,192,192,1)",
                                pointBackgroundColor: "#fff",
                                pointBorderWidth: 1,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                                pointHoverBorderColor: "rgba(220,220,220,1)",
                                pointHoverBorderWidth: 2,
                                pointRadius: 3,
                                pointHitRadius: 10,
                                data: response.data.stats.blood_pressure.map((tv) => {return tv.low}),
                                spanGaps: false,
                            }
                        ]
                    },

                    bloodFatData: {
                        labels: response.data.stats.blood_fat.map((tv) => {return tv.time}),
                        datasets: [
                            {
                                fill: false,
                                lineTension: 0.1,
                                backgroundColor: "rgba(75,192,192,0.4)",
                                borderColor: "rgba(75,192,192,1)",
                                borderCapStyle: 'butt',
                                borderDash: [],
                                borderDashOffset: 0.0,
                                borderJoinStyle: 'miter',
                                pointBorderColor: "rgba(75,192,192,1)",
                                pointBackgroundColor: "#fff",
                                pointBorderWidth: 1,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                                pointHoverBorderColor: "rgba(220,220,220,1)",
                                pointHoverBorderWidth: 2,
                                pointRadius: 3,
                                pointHitRadius: 10,
                                data: response.data.stats.blood_fat.map((tv) => {return tv.value}),
                                spanGaps: false,
                            }
                        ]
                    }
                })
            })
            .catch(function(error) {});
    }

    render() {
        return (
            <div>
                <SearchBar/>
                <LargeNameCard/>

                <BloodStatLineChart 
                    title="Blood Suger Changes"
                    data={this.state.bloodSugerData}
                    options={{legend: {
                        display: false
                    }}}
                />

                <BloodStatLineChart
                    title="Blood Pressure Changes"
                    data={this.state.bloodPressureData}
                />

                <BloodStatLineChart
                    title="Blood Fat Changes"
                    data={this.state.bloodFatData}
                    options={{legend: {
                        display: false
                    }}}
                />
            </div>
        );
    }
}

export default PatientOverView;