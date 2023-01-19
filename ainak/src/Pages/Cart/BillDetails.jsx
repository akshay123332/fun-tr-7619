import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const BillDetails = () => {
    let style={
        display:"flex",
        justifyContent:"space-between",
        alignItem:"center",
        boxSizing: "border-box",
        fontSize:"14px"
    }

    return (
        <Box maxWidth={"20%"}>
            <Box style={style}>
                <Text fontSize="4px">Total Price</Text>
                <Text>₹1899</Text>
            </Box>
            <hr/>
            <Box style={style}>
                <Text>Total Offer Discount</Text>
                <Text>₹99</Text>
            </Box>
            <hr/>
            <Box style={style}>
                <Text>Final Price</Text>
                <Text>₹1899</Text>
            </Box>
            <hr/>
            <Box style={style}>
                <Text>Tax</Text>
                <Text>₹139</Text>
            </Box>
            <hr/>
            
            <Box style={style}>
                <Text>Convenience Fees</Text>
                <Text>₹139</Text>
            </Box>
            <hr/>
            <Box style={style}>
                <Text>Total payable</Text>
                <Text>₹2004</Text>
            </Box>
        </Box>
    );
};

export default BillDetails;