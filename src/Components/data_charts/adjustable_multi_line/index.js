import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import '../style.css';

const data = {
    // labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
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
            pointRadius: 1,
            pointHitRadius: 10,
            data: [{x: 1, y: 10}, {x: 3, y: 10}, {x: 5, y: 10}, {x: 7, y: 10}],
            spanGaps: false,
        },
        {
            label: "My second dataset",
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
            pointRadius: 1,
            pointHitRadius: 10,
            data: [{x: 2, y: 12}, {x: 4, y: 5}, {x: 6, y: 8}, {x: 8, y: 12}],
            spanGaps: false,
        }
    ]
}


const options={
    maintainAspectRatio: false,

    scales: {
            xAxes: [{
                stacked: false
            }],
            yAxes: [{
                stacked: false
            }]
    }
}


class AdjustableBloodStatLineChart extends Component {
    render() {
        return (
            <div className="AdjustableRectangleBackground">
                <p className="Title">
                    {"Some title"}
                </p>
                <div className="AdjustableChart">
                    <Line height="100%" data={data} options={options}/>
                </div>
            </div>
        );
    }
}

export default AdjustableBloodStatLineChart;