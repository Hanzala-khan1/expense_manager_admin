import React, { useEffect, useState } from 'react'
import "./user.css";
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import axios from 'axios';
import Navbar from '../navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsDownToLine, faDownload, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { App_host } from '../../assets/dataconfig';

const Userlist = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        getuserlist()
    }, []);

    const getuserlist = async () => {
        try {
            const res = await axios({
                url: `${App_host}/user/getAllUser`,
                method: "get",
                data: {},
                headers: {
                    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsImlhdCI6MTY4NTAxOTMxOX0._hk0XM_tqmi3Mu1wKyyeHwEKJaSMz69RaMdEnvqg9Ww'
                }
            })
            setUser(res.data.data)
        } catch (err) {
            console.log(err)

        }
    }
    function generatePDF(data) {
        const doc = new jsPDF();
        const tableColumn = ['ID', 'Name', 'Phone', 'Amount', 'created_at'];
        const tableRows = [];

        // Add data to tableRows array
        user.forEach(user => {
            const userData = [
                user.id,
                user.name,
                user.phone,
                user.amount,
                user.created_at,
            ];
            tableRows.push(userData);
        });

        doc.autoTable(tableColumn, tableRows, { startY: 20 });
        doc.save('user-data.pdf');
    }
    function handleClick() {
        generatePDF(user);
    }
    return (
        <div className="home">
            <Navbar />
            <div className='divmain'>
                <div className='main_user'>
                    <h1 className='headuser'> Users <FontAwesomeIcon icon={faDownload} onClick={handleClick} className='downloadicon' /> </h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Amount</th>
                                <th>created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map(user => (
                                <tr key={user._id}>
                                    <td>
                                        <Link to={`/transaction?id=${user.id}`} className='link_style'>
                                            {user.name}
                                        </Link>
                                    </td>
                                    <td><Link to={`/transaction?id=${user.id}`} className='link_style'>
                                        {user.phone}
                                    </Link></td>
                                    <td><Link to={`/transaction?id=${user.id}`} className='link_style'>
                                        {user.amount}
                                    </Link></td>
                                    <td><Link to={`/transaction?id=${user.id}`} className='link_style'>
                                        {user.created_at}
                                    </Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Userlist
