import React, { useState } from 'react';
import './admin.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import emi from "../../assets/email.svg";
import lock from '../../assets/lock.svg';
import half from '../../assets/half.svg';
import { colors } from '@mui/material';

function Admin_Page() {
  const [phoneNumber, setPhoneNumber] = useState(0);
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

    // Code to send OTP to the provided phone number (via API call, for example)
    // Replace the following code with your implementation

    // Simulating API call delay for demonstration purposes
    setTimeout(() => {
      setOtpSent(true);
    }, 2000);
  };

  const handleSubmitOTP = (event) => {
    event.preventDefault();

    // Code to verify the entered OTP (via API call, for example)
    // Replace the following code with your implementation

    // Simulating API call delay for demonstration purposes
    setTimeout(() => {
      if (enteredOTP === '123456') {
        alert('OTP verified successfully!');
      } else {
        alert('Incorrect OTP. Please try again.');
      }
    }, 2000);
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
        {!otpSent && (
          <form onSubmit={handleSubmitPhoneNumber}>
            <label className="name-label text-center">
              <input
                type="number"
                className="form-control"
                id="phoneNumber"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </label>
            <br></br>
            <button type="submit" className="otp_button">
              Send OTP
            </button>
          </form>
        )}

        {otpSent && (
          <form onSubmit={handleSubmitOTP}>
            <h3 className="text-center enter_otp">Enter the OTP:</h3>
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
            <button type="submit" className="otp_button">
              Verify OTP
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Admin_Page;
