import React from 'react'
import { Route, Routes } from 'react-router'
import AdminHome from '../admin/AdminHome'
import Login from '../components/Login'


const AdminRoutes = () => {
  return (
    <Routes>
      <Route path='/admin/add' element={<AdminHome/>}/>
    </Routes>
  )
}

export default AdminRoutes