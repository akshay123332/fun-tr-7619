import React, { useEffect, useState } from 'react'
import axios from "axios"
import ProductCard from './ProductCard'
import styles from "./travelglass.module.css"
import Sidebar from '../../Components/Sidebar/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import { getData } from '../../redux/menspage/action'

const Travelglasses = () => {
// const[data,setData]=useState([])

// const getData=()=>{
//     axios.get("https://rich-gray-scarab-fez.cyclic.app/travelglasses")
//     .then((res)=>setData(res.data))
//     .catch((err)=>console.log(err))
// }
// //style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)" , gap:"50px"}}
// //console.log(data);

// useEffect(()=>{
//     getData()
// },[])

let travel_url="https://rich-gray-scarab-fez.cyclic.app/eyeglasses"

const dispatch=useDispatch()
const data=useSelector((store)=>store.data);
const location=useLocation();
const [searchparams]=useSearchParams()
console.log(data)

useEffect(()=>{
    let paramObj={
        params:{
            compatible:searchparams.getAll(`compatible`),
            frameshape:searchparams.getAll(`frameshape`)
        },
    }
    dispatch(getData(travel_url,paramObj))
},[location.search])

  return (
    <div>
         <div style={{display:"flex"}}>
         <div style={{width:"20%", border:"0.5rem double cadetblue", height:"500px",marginTop:"30px", borderRadius:"9px"}}><Sidebar/></div>
          <div columns={[1,2,3,3,3]} spacing={25} padding="2%" className={`${styles.product}`}>
          {data?.map((el,index)=>{
               return <div style={{border:"thick double #32a1ce",padding:"2%" , borderRadius:"7px" , backgroundColor:"azure", boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"}} key={el.id} >
               <ProductCard id={el.id} image={el.image} desc={el.desc} price={el.price} rating={el.rating} frameshape={el.frameshape} compatible={el.compatible} />
               </div>
            })}
          </div>
            
        </div>
    </div>
  )
}

export default Travelglasses