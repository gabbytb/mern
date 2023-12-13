// import React from 'react';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Pie } from 'react-chartjs-2';

// ChartJS.register(ArcElement, Tooltip, Legend);









// export default function PieChart() {

//     const options = {
//         responsive: true,
//         plugins: {
//             title: {
//                 display: true,
//                 text: "2548 Visitors",
//             },
//             legend: {
//                 display: true,        // <-- set display to false to hide the legend
//                 text: "2548 Visitors",
//             },
//         },
//         // scales: {
//         //     x: {
//         //         grid: {
//         //             drawBorder: false, // <-- this removes y-axis line
//         //             lineWidth: 0
//         //         }
//         //     },
//         //     y: {
//         //         grid: {
//         //             drawBorder: false,
//         //             lineWidth: 0 // <-- this removes vertical lines between bars
//         //         }
//         //     },
//         // }
//     };


//     const labels = [
//         'Desktop', 
//         'Tablet', 
//         'Mobile', 
//         'Unknown'
//     ];
    

//     const data = {
//         labels,
//         datasets: [
//             {
//                 label: '# of Votes',
//                 data: [65 + '%', 19, 3, 5, 2, 3],
//                 backgroundColor: [
//                     'rgba(255, 99, 132, 0.2)',
//                     'rgba(54, 162, 235, 0.2)',
//                     'rgba(255, 206, 86, 0.2)',
//                     'rgba(75, 192, 192, 0.2)',
//                     'rgba(153, 102, 255, 0.2)',
//                     'rgba(255, 159, 64, 0.2)',
//                 ],
//                 borderColor: [
//                     'rgba(255, 99, 132, 1)',
//                     'rgba(54, 162, 235, 1)',
//                     'rgba(255, 206, 86, 1)',
//                     'rgba(75, 192, 192, 1)',
//                     'rgba(153, 102, 255, 1)',
//                     'rgba(255, 159, 64, 1)',
//                 ],
//                 borderWidth: 2,
//             },
//         ],
//     };

//     return (
//         <>
//             <Pie options={options} data={data} /> 
//         </>
//     );
// }
