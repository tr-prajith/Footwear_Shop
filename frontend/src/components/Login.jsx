import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Login.css'
import { userLogin } from '../Api/api'
import Forgot from './Forgot'



const Login = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await userLogin(form)
      if (res.success) {
        console.log(res.data);
        
        console.log("Logedin Successfully");
        if (res.data === "admin") {
          navigate('/list-products')
        } else {
          navigate('/')
        }

        alert("Loggedin Successfully")
        setForm({
          email: "",
          password: ""
        })
      } else {
        console.log("error")
        alert("Invalid Credentials")
      }
    } catch (error) {
      console.log(error)
      alert("Error in Login")
    }
  }


  return (
    <div className='container'>
      <div className="card">

        {/* left side image section on the card */}
        <div className="left-side">
          <img src="../assets/login.png" alt="login page image" />
        </div>

        {/* Right side form space */}
        <div className="right-side">
          <div className="head">
            <h2>Welcome Back👋</h2>
            <p>Login to continue to your account</p>
          </div>

          <form className='user-form' onSubmit={handleSubmit}>
            <p>Email Address</p>
            <input type="email" name='email' value={form.email} onChange={handleChange} placeholder='Enter Your Email' />
            <p>Password</p>
            <input type="password" name='password' value={form.password} onChange={handleChange} placeholder='Enter Your Password' />

            {/* Navigatoin to Forgot page */}
            <Link to='/forgot' className='link-style'>
              <p className='forgot-password'>
                Forgot Password?
              </p>
            </Link>
            <button className='submit-btn' type='submit'>Login</button>
          </form>

          {/* Navigation to signup page */}
          <Link to='/signup' className='link-style'>
            <p className='reg-text'>
              New Here? <span> Please Register</span>
            </p>
          </Link>


        </div>
      </div>

    </div>
  )
}

export default Login