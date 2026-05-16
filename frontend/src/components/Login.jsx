import React, { useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import '../styles/Login.css'
import { userLogin } from '../Api/api'



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
        console.log("Logedin Successfully");
        navigate('/')
        setForm({
          email: "",
          password: ""
        })
      } else {
        console.log("error")
      }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='container'>
      <div className="card">
        <form action="" onSubmit={handleSubmit}>
          <input type="email" name='email' value={form.email} onChange={handleChange} placeholder='Enter Your Email' />
          <input type="password" name='password' value={form.password} onChange={handleChange} placeholder='Enter Your Password' />
          <button type='submit'>Login</button>
          <Link to='/signup'><p>New Here? Please Register</p></Link>
        </form>
      </div>

    </div>
  )
}

export default Login