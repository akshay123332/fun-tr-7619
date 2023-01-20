import React, { useEffect, useState } from 'react'
import axios from "axios"
import {SimpleGrid } from '@chakra-ui/react'
import ProductCard from './ProductCard'
import styles from "./computer.module.css"
import Sidebar from '../../Components/Sidebar/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import { getData } from '../../redux/menspage/action'

const Computerglasses = () => {
const[produ,setProdu]=useState([])
let comp_url="https://rich-gray-scarab-fez.cyclic.app/computerglasses"

const dispatch=useDispatch()
const data=useSelector((store)=>store.data);
const location=useLocation();
const [searchparams]=useSearchParams()
console.log(data)

useEffect(()=>{
  let order=searchparams.get(`order`)
    let paramObj={
        params:{
            compatible:searchparams.getAll(`compatible`),
            frameshape:searchparams.getAll(`frameshape`),
            _sort: order &&"price",
            _order: order && order
        },
    }
    dispatch(getData(comp_url,paramObj))
},[location.search])

// const getProdu=()=>{
//     axios.get("https://rich-gray-scarab-fez.cyclic.app/computerglasses")
//     .then((res)=>setProdu(res.data))
//     .catch((err)=>console.log(err))
// }
//style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)" , gap:"50px"}}
//console.log(data);

// useEffect(()=>{
//     getData()
// },[])

  return (
    <div>
        <div style={{display:"flex",padding:"5px"}}>
          <div style={{width:"20%", border:"0.5rem double cadetblue", height:"500px",marginTop:"30px", borderRadius:"9px"}}><Sidebar/></div>
          <div  className={`${styles.product}`}>
          {data?.map((el,index)=>{
               return <div style={{border:"thick double #32a1ce",padding:"2.5%" , borderRadius:"9px", backgroundColor:"azure", boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"}} key={el.id} >
               <ProductCard id={el.id} image={el.image} desc={el.desc} price={el.price} rating={el.rating} frameshape={el.frameshape} compatible={el.compatible} />
               </div>
            })}
          </div>
            
        </div>
    </div>
  )
}

export default Computerglasses