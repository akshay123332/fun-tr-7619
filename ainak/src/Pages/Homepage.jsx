import React from 'react'
import Kidsglasses from "./Kidsglasses/Kidsglasses"
import Sunglasses from "./Sunglasses/Sunglasses"
import Travelglasses from "./Travelglasses/Travelglassess"
import Computerglasses from './ComputerGlasses/Computerglasses';
import Eyeglasses from './Eyeglasses/Eyeglasses';

const Homepage = () => {
  return (
    <div>
      <h1>Footer</h1>
      <div>
      <div>Sidebar</div>
      {/* <h1>Eyeglasses</h1>
      
      <h1>ComputerGlasses</h1>
       */}
      <h1>KidsGlasses</h1>
     
      {/* <h1>SunGlasses</h1>
      
      
     <h1>TravelGlasses</h1>
     <Travelglasses/> */}
     </div>
     <h1>Footer</h1>
     <Eyeglasses/>
      <Kidsglasses/>
      <Sunglasses/>
      <Eyeglasses/>
      <Computerglasses/>
    </div>
  )
}

export default Homepage
