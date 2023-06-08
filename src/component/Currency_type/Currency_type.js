import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import axios from 'axios';
import { App_host } from '../../assets/dataconfig';
function Budget() {

    const [profile, setProfile] = useState([]);
    useEffect(() => {
        getprofillist()
    }, []);

    const getprofillist = async () => {
        try {
            const res = await axios({
                url: `${App_host}/profile/getProfile/`,
                method: "get",
                data: {},
                headers: {
                    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsImlhdCI6MTY4NTAxOTMxOX0._hk0XM_tqmi3Mu1wKyyeHwEKJaSMz69RaMdEnvqg9Ww'
                }
            })
            setProfile(res.data.data)
        } catch (err) {
            console.log(err)

        }
    }
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
                                <th>Currency name</th>
                                <th>Symbol</th>
                                <th>Name Plural</th>
                                <th>Currency code</th>
                                <th>Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {profile.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.user_name}</td>
                                    <td>{item.currency_types.name}</td>
                                    <td>{item.currency_types.symbol}</td>
                                    <td>{item.currency_types.name_plural}</td>
                                    <td>{item.currency_types.code}</td>
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
