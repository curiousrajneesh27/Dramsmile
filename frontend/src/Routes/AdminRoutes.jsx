import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Admin/Login'
import Home from '../Pages/Admin/Home'

const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/special_offers" element={<Home />} />
        <Route path="/logout" element={<Home />} />
      </Routes>
    </div>
  )
}

export default AdminRoutes;
