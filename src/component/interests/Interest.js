import React, { useEffect, useState } from 'react'
import "./Interest.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import Navbar from '../navbar/Navbar';
import axios from 'axios';

const Interest = () => {

    const [interests, setInterests] = useState([]);
    const [data, setData] = useState("");
    /////////////// get all interest value //////////////
    useEffect(() => {
      fetchInterests();
    }, []);
    
    const fetchInterests = async () => {
      try {
        const res = await axios.post("http://81.0.219.62:3000/api/v1/interest/get-all");
        setInterests(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    console.log(data)
    ///////////// add into interest /////////////////
    const handleClick = async (e) => {
      e.preventDefault();
      try {
        const res = await axios({
          method: "post",
          url: "http://81.0.219.62:3000/api/v1/interest/add",
          data: {
            interest: data,
          },
        });
        setData("");
        fetchInterests(); // Update interests after successful API call
      } catch (err) {
        console.log(err.response.data);
      }
    };
    /////////////////// delete interest //////////////////////
    const handleDelete = async (interest) => {
      try {
        const del = await axios.post(
          `http://81.0.219.62:3000/api/v1/interest/delete/${interest._id}`
        );
        fetchInterests(); // Update interests after successful API call
      } catch (err) {
        console.log(err);
      }
    };
    

    return (
        <div className='home'>
            <Navbar />
            <div className='divmain'>
                <div className='main_user'>
                    <div className='addinterest'>
                        <h1> Add Interest</h1>
                        <div className='divinput'>
                            <input
                                className='input'
                                value={data}
                                placeholder='Add interest'
                                onChange={(e)=>{setData(e.target.value)}}
                            />
                            <button 
                            className='addbtn'
                            onClick={handleClick} > Add </button>
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th className='right'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {interests.map(interest => {
                                return <tr key={interest._id}>
                                    <td>{interest.interest}</td>
                                    <td className='right'>
                                        <FontAwesomeIcon
                                            icon={faTrashCan}
                                            className='delbt'
                                            onClick={()=>handleDelete(interest)}
                                        />
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Interest
