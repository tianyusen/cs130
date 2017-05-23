import React, {Component} from 'react';
import axios from 'axios';
import BloodStatLineChart from '../../Components/data_charts/line';
import DoctorUpdateForm from '../../Components/doctor_update';
import NewRecordCard from '../../Components/new_record_card';
import LargeNameCard from '../../Components/large_patient_card';
import SearchBar from '../../Components/SearchBar';
import Add from '../../Components/Add';
import Logo from '../../Components/Logo';
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

    doctorUpdate()
    {
        var popup = document.getElementById("updateForm");
        popup.classList.toggle("show");
    }


    render() {
        return (
            <div className="PatientOverview">
                <div className="PatientOverview-head">
                    <div className="PatientOverview-logo PatientOverview-headcontents">
                        <Logo/>
                    </div>
                    <div className="PatientOverview-search PatientOverview-headcontents">
                        <SearchBar/>
                    </div>
                    <div className="PatientOverview-add PatientOverview-headcontents">
                        <Add/>
                    </div>
                </div>
                <div className="info-cards-bg">
                    <div className="card">
                        <LargeNameCard
                            name={this.state.patientInfo.name}
                            id={this.state.patientInfo.id}
                            age={this.state.patientInfo.weight}
                            birthday={this.state.patientInfo.birthday}
                            className="card"
                        />
                    </div>
                    <div className="card">
                        <BloodStatLineChart 
                            title="Blood Suger Changes"
                            data={this.state.bloodSugerData}
                            options={{legend: {
                                display: false
                            }}}
                        />
                    </div>
                    <div className="card">
                        <BloodStatLineChart
                            title="Blood Pressure Changes"
                            data={this.state.bloodPressureData}
                        />
                    </div>
                    <div className="card">
                        <BloodStatLineChart
                            title="Blood Fat Changes"
                            data={this.state.bloodFatData}
                            options={{legend: {
                                display: false
                            }}}
                        />
                    </div>

                    <div className="card">
                        <NewRecordCard
                            name={this.state.patientInfo.name}
                            id={this.state.patientInfo.id}
                            age={this.state.patientInfo.weight}
                            birthday={this.state.patientInfo.birthday}
                            className="card"
                            DoctorUpdateForm={this.doctorUpdate.bind(this)}
                        />
                    </div>
                </div>
                <div className="PatientOverview-form" id="updateForm">
                    <div className="PatientOverview-form-pop">
                        <DoctorUpdateForm
                            DoctorUpdateForm={this.doctorUpdate.bind(this)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default PatientOverView;