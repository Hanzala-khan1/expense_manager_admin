import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import './budget.css'
function Budget() {

    const data = [
        {
            "id": 1,
            "user_id": 20,
            "amount": 200,
            "category": "bank",
            "consumed": 100,
            "created_at": "2023-05-25 18:01:26",
            "updated_at": "",
            "username": "hunny"
        }
    ];
    return (
        <div className="home">
            <Navbar />
            <div className='divmain'>
                <div className='main_user'>
                    <h1 className='headuser'> Budget </h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>Username</th>
                                <th>Amount</th>
                                <th>Category</th>
                                <th>Consumed</th>
                                <th>Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.user_id}</td>
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
