import React, { useEffect, useState } from 'react'
import axios from "axios"
import {SimpleGrid } from '@chakra-ui/react'
import ProductCard from './ProductCard'

const Sunglasses = () => {
const[data,setData]=useState([])

const getData=()=>{
    axios.get("https://rich-gray-scarab-fez.cyclic.app/sunglasses")
    .then((res)=>setData(res.data))
    .catch((err)=>console.log(err))
}
//style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)" , gap:"50px"}}
//console.log(data);

useEffect(()=>{
    getData()
},[])

  return (
    <div>
        <SimpleGrid columns={[1,2,3,3,3]} spacing={25} padding="2%"  >
            {data?.map((el,index)=>{
               return <div style={{border:"2px solid grey",padding:"2%" , borderRadius:"7px"}} key={el.id} >
                <ProductCard id={el.id} image={el.image} desc={el.desc} price={el.price} rating={el.rating} frameshape={el.frameshape} compatible={el.compatible} />
               </div>
            })}
        </SimpleGrid>
    </div>
  )
}

export default Sunglasses