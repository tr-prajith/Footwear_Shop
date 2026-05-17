import React, { useState } from 'react'
import '../styles/Login.css'
import { useNavigate, Link } from 'react-router-dom'
import { userRegister } from '../Api/api'

const SignUp = () => {

  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: "",
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
      const res = await userRegister(form)
      if (res.success) {
        console.log("User created successfully");
        navigate('/login')
        alert("User created successfully")
        setForm({
          name: "",
          email: "",
          password: ""
        })
      } else {
        console.log("Error in creating user ")
      }
    } catch (error) {
      console.log(error);
      alert("User creation failed")

    }
  }
  return (
    <div className='container'>
      <div className="card">

        {/* Left side image section */}
        <div className="left-side">
          <img src="../assets/login.png" alt="Signup page image" />
        </div>

        {/* Right side form detials */}
        <div className="right-side">
          <div className="head">
            <h2>Create Account✨</h2>
            <p>Join StepUp and start shopping</p>
          </div>

          <form className='user-form' onSubmit={handleSubmit}>
            <p>Name</p>
            <input type="text" name='name' value={form.name} onChange={handleChange} placeholder='Enter Your Name' />
            <p>Email Address</p>
            <input type="email" name='email' value={form.email} onChange={handleChange} placeholder='Enter Your Email' />
            <p>Password</p>
            <input type="password" name='password' value={form.password} onChange={handleChange} placeholder='Create a password' />
            <button className='submit-btn' type='submit'>Submit</button>
          </form>


          <Link to='/login' className='link-style'>
            <p className='reg-text'>Already have an account?<span> Login</span> </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp