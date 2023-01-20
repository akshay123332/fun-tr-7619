import { Box, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import CartCard from "./CartCard"
import NavCart from './NavCart';
import BillDetails from './BillDetails';
import { useEffect } from 'react';
import { getData } from './api';


const CartA = () => {
  const [change,setChange]=useState(false)
    let [data,setData]=useState([])
    
    const HandleChange=()=>{
      setChange((prev)=>!prev)
    }
    useEffect(()=>{
      getData().then((res)=>{
        setData(res)
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
      <Text fontSize='2xl' mb={"5%"}>Cart Items 3</Text>
        {
          data.map((el)=>{
           
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