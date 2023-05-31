import React, { useEffect, useState, useRef } from 'react';
import { Chart, LineController, BarController, LinearScale, CategoryScale, BarElement } from 'chart.js';
import Navbar from '../navbar/Navbar';
import './transaction.css';

Chart.register(LineController, BarController, LinearScale, CategoryScale, BarElement);

const transaction = [
    {
        username: 'Zeeshan',
        to_account_name: 'Hunny',
        from_account_name: 'Shani',
        amount: '10000',
        created_at: '2023-05-26 15:28:56',
    },
    {
        username: 'Saad',
        to_account_name: 'Hunny',
        from_account_name: 'Lashari',
        amount: '20000',
        created_at: '2023-05-26 15:28:56',
    },

    {
        username: 'Yasir',
        to_account_name: 'usama',
        from_account_name: 'Shani',
        amount: '150000',
        created_at: '2023-05-26 15:28:56',
    },

    {
        username: 'Adil',
        to_account_name: 'Hunny',
        from_account_name: 'Shani',
        amount: '50000',
        created_at: '2023-05-26 15:28:56',
    }
    ,

    {
        username: 'Zeeshan',
        to_account_name: 'Hunny',
        from_account_name: 'Shani',
        amount: '250000',
        created_at: '2023-05-26 15:28:56',
    },

    {
      username: 'Zeeshan',
      to_account_name: 'Hunny',
      from_account_name: 'Shani',
      amount: '350000',
      created_at: '2023-05-26 15:28:56',
    },

    {
        username: 'Zeeshan',
        to_account_name: 'Hunny',
        from_account_name: 'Shani',
        amount: '10000',
        created_at: '2023-05-26 15:28:56',
    },
    {
        username: 'Saad',
        to_account_name: 'Hunny',
        from_account_name: 'Lashari',
        amount: '20000',
        created_at: '2023-05-26 15:28:56',
    },

    {
        username: 'Yasir',
        to_account_name: 'usama',
        from_account_name: 'Shani',
        amount: '150000',
        created_at: '2023-05-26 15:28:56',
    },

    {
        username: 'Zeeshan',
        to_account_name: 'Hunny',
        from_account_name: 'Shani',
        amount: '10000',
        created_at: '2023-05-26 15:28:56',
    },
    {
        username: 'Saad',
        to_account_name: 'Hunny',
        from_account_name: 'Lashari',
        amount: '20000',
        created_at: '2023-05-26 15:28:56',
    },

    {
        username: 'Yasir',
        to_account_name: 'usama',
        from_account_name: 'Shani',
        amount: '150000',
        created_at: '2023-05-26 15:28:56',
    }
];

function Transaction() {
    const chartRef = useRef(null); // Use a ref to store the chart instance

    useEffect(() => {
        // Prepare chart data
        const labels = transaction.map((item) => item.username);
        const amounts = transaction.map((item) => parseInt(item.amount));

        // Create and update the chart
        const ctx = chartRef.current.getContext('2d');

        if (chartRef.current.chart) {
            chartRef.current.chart.destroy(); // Destroy the previous chart instance
        }

        chartRef.current.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels,
                datasets: [
                    {
                        label: 'Amount',
                        data: amounts,
                        backgroundColor: 'blueviolet',
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 50000,
                        },
                    },
                },
            },
        });
    }, []);

    return (
        <div className="home">
            <Navbar />
            <div className="divmain">

                <div className="main_user">
                    <div className="chart-container" style={{background:'antiquewhite'}}>
                        <canvas ref={chartRef} id="transactionChart" width="400" height="200"></canvas>
                    </div>
                    <h1 className="headuser">
                        Transaction <span style={{ color: 'blueviolet' }}>(Zeeshan) </span>
                    </h1>
                    <table>
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>To Account</th>
                                <th>From Account</th>
                                <th>Amount</th>
                                <th>Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transaction.map((item) => (
                                <tr key={item.username}>
                                    <td>{item.username}</td>
                                    <td>{item.to_account_name}</td>
                                    <td>{item.from_account_name}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.created_at}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    );
}

export default Transaction;
