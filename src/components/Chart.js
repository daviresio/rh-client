import React, {Component} from 'react';
import {Bar} from "react-chartjs-2";

class Chart extends Component {

    constructor(props) {
        super(props)

        this.state = {
            chartData: {
                labels: ['jul', 'ago', 'set', 'out', 'nov', 'dez', 'jan', 'fev', 'mar', 'abr', 'mai', 'jun'],
                datasets: [
                    {
                        label: 'Headcount por mes',
                        data: [1,1,1,1,1,1,1,1,1,1,1,1],
                        backgroundColor: [
                            'rgb(126,173,215)',
                            'rgb(126,173,215)',
                            'rgb(126,173,215)',
                            'rgb(126,173,215)',
                            'rgb(126,173,215)',
                            'rgb(126,173,215)',
                            'rgb(126,173,215)',
                            'rgb(126,173,215)',
                            'rgb(126,173,215)',
                            'rgb(126,173,215)',
                            'rgb(126,173,215)',
                            'rgb(126,173,215)',
                        ],
                    },
                ],


            }
        }
    }


    render() {
        return (
            <Bar
                data={this.state.chartData}
                options={{ maintainAspectRatio: false }}
            />
        );
    }
}

export default Chart;
