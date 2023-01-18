import { Box, Flex, Input, Text } from '@chakra-ui/react'
import {BsFillTelephoneFill} from "react-icons/bs"
import React from 'react'
import "./Navbar.css"
import MainNavbar from './MainNavbar'
import Slider1 from './Sliders/Slider1'
const Navbar = () => {
  return (
    <div>
    <div className='nav1'>
      <p className='text'>Do More, Be More |
Try in 3D |
Store Locator |
Quality |
USA |
Singapore |
UAE |
John Jacobs |
Aqualens |
Cobrowsing |
Engineering Blog |
Lenskart Franchise</p>

<p className='text'>Contact us</p>


    </div>
    <div className='N2'>
    <div>
        <img style={{marginTop:"8px"}} src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg" alt="" />
    </div>
    <div>
        <div className='numinp'>
            
            <Flex fontSize={'2xl'} p={5}>
                <Box m={2} >
                <BsFillTelephoneFill /> 
                </Box>
                <p pb={2} fontSize={'1xl'} fontWeight='bold'> 
                1800-111-111
                </p>
               
                </Flex>
               <Input placeholder='what are you looking for' borderRadius={5} border={'1px solid gray'} w={'38rem'} h={10} mt={5}></Input>
        </div>
    </div>
    <Flex cursor={'pointer'}>
        <p className='text1'>Track Order</p>
        <p className='text1'>Sign In & Sign Up </p>
        <p className='text1'>Wishlist</p>
        <p className='text1'>Cart</p>
    </Flex>
    </div>
    <MainNavbar/>
    <div className='gif1'>
        <img src="https://static1.lenskart.com/media/desktop/img/Dec22/15-Dec/bogo11.gif" alt="" />
         <div className='1Cor'>
           <Slider1/>
        </div>       
    </div>
    </div>
    
  )
}

export default Navbar
