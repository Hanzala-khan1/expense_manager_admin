import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
function Budget() {

    const currency_type = [
        {
            "username":"Zeeshan",
            "symbol":"$",
            "name_plural": "Ds",
            "created_at": "2023-05-25 12:57:35",

        }
    ];
    return (
        <div className="home">
            <Navbar />
            <div className='divmain'>
                <div className='main_user'>
                    <h1 className='headuser'> Currency Type </h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Symbol</th>
                                <th>Name Plural</th>
                                <th>Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currency_type.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.username}</td>
                                    <td>{item.symbol}</td>
                                    <td>{item.name_plural}</td>
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
