import React, { useEffect, useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import axios from "axios";
// import  * as faker from "@faker-js/faker";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);







const BarChart = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const emptyObject = {};    
        axios.post("https://api.travelbeta.com/api/v1/auth/statistics/visitors", emptyObject)
        .then((response) => {
            const {success, data, message} = response.data;
            if (success){
                setData(data);
                console.log("Success: ", success);
                console.log("Data Received from Bar Chart: ", data)
                console.log("Message Received: ", message);
            }
        })
        .catch(err => console.log(err));
    }, []);


    const options = {
        responsive: true,
        plugins: {
            title: {
                display: false,
                text: "Analytics Bar Chart",
            },
            legend: {
                display: false,        // <-- set display to false to hide the legend
            },
        },
        scales: {
            x: {
                grid: {
                    drawBorder: false, // <-- this removes y-axis line
                    lineWidth: 0
                }
            },
            y: {
                grid: {
                    drawBorder: false,
                    lineWidth: 0 // <-- this removes vertical lines between bars
                }
            },
        }
    };

    const chartData = {
        labels: data.analytics.map((entry) => entry.item),
        datasets: [
            {
                label: "Reports",
                data: data.analytics.map((entry) => entry.count),
                backgroundColor: "rgba(60,80,224,1)",
            }
        ],
    };



    return (
        <>
            <h6 className="fw-bold pt-1 mb-4">Visitor's Analytics</h6>
            <Bar options={options} data={chartData} />
        </>
    );
};


export default BarChart;
