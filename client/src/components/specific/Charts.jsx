import React from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import { CategoryScale, Chart as ChartJS, Tooltip, LinearScale, PointElement, LineElement, ArcElement, Legend, Filler } from 'chart.js';
import { purple, purpleLight, orange, orangeLight } from '../../constants/color';
import { getLast7Days } from '../../lib/features'

ChartJS.register(CategoryScale, Tooltip, LinearScale, PointElement, LineElement, ArcElement, Legend, Filler);
const labels = getLast7Days();

const LineChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false,  // You can enable this if needed
        },
        title: {
            display: false,  // You can enable this if needed
        },
    },
    scales: {
        x: {
            grid: {
                display: false,  // Hides grid lines on the x-axis
            },
        }, 
        y: {
            beginAtZero: true,
            grid: {
                display: false,  // Hides grid lines on the y-axis
            }
        },
    }
};

const LineChart = ({value=[]}) => {
    const data = {
        labels,
        datasets: [
            {
                label: "Chats",
                data: value,
                borderColor:  purple,
                backgroundColor: purpleLight,
                fill: true,
            }
        ],
    };

    return <Line data={data} options={LineChartOptions} />; // Added options here
};

const doughnutChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false,  // You can enable this if needed
        },
    },
    cutout: 120,
}

const DoughnutChart = ({value=[], labels=[]}) => {
    const data = {
        labels,
        datasets: [
            {
                data: value,
                borderColor:  [purple, orange],
                backgroundColor: [purpleLight, orangeLight],
                hoverBackgroundColor: [purple, orange],
                offset: 40,
            }
        ],
    };
    return (
        <Doughnut style={{zIndex: 10} } data={data} options={doughnutChartOptions}/>
    );
};

export { LineChart, DoughnutChart };
