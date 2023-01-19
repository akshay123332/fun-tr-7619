import { Text } from '@chakra-ui/react'
import { NavbarData } from './NavbarData'
import React from 'react'
import "./MainNavbar.css"
const MainNavbar = () => {
    console.log(NavbarData)
  return (
    <div>
      <div className='nav'>
            {
                NavbarData.map((item,index)=>{
                    return (
                       <div key={index}>{item.name}</div>
                    )
                })
            }
      </div>
    </div>
  )
}

export default MainNavbar

