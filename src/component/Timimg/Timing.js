import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar';
import axios from 'axios';
import "./timing.css"

const Timing = () => {
    const [timing, setTiming] = useState([]);
    const [data, setData] = useState([]);
    ///////////// fetch timing /////////////////
    useEffect(() => {
        fetchTiming();
    }, []);
    const fetchTiming = async () => {
        try {
            const res = await axios.post('http://81.0.219.62:3000/api/v1/timing/get-all')
            setTiming(res.data.data);
        } catch (err) {
            console.log(err);
        }
    };
console.log(timing)
    ///////////// add timing /////////////////////
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const res = await axios({
                method: 'post',
                url: `http://81.0.219.62:3000/api/v1/timing/update/${timing[0]._id}`,
                data: {
                    "time_duration": data
                }
            });
            setData("");
            fetchTiming(); // Update interests after successful API call
        } catch (err) {
            console.log(err.response.data);
        }
    };
    return (
        <div className='home'>
            <Navbar />
            <div className='divmain'>
                <div className='main_user'>
                    <div className='addinterest'>
                        <h1> Add Timing</h1>
                        <div className='divinput'>
                            <input
                                className='input'
                                value={data}
                                placeholder={`${timing[0]?.time_duration} minutes`}
                                onChange={(e) => { setData(e.target.value) }}
                            />
                            <button
                                className='addbtn'
                                onClick={handleClick} > Update </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timing
