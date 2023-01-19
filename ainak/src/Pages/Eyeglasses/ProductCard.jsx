import React from 'react'
import styles from "./eyeglass.module.css"
//import {CiStar} from "react-icons/fa"
import axios from "axios"

const ProductCard = ({id,image,desc,price,rating,frameshape,compatible}) => {

  const handlecart=(id,image,desc,price,rating,frameshape,compatible)=>{
    console.log(id,image,desc,price,rating,frameshape,compatible);
    let cartobj={
      id,image,desc,price,rating,frameshape,compatible
    }
    axios.post("https://rich-gray-scarab-fez.cyclic.app/cart",cartobj).then((res)=>console.log(res)).catch((Err)=>console.log(Err))
    
      }

  return (
    <div>
        <img style={{width:"50%"}} src={image} alt={desc} />
        <p className={`${styles.productfont}`}>{desc}</p>
        <h3 className={`${styles.descfont}`}>{`${desc} :  ${frameshape} :  ${compatible}`}</h3>
        <h2 className={`${styles.rupees}`}>Rs : {price}</h2>
        <p>Rating: {rating} </p>
        <button onClick={()=>handlecart(id,image,desc,price,rating,frameshape,compatible)} className={`${styles.button}`}>ADD TO CART</button>
    </div>
  )
}

export default ProductCard