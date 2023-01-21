import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import Eyeglasses from "../Pages/Eyeglasses/Eyeglasses"
import Kidsglasses from '../Pages/Kidsglasses/Kidsglasses'
import Travelglassess from '../Pages/Travelglasses/Travelglassess'
import Sunglasses from '../Pages/Sunglasses/Sunglasses'
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/eyeglasses' element={<Eyeglasses/>}/>
        <Route path='/kidsglasses' element={<Kidsglasses/>} />
        <Route path='/sunglasses' element={<Sunglasses/>} />
        <Route path='/travelglasses' element={<Travelglassess/>} />
        <Route path="*" element={<Homepage/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes
