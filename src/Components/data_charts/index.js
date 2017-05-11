import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';
import './style.css';

const AgeDoughnutData = {
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
}

const AgeDoughnutOptions = {
    legend: {
        position: "bottom"
    }
}

class AgeDoughnutChart extends Component {
    render() {
        return (
            <div className="SquareBackground">
                <p className="Title">
                    Age
                </p>
                <div className="Chart">
                    <Doughnut data={AgeDoughnutData} options={AgeDoughnutOptions} height="250%"/>
                </div>
            </div>
        );
    }
}

export default AgeDoughnutChart;