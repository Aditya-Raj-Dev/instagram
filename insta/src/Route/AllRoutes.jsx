import React from 'react'
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import { Routes, Route } from "react-router-dom"
const AllRoutes = () => {
  return (
    <div>
      <Routes>
         <Route path="/" element={<Signup/>}/>
         <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes