import React from 'react'

import { Routes, Route } from "react-router-dom"
import Login from '../Pages/Login/Login'
import Signup from '../Pages/signup/Signup'
const AllRoutes = () => {
  return (
    <div>
      <Routes>
         <Route path="/" element={<Login/>}/>
         <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes