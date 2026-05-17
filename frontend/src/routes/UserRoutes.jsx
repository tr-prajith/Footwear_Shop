import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import UserHome from '../user/pages/userHome'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import Forgot from '../components/Forgot'
import Reset from '../components/Reset'

const UserRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Navbar />} />
            <Route path='/home' element={<UserHome />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/forgot' element={<Forgot/>}/>
            <Route path='/reset' element={<Reset/>}/>

            
        </Routes>
    )
}

export default UserRoutes