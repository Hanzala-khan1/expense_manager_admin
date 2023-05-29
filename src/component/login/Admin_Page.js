import React, { useState } from 'react';
import './admin.css';
import {  useNavigate } from "react-router-dom";
import axios from 'axios';
import emi from "../../assets/email.svg"
import lock from '../../assets/lock.svg';
import half from '../../assets/half.svg';
import { colors } from '@mui/material';
function Admin_Page() {
  const [credentials, setCredentials] = useState({
    email : undefined,
    password: undefined,
  });
  const [login,setLogin]=useState(false);
  const [error,setError]=useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const {password,email}= credentials
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios({
        method: 'post',
        url: 'http://81.0.219.62:3000/api/v1/admin/get-admin',
        data:{
            "email": `${email}`,
            "password": `${password}`
        }
      });
      setError(res.data.data.data)
      navigate('/user', { state: error }); 
    
    } catch (err) {
        setLogin(true)
     setError(err.response.data.message)
    }
  };

  return (
    <div className='header'>
      <div>
        <h3 className='h3'>Welcome TO ChatApp</h3>
      </div>
      <div>
        <p className='p'>Login to continue using </p>
      </div>

      <div className='main-div'>
        <div>
          <label className="name-label  text-center">
            <img className="icon " src={emi} />
            <input type="text" id="email" name="email" placeholder="Enter your email" onChange={handleChange} className='inputlog' />
          </label>
        </div>
        <div>
          <label className="name-label  text-center">
            <img className="icon" src={lock} />
            <input type="password" id="password" name="password" placeholder="Enter your password" onChange={handleChange} className='inputlog' />
          </label>
        </div>
      </div>
      {login && <h3 className='failed'>{error}</h3>}
      <img className='half' src={half} />
      <label className='login-button'>
        <button onClick={handleClick} >Login</button>
      </label>

    </div>
  )
}

export default Admin_Page
