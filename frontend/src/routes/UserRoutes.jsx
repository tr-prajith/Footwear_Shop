import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import UserHome from '../user/pages/userHome'

const UserRoutes = () => {
    return (
        <Routes>
            <Route path='/navbar' element={<Navbar />}>
                {/* <Route path='/home' element={UserHome} /> */}

            </Route>
        </Routes>
    )
}

export default UserRoutes