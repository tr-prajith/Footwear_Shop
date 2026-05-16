import React from 'react'
import { Route, Routes } from 'react-router-dom'

import UserHome from '../user/pages/userHome'

import SignUp from '../components/SignUp'
import Login from '../components/Login'
import Navbar from '../components/Navbar'

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