import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import CartCard from "./CartCard"
import NavCart from './NavCart';
import BillDetails from './BillDetails';

const CartA = () => {
    let arr=[1,2,3,4,4,5,5,6,6,1]
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
          arr.map((el,i)=>{
            return(
              <CartCard key={i}/>
            )
          })
        }
      </Box>
      <Box w={"30%"} >
        <BillDetails/>
      </Box>
    </Box>
  </Box>
  </Box>
    );
};

export default CartA;