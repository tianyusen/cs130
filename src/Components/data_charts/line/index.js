import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import '../style.css';

const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
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
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false,
        }
    ]
}


const options={}


class BloodStatLineChart extends Component {
    render() {
        return (
            <div className="RectangleBackground">
                <p className="Title">
                    {this.props.title}
                </p>
                <div className="Chart">
                    <Line data={this.props.data} options={this.props.options}/>
                </div>
            </div>
        );
    }
}

export default BloodStatLineChart;