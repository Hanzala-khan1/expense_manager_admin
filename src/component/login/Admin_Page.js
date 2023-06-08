import React, { useState } from 'react'
import './admin.css';
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";
import email from '../../assets/email.svg'
import lock from '../../assets/lock.svg'
import half from '../../assets/half.svg'
import { App_host } from '../../assets/dataconfig';
function Admin_Page() {

  const [error, setError] = useState(false)
  const [errorvalue, setErrorvalue] = useState("")
  const [loginform, setLoginform] = useState({
    email: "",
    password: ""
  })
  const navigate = useNavigate();
  const loginformchange = (e) => {
    setLoginform(
      (prev) => ({ ...prev, [e.target.id]: e.target.value })
    )
  }

  const Loginclick = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = loginform
      if (!email || !password) {
        setError(true);
        setErrorvalue("Please fill in both email and password fields.");
        return;
      }
      const res = await axios({
        method: 'post',
        url: `${App_host}/user/loginAdmin`,
        data: {
          email: email,
          password: password
        }
      });
      // Set user object in local storage
      localStorage.setItem('user', JSON.stringify(res.data.data));
      navigate("/user")
    } catch (err) {
      setError(true)
      setErrorvalue(err.response.data.message)
      console.log(err)
    }
  }

  return (
    <div className='mainlogin'>
      <div className="login-container">
        <h1>Welcome to, Expense Manager!</h1>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" required onChange={loginformchange} value={loginform.email} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required onChange={loginformchange} value={loginform.password} />
          </div>
          <div className="form-group">
            <button type="submit" onClick={Loginclick}>Login</button>
          </div>
          {error && <div className="form-group">
            <span className="error-message">{errorvalue}</span>
          </div>}
        </form>
      </div>
    </div>
  )
}

export default Admin_Page
