import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'



const Login = () => {

 
  return (
    <div className='container'>
      <div className="card">
        <input type="email" placeholder='Enter Your Email' />
        <input type="password" placeholder='Enter Your Password' />
        <button>Login</button>
        <Link to= '/signup'><p>New Here? Please Register</p></Link>
      </div>
      
    </div>
  )
}

export default Login