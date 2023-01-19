import React from 'react';
import {Link} from "react-router-dom"
import { Text, Image, Flex, Box, Button } from '@chakra-ui/react'

const CartCard = () => {
    let url="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-sky-full-rim-hustlr-eyeglasses_blue-block-screen-glasses_-peyush-bansal-shark-tank-_-sky-blue-transparent-full-rim-wayfarer-lenskart-hustlr-lb-e14058-h-c3_csvfile-1671778849582-hustlr_1_28_12_2022.jpg"
    return (
        <Box className="App" display="flex" maxWidth="50%" margin={"auto"} flexDirection="row" alignItems="center" gap="16px" boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} boxSize="border-box" padding={"20px 40px"} borderRadius="12px">
          <Box boxSize='30%'>
            <Image src={url} alt='Dan Abramov' />
          </Box>
          <Box mt="10px" mb={"10px"} >
            <Link>
            <Flex justifyContent={"space-between"}>
              <Text maxWidth="80%" textAlign="left">
              Black Green Full Rim Aviator Vincent Chase Polarized Vintage Vc S14076-C3 Sunglasses
              </Text>
              <Text >$13030</Text>
            </Flex>
            </Link>
            <hr/>
            <Box  mt={"10px"} mb="10px">
              <Flex alignItems='center' justifyContent={"space-between"} fontWeight={"600"}>
              <Text >Final Price</Text>
              <Text>$1599</Text>
              </Flex>
            </Box>
            <hr/>
            <Box display="flex" justifyContent="flex-start" gap="15%" mt={"10px"}>
            <Button fontStyle="inherit">Remove</Button>
          <Button>Repeat</Button>
            </Box>
         
          </Box>
         
        </Box>
      );
};

export default CartCard;