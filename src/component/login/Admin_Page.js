import React, { useState } from 'react';
import './admin.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import emi from "../../assets/email.svg";
import lock from '../../assets/lock.svg';
import half from '../../assets/half.svg';
import { colors } from '@mui/material';

function Admin_Page() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [enteredOTP, setEnteredOTP] = useState('');

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleOTPChange = (event) => {
    setEnteredOTP(event.target.value);
  };

  const handleSubmitPhoneNumber = (event) => {
    event.preventDefault();
    setTimeout(() => {
      setOtpSent(true);
    }, 2000);
  };

  const editNumber=()=>{
    setOtpSent(!otpSent);
    
  }

  const verify=()=>{
    navigate("/user")
  }

  const handleSubmitOTP = (event) => {
    event.preventDefault();
    setTimeout(() => {
      if (enteredOTP === '123456') {
        alert('OTP verified successfully!');
      } else {
        alert('Incorrect OTP. Please try again.');
      }
    }, 2000);
  };

  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });
  const [login, setLogin] = useState(false);
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const { password, email } = credentials;

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios({
        method: 'post',
        url: 'http://81.0.219.62:3000/api/v1/admin/get-admin',
        data: {
          email: `${email}`,
          password: `${password}`,
        },
      });
      setError(res.data.data.data);
      navigate('/user', { state: error });
    } catch (err) {
      setLogin(true);
      setError(err.response.data.message);
    }
  };

  return (
    <div className='header'>
      <div>
        <h3 className='h3'>Welcome To Expense Manager App</h3>
      </div>
      <div>
        <p className='p'>Login to continue using </p>
      </div>

      <div className='main-div'>
        {!otpSent && (
          <form onSubmit={handleSubmitPhoneNumber}>
            <label className="name-label text-center">
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </label>
            <br></br>
            <button type="submit" className="otp_button">
              {otpSent ? 'Resend OTP' : 'Send OTP'}
            </button>
          </form>
        )}

        {otpSent && (
          <form onSubmit={handleSubmitOTP}>
            <h3 className="text-center enter_otp">OTP sent to this : <span className='span_num'> {phoneNumber} </span> 
            <span onClick={editNumber} style={{color:"blue" , cursor:'pointer'}}>  Edit</span></h3>
            <label>
              <input
                type="text"
                className="form-control"
                id="otpInput"
                placeholder="Enter the OTP"
                value={enteredOTP}
                onChange={handleOTPChange}
                required
              />
            </label>
            <br></br>
            <button onClick={verify} type="submit" className="otp_button">
              Verify OTP
            </button>
          </form>
        )}
      </div>
      {login && <h3 className='failed'>{error}</h3>}
    </div>
  );
}

export default Admin_Page;
