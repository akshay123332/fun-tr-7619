import React from 'react'
import styles from "./computer.module.css"
//import {CiStar} from "react-icons/fa"

const ProductCard = ({id,image,desc,price,rating,frameshape,compatible}) => {
  return (
    <div>
        <img style={{width:"50%"}} src={image} alt={desc} />
        <p className={`${styles.productfont}`}>{desc}</p>
        <h3 className={`${styles.descfont}`}>{`${desc} :  ${frameshape} :  ${compatible}`}</h3>
        <h2 className={`${styles.rupees}`}>Rs : {price}</h2>
        <p>Rating: {rating} </p>
        <button className={`${styles.button}`}>ADD TO CART</button>
    </div>
  )
}

export default ProductCard