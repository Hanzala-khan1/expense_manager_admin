import React, { useEffect, useState, useRef } from 'react';
import { Chart, LineController, BarController, LinearScale, CategoryScale, BarElement } from 'chart.js';
import Navbar from '../navbar/Navbar';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import './transaction.css';
import { useLocation } from 'react-router-dom';
import { App_host } from '../../assets/dataconfig';


// Use the name, email, and phone to filter and display transactions for the specific user


Chart.register(LineController, BarController, LinearScale, CategoryScale, BarElement);

// ...existing imports...

function Transaction() {
    const [transaction, setTransaction] = useState([]);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');

    useEffect(() => {
        getTransaction();
    }, []);

    const getTransaction = async () => {
        try {
            const res = await axios({
                url: `${App_host}/transaction/GetTransaction/${id}`,
                method: 'get',
                data: {},
                headers: {
                    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsImlhdCI6MTY4NTAxOTMxOX0._hk0XM_tqmi3Mu1wKyyeHwEKJaSMz69RaMdEnvqg9Ww',
                },
            });
            setTransaction(res.data.data);
        } catch (err) {
            console.log(err);
        }
    };
    const labels = transaction.map((data) => data.created_at)
    const amountData = transaction.map((data) => data.amount);
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
            <div className="divmain">
                <div className="main_user">
                    <div>
                        <h2>Transaction Chart</h2>
                        <Bar data={data} options={options} />
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
                                <tr key={item.id}>
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
