import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);









const PieChart = () => {

    const options = {
        responsive: true,
        maintainAspectRatio: true, // Add this line to allow chart resizing
        plugins: {
            // Center the title
            title: {
                display: true,        // <-- set display to false to hide the title, i.e 2048 Visitors
                text: 2548 + '\n Visitors',
                position: 'top',      // 'top', 'left', 'right', or 'bottom'
                fullWidth: true,
                fontSize: 18,
                fontColor: '#333', // Customize title font color
            },
            legend: {
                display: true,        // <-- set display to false to hide the legend,  i.e Desktop, Tablet, Mobile & Unknown Devices
                position: "bottom",
            },
        },
    };
       
   

    const labels = ["Desktop", "Tablet", "Mobile", "Unknown"];
    const data = {
        labels,
        datasets: [
            {
                data: [
                    65, 34, 45, 12,
                ],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
    };


    return (
        <>
            <Doughnut className="doughnut" data={data} options={options} />
        </>
    );
};



export default PieChart;