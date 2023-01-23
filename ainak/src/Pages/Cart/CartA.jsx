import { Box, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import CartCard from "./CartCard"
import NavCart from './NavCart';
import BillDetails from './BillDetails';
import { useEffect } from 'react';
import { getData } from './api';
let Price=0,price=[]
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
        
      })
    },[data])

    const handleRemove=async (id)=>{
      let res=await fetch(`https://rich-gray-scarab-fez.cyclic.app/cart/${id}`,{
        method:"DELETE",
        header:{
          "Content-Type":"application/json"
        }
      })
      let data=await res.json()
// getData().then((res)=>{setData(res)})

let response=await fetch(`https://rich-gray-scarab-fez.cyclic.app/cart`)
let actual=await response.json()
setData(actual)
    }
    
     
     
     
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
          data.length>0 && data.map((el)=>{
            return(
              <CartCard key={el.id} {...el} handleRemove={handleRemove}  HandleChange={HandleChange}/>
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