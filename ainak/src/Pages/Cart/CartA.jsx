import { Box, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import CartCard from "./CartCard"
import NavCart from './NavCart';
import BillDetails from './BillDetails';
import { useEffect } from 'react';
import { getData } from './api';

let cartItems=localStorage.getItem("cartItmes")||[]
const CartA = () => {
  const [change,setChange]=useState(false)
    let [data,setData]=useState([])
    
    const HandleChange=()=>{
      setChange((prev)=>!prev)
    }
    useEffect(()=>{
      getData().then((res)=>{
        setData(res)
        cartItems=res
        localStorage.setItem("cartItems",JSON.stringify(cartItems))
        // console.log("res",cartItems)
      })
      
    },[change])
     
     
    
    return (
        <Box backgroundColor={"rgb(251, 249, 247)"} color="gray.900">
    <Box ml={"-18%"}>
    <NavCart/>
    </Box>
    <Box maxWidth={"80%"} m="auto" >
    <Box display="flex" justifyContent={"space-between"} >
      <Box maxW="60%">
      <Text fontSize='2xl' mb={"5%"} textAlign="start">Cart Items {cartItems.length}</Text>
        {
          cartItems.length>0 && cartItems.map((el)=>{
           
            return(
              <CartCard key={el.id} {...el}  HandleChange={HandleChange}/>
            )
          })
        }
      </Box>
      <Box w={"30%"} >
        <BillDetails data={data} />
      </Box>
    </Box>
  </Box>
  </Box>
    );
};

export default CartA;