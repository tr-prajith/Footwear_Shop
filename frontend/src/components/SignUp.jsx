import React from 'react'
import '../styles/user/Login.css'

const SignUp = () => {
  return (
    <div className='container'>
        <div className="card">
            <input type="text" placeholder='Enter Your Name' />
            <input type="email" placeholder='Enter Your Email' />
            <input type="password" placeholder='Create a password' />
            <button>Submit</button>
        </div>
    </div>
  )
}

export default SignUp