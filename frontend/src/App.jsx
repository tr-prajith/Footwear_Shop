import React from 'react'
import UserRoutes from './routes/UserRoutes'
import AdminRoutes from './routes/AdminRoutes'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <AdminRoutes />
      <UserRoutes />
    </>







  )
}

export default App