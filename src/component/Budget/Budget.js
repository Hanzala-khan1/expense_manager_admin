import React, { useEffect, useState, useRef } from 'react'
import Navbar from '../navbar/Navbar'
import './budget.css'
import { Bar } from 'react-chartjs-2';

import { Chart, BarController, CategoryScale, LinearScale } from 'chart.js';
import axios from 'axios';
import { App_host } from '../../assets/dataconfig';

Chart.register(BarController, CategoryScale, LinearScale);

function Budget() {
    const [budgetData, setBudgetData] = useState([]);

    useEffect(() => {
        getbudgetData();
    }, []);

    const getbudgetData = async () => {
        try {
            const res = await axios({
                url: `${App_host}/budget/GetBudget/20`,
                method: 'get',
                data: {},
                headers: {
                    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsImlhdCI6MTY4NTAxOTMxOX0._hk0XM_tqmi3Mu1wKyyeHwEKJaSMz69RaMdEnvqg9Ww',
                },
            });
            setBudgetData(res.data.data);
        } catch (err) {
            console.log(err);
        }

    };
    const labels = budgetData.map((data) => data.username)
    const amountData = budgetData.map((data) => data.amount);
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Amount',
                data: amountData,
                backgroundColor: ['rgba(75,192,192,0.2)', 'rgba(54, 162, 235, 0.2)'],
                borderColor: ['rgba(75,192,192,1)', 'rgba(54, 162, 235, 1)'],
                borderWidth: 1,
            },
        ],

    }
    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };






    return (
        <div className="home">
            <Navbar />

            <div className='divmain'>

                <div className='main_user'>
                    <div>
                        <h2>Budget Chart</h2>
                        <Bar data={data} options={options} />
                    </div>
                    <h1 className='headuser'> Budget </h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Amount</th>
                                <th>Category</th>
                                <th>Consumed</th>
                                <th>Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {budgetData.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.username}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.category}</td>
                                    <td>{item.consumed}</td>
                                    <td>{item.created_at}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>


    )
}

export default Budget
