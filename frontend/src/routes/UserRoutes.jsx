import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import UserHome from '../user/pages/userHome'
import Login from '../components/Login'
import SignUp from '../components/SignUp'

const UserRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Navbar />} />
            <Route path='/home' element={<UserHome/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<SignUp/>}/>

            
        </Routes>
    )
}

export default UserRoutes