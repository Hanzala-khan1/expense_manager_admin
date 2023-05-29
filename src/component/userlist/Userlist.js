import React, { useEffect, useState } from 'react'
import "./user.css";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import axios from 'axios';
import Navbar from '../navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsDownToLine, faDownload, faFileDownload } from '@fortawesome/free-solid-svg-icons';

const Userlist = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        axios
            .get('http://81.0.219.62:3000/api/v1/users/get-allUser')
            .then(res => {
                setUser(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    function generatePDF(data) {
        const doc = new jsPDF();
        const tableColumn = ['ID', 'Email', 'Name', 'Interest','Gender', 'DOB', 'Country', 'City'];
        const tableRows = [];

        // Add data to tableRows array
        data.forEach(user => {
            const userData = [
                user._id,
                user.email,
                user.name,
                user.interests,
                user.gender,
                user.dob,
                user.country,
                user.city
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
                    <h1 className='headuser'> Users <FontAwesomeIcon icon={faDownload} onClick={handleClick} className='downloadicon'/> </h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map(user => {
                                return <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.city}-{user.country}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Userlist
