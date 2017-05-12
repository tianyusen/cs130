import React, {Component} from 'react';
import axios from 'axios';
import DoughnutChart from '../../Components/data_charts/doughnut';
import BarChart from '../../Components/data_charts/bar';
import BloodStatLineChart from '../../Components/data_charts/line';
import LargeNameCard from '../../Components/large_patient_card';
import SearchBar from '../../Components/SearchBar';
import Add from '../../Components/Add';
import Logo from '../../Components/Logo';
import './style.css';


class PatientsOverview extends Component {
    render() {
        return (
            <div className="PatientsOverview">
                <div className="PatientsRecord-head">
                    <div className="PatientsRecord-logo PatientsRecord-headcontents">
                        <Logo/>
                    </div>
                    <div className="PatientsRecord-search PatientsRecord-headcontents">
                        <SearchBar/>
                    </div>
                    <div className="PatientsRecord-add PatientsRecord-headcontents">
                        <Add/>
                    </div>
                </div>
                
                <div className="info-cards-bg">
                    <div className="card">
                        <DoughnutChart
                            title="Sex"
                            data={{
                                labels: [
                                    "male",
                                    "female"
                                ],
                                datasets:[{
                                    data: [40,60],
                                    backgroundColor: [
                                        "#36A2EB",
                                        "#FF6384"
                                    ],
                                    hoverBackgroundColor: [
                                        "#36A2EB",
                                        "#FF6384"
                                    ]
                                }]
                            }}
                            options={{
                                legend: {
                                    position: "bottom"
                                }
                            }}
                        />
                    </div>
                    <div className="card">
                        <DoughnutChart
                            title="Age"
                            data={{
                                labels: [
                                    "30-40",
                                    "40-50",
                                    "50-60"
                                ],
                                datasets:[{
                                    data: [15,25,60],
                                    backgroundColor: [
                                        "#FF6384",
                                        "#36A2EB",
                                        "#FFCE56"
                                    ],
                                    hoverBackgroundColor: [
                                        "#FF6384",
                                        "#36A2EB",
                                        "#FFCE56"
                                    ]
                                }]
                            }}
                            options={{
                                legend: {
                                    position: "bottom"
                                }
                            }}
                        />
                    </div>
                    <div className="card">
                        <BarChart
                            title="Number of Patient By Month"
                            data={{
                                labels: ["January", "February", "March", "April", "May", "June", "July"],
                                datasets: [
                                    {
                                        label: "My First dataset",
                                        backgroundColor: [
                                            'rgba(255, 99, 132, 0.2)',
                                            'rgba(54, 162, 235, 0.2)',
                                            'rgba(255, 206, 86, 0.2)',
                                            'rgba(75, 192, 192, 0.2)',
                                            'rgba(153, 102, 255, 0.2)',
                                            'rgba(255, 159, 64, 0.2)'
                                        ],
                                        borderColor: [
                                            'rgba(255,99,132,1)',
                                            'rgba(54, 162, 235, 1)',
                                            'rgba(255, 206, 86, 1)',
                                            'rgba(75, 192, 192, 1)',
                                            'rgba(153, 102, 255, 1)',
                                            'rgba(255, 159, 64, 1)'
                                        ],
                                        borderWidth: 1,
                                        data: [65, 59, 80, 81, 56, 55, 40],
                                    }
                                ]
                            }}
                            options={{
                                legend: {
                                    display: false
                                },
                                scales: {
                                    xAxes: [{
                                        stacked: true
                                    }],
                                    yAxes: [{
                                        stacked: true
                                    }]
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default PatientsOverview;