import React from 'react'
import { Route, Routes } from 'react-router'
import AdminHome from '../admin/AdminHome'
import Login from '../components/Login'
import ProductList from '../admin/ProductList'


const AdminRoutes = () => {
  return (
    <Routes>
      <Route path='/admin/add' element={<AdminHome/>}/>
      <Route path='list-products' element={<ProductList/>}/>
    </Routes>
  )
}

export default AdminRoutes