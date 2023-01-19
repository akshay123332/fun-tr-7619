import React, { useEffect, useState } from 'react'
import axios from "axios"
import {SimpleGrid } from '@chakra-ui/react'
import ProductCard from './ProductCard'
import styles from "./computer.module.css"

const Computerglasses = () => {
const[data,setData]=useState([])

const getData=()=>{
    axios.get("https://rich-gray-scarab-fez.cyclic.app/computerglasses")
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
        <div columns={[1,2,3,3,3]} spacing={25} padding="2%" className={`${styles.product}`}  >
            {data?.map((el,index)=>{
               return <div style={{border:"thick double #32a1ce",padding:"2%" , borderRadius:"7px" , backgroundColor:"azure", boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"}} key={el.id} >
               <ProductCard id={el.id} image={el.image} desc={el.desc} price={el.price} rating={el.rating} frameshape={el.frameshape} compatible={el.compatible} />
               </div>
            })}
        </div>
    </div>
  )
}

export default Computerglasses